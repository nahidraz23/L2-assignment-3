import { Schema, model, Document } from "mongoose";

export interface IBook extends Document {
  title: string;
  author: string;
  available: boolean;
}

const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    available: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default model<IBook>("Book", bookSchema);
