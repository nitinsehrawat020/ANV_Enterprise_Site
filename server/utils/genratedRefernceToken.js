import UserModel from "../models/user.module.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const genertedRefreshToken = async (userId) => {
  try {
    // Ensure we're using the correct environment variable
    const secret = process.env.JWT_REFRESH_TOKEN_SECRET;

    // Check if secret is defined
    if (!secret) {
      throw new Error(
        "JWT_REFRESH_TOKEN_SECRET is not defined in environment variables"
      );
    }

    const token = jwt.sign(
      { userId },
      secret,
      { expiresIn: "7d" } // Refresh token typically has a longer expiry
    );

    const updateRefreshTokenUser = await UserModel.updateOne(
      { _id: userId },
      {
        refreshToken: token,
      }
    );

    return token;
  } catch (error) {
    console.error("Error generating refresh token:", error.message);
    throw error;
  }
};

export default genertedRefreshToken;
