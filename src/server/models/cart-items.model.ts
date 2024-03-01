import mongoose, { Schema } from "mongoose";

/**
 * Cart Item Schema
 */
export interface ICartItem {
  /**
   * Product Id
   */
  productId: string;
  /**
   * Quantity
   */
  quantity: number;
  /**
   * Price
   */
  price: number;
}

/**
 * Cart Items Schema
 */
export interface ICartItems {
  /**
   * User Id
   */
  userId: string;
  /**
   * Cart Items
   */
  cartItems: Omit<ICartItem, "price">[];
}

const CartItemsSchema = new Schema<ICartItems>(
  {
    userId: { type: String, required: true },
    cartItems: {
      type: [
        {
          productId: { type: String, required: true },
          quantity: { type: Number, required: true },
        },
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

CartItemsSchema.index({ userId: 1 });

/**
 * Cart Item Model
 */
export const CartItem = mongoose.model<ICartItems>("CartItem", CartItemsSchema);
