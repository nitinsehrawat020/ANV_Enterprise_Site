import DesignModel from "../models/design.module.js";
import { v2 as cloudinary } from "cloudinary";

import FavoriteModel from "../models/favorite.module.js";
import uploadImageClodinary from "../utils/uploadImageClodinary.js";

export async function postAddDesignController(req, res) {
  try {
    const { title, designType, designArea, description, ETA, rating } =
      req.body;

    const designImage = req.file;

    if (!designImage) {
      return res.status(500).json({
        message: " there is a issue uploading the photo at the server",
        success: false,
        error: true,
      });
    }

    const upload = await uploadImageClodinary(designImage, "design");

    const payload = {
      title,
      designType,
      designArea,
      description,
      ETA,
      rating,
      image: upload?.secure_url,
    };

    const newDesign = new DesignModel(payload);
    const save = await newDesign.save();

    return res.status(200).json({
      message: "design has been  succesfully added ",
      success: true,
      error: false,
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
    // First get the design to access the image URL
    const design = await DesignModel.findById(designId);

    if (!design) {
      return res.status(404).json({
        message: "Design not found",
        success: false,
        error: true,
      });
    }

    // Extract public_id from Cloudinary URL
    if (design.image) {
      const urlParts = design.image.split("/");
      const publicIdWithExtension = urlParts[urlParts.length - 1];
      const publicId = publicIdWithExtension.split(".")[0]; // Remove file extension

      // Path will be something like "ANV Enterprise/design/publicId"
      const fullPublicId = `ANV Enterprise/design/${publicId}`;

      try {
        // Delete image from Cloudinary
        await cloudinary.uploader.destroy(fullPublicId);
        console.log(`Deleted image ${fullPublicId} from Cloudinary`);
      } catch (cloudinaryError) {
        console.error("Error deleting image from Cloudinary:", cloudinaryError);
        // Continue with deletion even if Cloudinary fails
      }
    }

    const deleteDesign = await DesignModel.deleteOne({ _id: designId });
    await FavoriteModel.updateMany(
      { designId: designId },
      { $pull: { designId: designId } }
    );
    res.status(200).json({
      message: "design deleted successfully",
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
