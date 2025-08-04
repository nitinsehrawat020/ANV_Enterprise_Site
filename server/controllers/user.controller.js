import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModel from "../models/user.module.js";
import sendMail from "../config/sendMail.js";
import verifyEmailTemplate from "../utils/verifyEmialTemplete.js";

import generatedAccessToken from "../utils/genratedAccessToken.js";
import genertedRefreshToken from "../utils/genratedRefernceToken.js";
import uploadImageClodinary from "../utils/uploadImageClodinary.js";
import generatedOtp from "../utils/genertrateOtp.js";
import forgetPasswordTemplate from "../utils/forgetPasswordTemplete.js";
import { response } from "express";
import FavoriteModel from "../models/favorite.module.js";
import mongoose from "mongoose";

export async function registerUserController(req, res) {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      mobileNumber,
      addressDetails,
    } = req.body;

    const user = await UserModel.findOne({ email });

    if (user) {
      return res.status(400).json({
        status: "error",
        message: `${user.email} already exist please use different email`,
        success: false,
      });
    }
    const salt = await bcrypt.genSalt(32);
    const hashedPassword = await bcrypt.hash(password, salt);
    const payload = {
      firstName,
      lastName,
      email,
      password: hashedPassword,
      mobileNumber,
      addressDetails,
      avatar:
        "https://res.cloudinary.com/docjwachm/image/upload/v1748441791/default-avatar_zmzw5z.webp",
    };

    const newUser = new UserModel(payload);
    const savedUser = await newUser.save();
    const verifyEmaiurl = `${process.env.FRONDEND_URL}/verify-email=${savedUser.id}}`;

    const verifyEmail = await sendMail({
      sendTo: email,
      subject: "Welcome to our ANV Enterprise",
      html: verifyEmailTemplate({
        name: firstName,
        url: `http://localhost:5000/api/user/verify-email/${savedUser._id}`,
      }),
    });

    const newFavorite = new FavoriteModel({
      userId: savedUser._id,
      designId: [],
    });
    const savedFavorite = await newFavorite.save();

    savedUser.favDesign = savedFavorite._id;
    await savedUser.save();

    return res.status(200).json({
      status: "success",
      message: "user registered successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
      success: false,
    });
  }
}

export async function verifyEmailController(req, res) {
  try {
    const { code } = req.body;
    const user = await UserModel.findById({ _id: code });

    if (!user) {
      return res.status(400).json({
        message: "Invalid verification code",
        error: true,
        success: false,
      });
    }

    const updateUser = await UserModel.updateOne(
      { _id: code },
      { verify_email: true }
    );
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || error, error: true, success: false });
  }
}

export async function loginUserController(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        error: true,
        success: false,
      });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "user not register", error: true, success: false });
    }

    if (user.status !== "active") {
      return res.status(400).json({
        message: "Your account is not active",
        error: true,
        success: false,
      });
    }
    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res
        .status(400)
        .json({ message: "Invalid password", error: true, success: false });
    }

    const accessToken = await generatedAccessToken(user._id);
    const refreshToken = await genertedRefreshToken(user._id);
    if (!accessToken || !refreshToken) {
      return res.status(500).json({
        message: "Error generating token",
        error: true,
        success: false,
      });
    }

    const cookiesOptions = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };

    res.cookie("accessToken", accessToken, cookiesOptions);
    res.cookie("refreshToken", refreshToken, cookiesOptions);

    return res.status(200).json({
      message: "User login successfully",
      error: false,
      success: true,
      data: { accessToken, refreshToken },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || error, error: true, success: false });
  }
}

export async function logoutController(request, response) {
  try {
    const userid = request.userId; //middleware

    const cookiesOption = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };

    response.clearCookie("accessToken", cookiesOption);
    response.clearCookie("refreshToken", cookiesOption);

    const removeRefreshToken = await UserModel.updateOne(
      { _id: userid },
      {
        refreshToken: "",
      }
    );

    return response.json({
      message: "Logout successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function uploadAvatarController(req, res) {
  try {
    const userId = req.userId;
    const image = req.file;

    const upload = await uploadImageClodinary(image, "avatar");

    const updateUser = await UserModel.updateOne(
      { _id: userId },
      {
        avatar: upload?.secure_url,
      }
    );

    return res.json({
      message: "Image upload successfully",

      data: upload,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function updateUserDetialsController(req, res) {
  try {
    const userId = req.userId;

    const { firstName, lastName, phoneNumber, address } = req.body;
    console.log(firstName, lastName, phoneNumber, address);

    const updateUser = await UserModel.updateOne(
      { _id: userId },
      {
        ...(firstName && { firstName: firstName }),
        ...(lastName && { lastName: lastName }),
        ...(phoneNumber && { mobileNumber: phoneNumber }),
        ...(address && { address: address }),
      }
    );

    res.status(200).json({
      message: "user updated successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function forgetPasswordController(req, res) {
  try {
    const { email } = req.body;

    const user = await UserModel.findOne({ email });
    console.log(user);

    if (!user) {
      return res.status(400).json({
        message: " No user found with this email Id",
        success: false,
        error: true,
      });
    }
    const otp = generatedOtp();
    const expireTime = new Date() + 60 * 60 * 10;

    const update = await UserModel.findByIdAndUpdate(user._id, {
      forgetPaswordOtp: otp,
      forgetPasswordExpire: new Date(expireTime).toISOString(),
    });

    await sendMail({
      sendTo: email,
      subject: "forget password from ANV Enterprise",
      html: forgetPasswordTemplate({ name: user.name, otp: otp }),
    });

    return res.json({
      message: "OTP send, please check your Email!",
      sucess: true,
      error: false,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || error,
      sucess: false,
      error: true,
    });
  }
}

export async function verifyForgetPasswordOtp(req, res) {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        message: "kindly enter the otp ",
        error: true,
        success: false,
      });
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: " No user found with this email Id",
        success: false,
        error: true,
      });
    }
    const currentTime = new Date().toISOString();

    if (user.forgetPasswordExpire < currentTime) {
      return res.status(400).json({
        message: "otp is expired",
        error: true,
        success: false,
      });
    }

    if (otp !== user.forgetPaswordOtp) {
      return res.status(400).json({
        message: "kindly enter the correct otp",
        error: true,
        success: false,
      });
    }

    const updateUser = await UserModel.findByIdAndUpdate(user?._id, {
      forgetPasswordExpire: null,
      forgetPaswordOtp: "",
    });
    return res.status(200).json({
      message: "otp verify successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function resetPassword(req, res) {
  try {
    const { email, newPassword, confirmedNewPassword } = req.body;
    if ((!email, !newPassword, !confirmedNewPassword)) {
      return res.status(400).json({
        message: "kindly provide all the details",
        error: true,
        success: false,
      });
    }
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: " No user found with this email Id",
        success: false,
        error: true,
      });
    }

    if (newPassword !== confirmedNewPassword) {
      res.status(400).json({
        message: "password and confirmed password did not match!",
        error: true,
        success: false,
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    const update = await UserModel.findByIdAndUpdate(user._id, {
      password: hashedPassword,
    });

    return res.status(200).json({
      message: "password reset succesfully",
      error: false,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function refreshToken(req, res) {
  try {
    const refreshToken =
      req.cookies.refreshToken || req?.header?.authorization?.split(" ")[1];

    if (!refreshToken) {
      return res.status(401).json({
        message: "invalid token ",
        success: false,
        error: true,
      });
    }
    const verifyToken = jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_TOKEN_SECRET
    );

    if (!verifyToken) {
      return response.status(401).json({
        message: "token is expired",
        error: "true",
        sucess: false,
      });
    }

    const userId = verifyToken.userId;

    const cookiesOptions = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };

    const newAccessToken = await generatedAccessToken(userId);
    res.cookie("accessToken", newAccessToken, cookiesOptions);
    res.status(200).json({
      message: "access token created successfully",
      error: false,
      success: true,
      data: { accessToken: newAccessToken },
    });
  } catch (error) {
    return res.status(500).json({
      message: `${error.message || error} error `,
      success: false,
      error: true,
    });
  }
}

export async function addTofav(req, res) {
  try {
    const userId = req.userId;
    const designId = req.params.designId;

    const user = await UserModel.findById({ _id: userId });

    if (!user) {
      return res.status(400).json({
        message: "user does not exist",
        success: false,
        error: true,
      });
    }

    if (!user.favDesign) {
      const newFavorite = new FavoriteModel({
        userId: userId,
        designId: [designId],
      });
      const savedFav = await newFavorite.save();

      const update = await UserModel.findByIdAndUpdate(userId, {
        favDesign: savedFav,
      });

      return res.status(200).json({
        message: "design saved to favorite",
        success: true,
        error: false,
      });
    } else {
      const favorite = await FavoriteModel.findById(user.favDesign);

      if (favorite.designId.includes(designId)) {
        return res.status(400).json({
          message: "design already added in the favorite",
          success: false,
          error: true,
        });
      }

      favorite.designId.push(designId);
      const saved = await favorite.save();

      return res.status(200).json({
        message: "design addded to the favorite successfully",
        success: true,
        error: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

export async function removeFromFav(req, res) {
  try {
    const userId = req.userId;
    const designId = req.params.designId;

    await UserModel.findById(userId)
      .populate("favDesign")
      .then(async (user) => {
        if (!user) {
          return res.status(400).json({
            message: "user cannot be find",
            success: false,
            error: true,
          });
        }

        if (!user.favDesign.designId.includes(designId)) {
          return res.status(400).json({
            message: "design already deleted or may be remove",
            success: false,
            error: true,
          });
        }

        const updatedDesignId = user.favDesign.designId.filter((designIdDb) => {
          return designIdDb.toString() !== designId;
        });

        const update = await FavoriteModel.findOneAndUpdate(
          { userId: new mongoose.Types.ObjectId(userId) },
          { designId: updatedDesignId }
        );

        return res.status(200).json({
          message: "success",
          success: true,
          error: false,
          user: user,
        });
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

export async function userInfo(req, res) {
  try {
    const userId = req.userId;
    const user = await UserModel.findById(userId).populate(
      "favDesign",
      "designId"
    );
    if (!user) {
      return res.status(400).json({
        message: "User not Found",
        success: false,
        error: true,
      });
    }

    const favDesign = user?.favDesign?.designId;

    const {
      _id,
      firstName,
      lastName,
      email,
      avatar,
      mobileNumber,
      status,
      addressDetails,
      userSite,
      role,
    } = user;
    return res.status(200).json({
      message: "user fetch successfully",
      success: true,
      error: false,
      data: {
        _id,
        firstName,
        lastName,
        email,
        avatar,
        mobileNumber,
        status,
        addressDetails,
        userSite,
        role,
        favDesign,
      },
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}
export async function favDesign(req, res) {
  try {
    const userId = req.userId;

    const favDesign = await FavoriteModel.findOne({
      userId: new mongoose.Types.ObjectId(userId),
    }).populate({ path: "designId", model: "design" });

    return res.status(200).json({
      message: "favdesign fetch Succesfully",
      success: true,
      error: false,
      data: favDesign.designId,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

export async function changePassword(req, res) {
  try {
    const userId = req.userId;
    const { curPassword, newPassword, confirmedNewPassword } = req.body;

    if (!curPassword || !newPassword || !confirmedNewPassword) {
      return res.status(400).json({
        message: "kindly provide all the required field",
        success: false,
        error: true,
      });
    }

    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(400).json({
        message: "cant find user with user ",
        success: false,
        error: true,
      });
    }

    const checkPassword = await bcrypt.compare(curPassword, user.password);

    if (!checkPassword) {
      return res
        .status(400)
        .json({ message: "Invalid password", error: true, success: false });
    }
    if (newPassword !== confirmedNewPassword) {
      res.status(400).json({
        message: "password and confirmed password did not match!",
        error: true,
        success: false,
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    const update = await UserModel.findByIdAndUpdate(user._id, {
      password: hashedPassword,
    });

    return res.status(200).json({
      message: "password reset succesfully",
      error: false,
      success: true,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}
