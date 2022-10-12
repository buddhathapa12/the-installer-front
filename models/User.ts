import mongoose from "mongoose";
import { Account, User } from "next-auth";

const UserSchema = new mongoose.Schema<User, Account>(
  {
    id: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    image: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const UserDetail = mongoose.models.UserDetail || mongoose.model("UserDetail", UserSchema);
export default UserDetail;
