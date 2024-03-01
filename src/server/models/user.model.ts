import mongoose, { Schema } from "mongoose";

/**
 * User schema
 */
export interface IUser {
  /**
   * Unique identifier of the user
   */
  _id: string;

  /**
   * Display name of the user containing first and last name
   */
  displayName: string;

  /**
   * Email address of the user
   */
  email: string;
  /**
   * Encrypted Password of the user
   */
  password: string;
  /**
   * Created At of the user
   */
  createdAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    displayName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

UserSchema.index({ email: 1 });

/**
 * User Model
 */
export const User = mongoose.model<IUser>("User", UserSchema);
