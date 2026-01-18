"use server";

import { collectionName, dbConnect } from "@/lib/db";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
  const { email, password, name } = payload;

  if (!email || !password || !name) {
    return {
      error: "All fields are required",
    };
  }

  try {
    const isExist = await dbConnect(collectionName.users).findOne({ email });
    if (isExist) {
      return {
        error: "User already exists with this email",
      };
    }

    const newUser = {
      provider: "credentials",
      name,
      email,
      password: await bcrypt.hash(password, 10),
    };

    const result = await dbConnect(collectionName.users).insertOne(newUser);

    if (result.acknowledged) {
      return {
        acknowledged: true,
        insertedId: result.insertedId.toString(),
      };
    }
  } catch (error) {
    console.error("Error creating user:", error);
    return {
      error: error.message || "Failed to create user",
    };
  }
};

export const signinUser = async (payload) => {
  const { email, password } = payload;
  if (!email || !password) {
    return {
      error: "All fields are required",
    };
  }

  const user = await dbConnect(collectionName.users).findOne({ email });
  if (!user) {
    return {
      error: "No user found with this email",
    };
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    return user;
  } else {
    return {
      error: "invalid password",
    };
  }
};
