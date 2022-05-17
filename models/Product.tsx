import mongoose from "mongoose";
import { IProduct, ProductsData } from "../fixtures/BookOnline/productList";

const ProductSchema = new mongoose.Schema<IProduct>(
  {
    id: { type: Number, required: true, unique: true },
    imageUrl: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);
export default Product;
