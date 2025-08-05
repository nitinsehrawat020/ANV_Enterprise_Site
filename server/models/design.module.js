import mongoose from "mongoose";

const designSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    designType: {
      type: String,
      enum: ["molding", "false-ceil"],
      required: true,
    },
    designArea: { type: String, required: true },
    description: { type: String },
    ETA: { type: String },
    rating: { type: Number },
    images: [{ type: String }], // Changed from single String to Array of Strings
  },
  { timestamps: true }
);

const DesignModel = mongoose.model("design", designSchema);

export default DesignModel;
