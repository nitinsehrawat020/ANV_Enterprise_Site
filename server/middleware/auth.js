import jwt from "jsonwebtoken";

const auth = (request, response, next) => {
  try {
    const token =
      request.cookies.accessToken ||
      request?.headers?.authorization?.split(" ")[1];

    if (!token) {
      return response.status(401).json({
        message: "Authentication required",
        error: true,
        success: false,
      });
    }

    try {
      const decode = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);
      request.userId = decode.userId;

      next();
    } catch (jwtError) {
      console.log("JWT verification failed:", jwtError.message);
      return response.status(401).json({
        message: "Invalid or expired token",
        error: true,
        success: false,
      });
    }
  } catch (error) {
    console.error("Auth middleware error:", error);
    return response.status(500).json({
      message: "Authentication process failed",
      error: true,
      success: false,
    });
  }
};

export default auth;
