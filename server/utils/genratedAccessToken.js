import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generatedAccessToken = async (userId) => {
  try {
    const secret = process.env.JWT_ACCESS_TOKEN_SECRET;

    if (!secret) {
      throw new Error(
        "JWT_ACCESS_TOKEN_SECRET is not defined in environment variables"
      );
    }

    const token = jwt.sign(
      { userId },
      secret,
      { expiresIn: "1h" } // Access token typically has shorter expiry
    );

    return token;
  } catch (error) {
    console.error("Error generating access token:", error.message);
    throw error;
  }
};

export default generatedAccessToken;
