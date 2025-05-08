import jwt from "jsonwebtoken";
import UserModel from "../models/user.module.js";

const adminAuth = async (request, response, next) => {
  try {
    const token =
      request.cookies.accessToken ||
      request?.headers?.authorization?.split(" ")[1];

    if (!token) {
      return response.status(401).json({
        message: "Provide token",
      });
    }

    const decode = await jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);

    if (!decode) {
      return response.status(401).json({
        message: "unauthorized access",
        error: true,
        success: false,
      });
    }

    const user = await UserModel.findOne({ _id: decode.userId });

    if (!user) {
      return response.status(401).json({
        message: "cannot find the user ",
        error: true,
        success: false,
      });
    }

    if (user.role !== "admin") {
      return response.status(401).json({
        message: "the login user is not admin ",
        error: true,
        success: false,
      });
    }

    request.userId = decode.userId;

    next();
  } catch (error) {
    return response.status(500).json({
      message: "You have not login", ///error.message || error,
      error: true,
      success: false,
    });
  }
};

export default adminAuth;
