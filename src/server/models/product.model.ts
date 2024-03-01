import mongoose, { Schema } from "mongoose";

/**
 * Product Categories
 */
export enum Category {
  MENS = "mens",
  WOMENS = "womens",
  HATS = "hats",
  JACKETS = "jackets",
  SNEAKERS = "sneakers",
}
/**
 * Product Schema
 */
export interface IProduct {
  /**
   * Unique identifier of the product
   */
  _id: string;
  /**
   * Product Name
   */
  name: string;
  /**
   * Product Price
   */
  price: number;
  /**
   * Product Image URL
   */
  imageUrl: string;
  /**
   * Category
   */
  category: string;
  /**
   * Created At
   */
  createdAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    category: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

ProductSchema.index({ category: 1 });

/**
 * Product Model
 */
export const Product = mongoose.model<IProduct>("Product", ProductSchema);
