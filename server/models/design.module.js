import mongoose from "mongoose";

const designSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    designType: { type: String, enum: ["molding", "false-ceil"], default: "" },
    designArea: {
      type: String,
      enum: ["living room", "hall", "kickhen", "bathroom", "wall"],
      default: "",
    },
    description: { type: String, default: "" },
    ETA: { type: Date, default: null },
    rating: { type: Number, default: null },
    image: { type: String, default: null },
  },
  { timestamps: true }
);

const DesignModel = mongoose.model("design", designSchema);

export default DesignModel;
