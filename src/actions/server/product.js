"use server";
import { collectionName, dbConnect } from "@/lib/db.js";
import { ObjectId } from "mongodb";

const serializeProduct = (product) => {
  if (!product) return null;
  return {
    ...product,
    _id: product._id.toString(),
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
    console.error("Failed to fetch products:", error);
    return { products: [], totalCount: 0, totalPages: 0, currentPage: 1 };
  }
};

export const getSingleProduct = async (id) => {
  try {
    if (!id || id.length !== 24) return null;
    const query = { _id: new ObjectId(id) };
    const product = await dbConnect(collectionName.product).findOne(query);
    return serializeProduct(product);
  } catch (error) {
    console.error("Failed to fetch single product:", error);
    return null;
  }
};

export const getFeaturedProducts = async () => {
  try {
    // Fallback to getting 4 items if no "featured" tag exists in current mock data
    // to ensure the UI isn't empty.
    let products = await dbConnect(collectionName.product)
      .find({ featured: true })
      .limit(4)
      .toArray();
      
    if (products.length === 0) {
       products = await dbConnect(collectionName.product).find({}).limit(4).toArray();
    }
    
    return products.map(serializeProduct);
  } catch (error) {
    console.error("Failed to fetch featured products:", error);
    return [];
  }
};
