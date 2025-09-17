import mongoose, { Schema, Document } from "mongoose";

interface IMessage extends Document {
  name: string;
  phone: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

const messageSchema: Schema = new Schema(
  {
    name: { type: String, required: true, minlength: 2 },
    phone: { type: String, required: true },
    message: { type: String, required: true, minlength: 2 },
  },
  { timestamps: true }
);

export default mongoose.model<IMessage>("Message", messageSchema);
