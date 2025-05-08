import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: "user", required: true },
  designId: [{ type: mongoose.Schema.ObjectId, ref: "design" }],
});

const FavoriteModel = mongoose.model("favorite", favoriteSchema);

export default FavoriteModel;
