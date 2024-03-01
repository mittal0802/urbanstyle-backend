import mongoose, { Schema } from "mongoose";
import { ICartItem } from ".";

/**
 * Address Schema
 */
export interface IAddress {
  /**
   * Address
   */
  address: string;
  /**
   * First Name
   */
  firstName: string;
  /**
   * Last Name
   */
  lastName: string;
  /**
   * Mobile Number
   */
  phone: string;
}

/**
 * Order Schema
 */
export interface IOrder {
  /**
   * Unique identifier of the order
   */
  _id: string;
  /**
   * Address
   */
  address: IAddress;
  /**
   * Cart Items
   */
  cartItems: ICartItem[];
  /**
   * Total Price
   */
  totalPrice: number;
  /**
   * User Id
   */
  userId: string;
  /**
   * Created At
   */
  createdAt: Date;
}

const OrderSchema = new Schema<IOrder>(
  {
    address: {
      type: {
        address: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        phone: { type: String, required: true },
      },
      required: true,
    },
    cartItems: {
      type: Schema.Types.Mixed,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

OrderSchema.index({ userId: 1 });

/**
 * User Order Model
 */
export const Order = mongoose.model<IOrder>("Order", OrderSchema);
