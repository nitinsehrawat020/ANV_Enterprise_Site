import DesignModel from "../models/design.module.js";
import { v2 as cloudinary } from "cloudinary";

import FavoriteModel from "../models/favorite.module.js";
import uploadImageClodinary from "../utils/uploadImageClodinary.js";

export async function postAddDesignController(req, res) {
  try {
    console.log("📝 Request body:", req.body);
    console.log("📁 Files received:", req.files);

    const { title, designType, designArea, description, ETA, rating } =
      req.body;
    const designImages = req.files; // Changed from req.file to req.files

    if (!designImages || designImages.length === 0) {
      return res.status(400).json({
        message: "At least one image is required",
        success: false,
        error: true,
      });
    }

    // Upload all images to Cloudinary
    const uploadPromises = designImages.map(async (image) => {
      return await uploadImageClodinary(image, "design");
    });

    const uploadResults = await Promise.all(uploadPromises);

    // Extract secure URLs
    const imageUrls = uploadResults
      .map((result) => result?.secure_url)
      .filter(Boolean);

    if (imageUrls.length === 0) {
      return res.status(500).json({
        message: "Failed to upload images to Cloudinary",
        success: false,
        error: true,
      });
    }

    const payload = {
      title,
      designType,
      designArea,
      description,
      ETA,
      rating,
      images: imageUrls, // Array of image URLs
    };

    const newDesign = new DesignModel(payload);
    const save = await newDesign.save();

    return res.status(200).json({
      message: "Design has been successfully added with multiple images",
      success: true,
      error: false,
      data: {
        designId: save._id,
        imagesUploaded: imageUrls.length,
      },
    });
  } catch (error) {
    console.error("❌ Error in postAddDesignController:", error);
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function getDesignController(req, res) {
  try {
    const data = await DesignModel.find();

    res.status(200).json({
      message: "All the design has been fetch",
      data: data,
      error: false,
      success: true,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: error.message || error, success: false, error: true });
  }
}

export async function getMoldingDesignController(req, res) {
  try {
    const data = await DesignModel.find({ designType: "molding" });

    res.status(200).json({
      message: "all the designs fetched",
      success: true,
      error: false,
      data: data,
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

export async function getFlaseCeilDesignController(req, res) {
  try {
    const data = await DesignModel.find({ designType: "false-ceil" });

    res.status(200).json({
      message: "all the designs fetched",
      success: true,
      error: false,
      data: data,
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

export async function getDesignDetailsController(req, res) {
  try {
    const designId = req.params.designId;
    DesignModel.findById(designId).then((design) => {
      res.status(200).json({
        message: "design details ",
        success: true,
        error: false,
        data: design,
      });
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

export async function putEditDesignController(req, res) {
  try {
    const designId = req.params.designId;
    const { title, designType, designArea, description, ETA, rating } =
      req.body;
    const update = await DesignModel.updateOne(
      { _id: designId },
      {
        ...(title && { title: title }),
        ...(designArea && { designArea: designArea }),
        ...(designType && { designType: designType }),
        ...(description && { description: description }),
        ...(ETA && { ETA: ETA }),
        ...(rating && { rating: rating }),
      }
    );
    console.log(update);

    res.status(200).json({
      message: "the design has been successfully updated",
      success: true,
      error: false,
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

export async function deleteDesignController(req, res) {
  try {
    const designId = req.params.designId;
    const design = await DesignModel.findById(designId);

    if (!design) {
      return res.status(404).json({
        message: "Design not found",
        success: false,
        error: true,
      });
    }

    // Delete all images from Cloudinary
    if (design.images && design.images.length > 0) {
      const deletePromises = design.images.map(async (imageUrl) => {
        try {
          const urlParts = imageUrl.split("/");
          const publicIdWithExtension = urlParts[urlParts.length - 1];
          const publicId = publicIdWithExtension.split(".")[0];
          const fullPublicId = `ANV Enterprise/design/${publicId}`;

          await cloudinary.uploader.destroy(fullPublicId);
          console.log(`Deleted image ${fullPublicId} from Cloudinary`);
        } catch (cloudinaryError) {
          console.error(
            "Error deleting image from Cloudinary:",
            cloudinaryError
          );
        }
      });

      await Promise.all(deletePromises);
    }

    const deleteDesign = await DesignModel.deleteOne({ _id: designId });
    await FavoriteModel.updateMany(
      { designId: designId },
      { $pull: { designId: designId } }
    );

    res.status(200).json({
      message: "Design and all images deleted successfully",
      success: true,
      error: false,
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
