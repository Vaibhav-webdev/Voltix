import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  image: String,
  description: String,
  description2: String,
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);