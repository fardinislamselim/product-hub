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

export const getProducts = async () => {
  try {
    const products = await dbConnect(collectionName.product).find({}).toArray();
    return products.map(serializeProduct);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};

export const getSingleProduct = async (id) => {
  try {
    if (!id || id.length !== 24) return {};
    const query = { _id: new ObjectId(id) };
    const product = await dbConnect(collectionName.product).findOne(query);
    return serializeProduct(product) || {};
  } catch (error) {
    console.error("Failed to fetch single product:", error);
    return {};
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
