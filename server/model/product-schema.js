//here we are validating the data before saving it into the database.
//validates the pictures with small heading
import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  url: String,
  defaultUrl: String,
  title: Object,
  price: Object,
  quantity: Number,
  description: String,
  discount: String,
  tagline: String,
});
const Product = mongoose.model("product", ProductSchema);
export default Product;
