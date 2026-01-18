"use server";
import { collectionName, dbConnect } from "@/lib/db.js";
import { ObjectId } from "mongodb";

// Mock products data as fallback
const MOCK_PRODUCTS = [
  {
    _id: new ObjectId().toString(),
    name: "Premium Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    category: "Electronics",
    price: 129.99,
    image: "https://via.placeholder.com/300x300?text=Headphones",
    createdAt: new Date().toISOString(),
  },
  {
    _id: new ObjectId().toString(),
    name: "Classic Leather Jacket",
    description: "Stylish and durable leather jacket",
    category: "Fashion",
    price: 189.99,
    image: "https://via.placeholder.com/300x300?text=Jacket",
    createdAt: new Date().toISOString(),
  },
  {
    _id: new ObjectId().toString(),
    name: "Smartphone",
    description: "Latest model smartphone with advanced features",
    category: "Electronics",
    price: 799.99,
    image: "https://via.placeholder.com/300x300?text=Smartphone",
    createdAt: new Date().toISOString(),
  },
];

const serializeProduct = (product) => {
  if (!product) return null;
  return {
    ...product,
    _id: typeof product._id === "object" ? product._id.toString() : product._id,
    createdAt: product.createdAt ? new Date(product.createdAt).toISOString() : null,
  };
};

export const getProducts = async ({
  search = "",
  category = "",
  sort = "newest",
  page = 1,
  limit = 12,
  minPrice = null,
  maxPrice = null,
} = {}) => {
  try {
    const skip = (page - 1) * limit;
    const filter = {};

    // Search Filter
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
      ];
    }

    // Category Filter
    if (category && category !== "All") {
      filter.category = category;
    }

    // Price Filter
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = parseFloat(minPrice);
      if (maxPrice) filter.price.$lte = parseFloat(maxPrice);
    }

    let sortOption = {};
    switch (sort) {
      case "price_asc":
        sortOption = { price: 1 };
        break;
      case "price_desc":
        sortOption = { price: -1 };
        break;
      case "newest":
      default:
        sortOption = { createdAt: -1 };
        break;
    }

    const collection = dbConnect(collectionName.product);
    
    // Get total count for pagination
    const totalCount = await collection.countDocuments(filter);
    
    const products = await collection
      .find(filter)
      .sort(sortOption)
      .skip(skip)
      .limit(limit)
      .toArray();

    return {
      products: products.map(serializeProduct),
      totalCount,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: page
    };
  } catch (error) {
    // If MongoDB connection fails, return mock data
    console.warn("MongoDB connection failed, using mock data:", error.message);
    
    let filteredProducts = [...MOCK_PRODUCTS];
    
    // Apply search filter
    if (search) {
      filteredProducts = filteredProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.description.toLowerCase().includes(search.toLowerCase()) ||
          p.category.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    // Apply category filter
    if (category && category !== "All") {
      filteredProducts = filteredProducts.filter((p) => p.category === category);
    }
    
    // Apply price filter
    if (minPrice || maxPrice) {
      filteredProducts = filteredProducts.filter((p) => {
        if (minPrice && p.price < parseFloat(minPrice)) return false;
        if (maxPrice && p.price > parseFloat(maxPrice)) return false;
        return true;
      });
    }
    
    // Apply sorting
    if (sort === "price_asc") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "price_desc") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }
    
    // Apply pagination
    const skip = (page - 1) * limit;
    const paginatedProducts = filteredProducts.slice(skip, skip + limit);
    
    return {
      products: paginatedProducts.map(serializeProduct),
      totalCount: filteredProducts.length,
      totalPages: Math.ceil(filteredProducts.length / limit),
      currentPage: page,
    };
  }
};

export const getSingleProduct = async (id) => {
  try {
    if (!id || id.length !== 24) {
      // Return mock product if not valid MongoDB ID
      return MOCK_PRODUCTS[0];
    }
    const query = { _id: new ObjectId(id) };
    const product = await dbConnect(collectionName.product).findOne(query);
    return serializeProduct(product);
  } catch (error) {
    console.warn("Failed to fetch single product, using mock:", error.message);
    // Return mock product on error
    return MOCK_PRODUCTS[0];
  }
};

export const getFeaturedProducts = async () => {
  try {
    let products = await dbConnect(collectionName.product)
      .find({ featured: true })
      .limit(4)
      .toArray();
      
    if (products.length === 0) {
       products = await dbConnect(collectionName.product).find({}).limit(4).toArray();
    }
    
    return products.map(serializeProduct);
  } catch (error) {
    console.warn("Failed to fetch featured products, using mock data:", error.message);
    // Return mock products on error
    return MOCK_PRODUCTS.slice(0, 4).map(serializeProduct);
  }
};
