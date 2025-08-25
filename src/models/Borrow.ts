import { Schema, model, Document, Types } from "mongoose";

export interface IBorrow extends Document {
  bookId: Types.ObjectId;   // Use ObjectId instead of string
  memberId: Types.ObjectId; // Same here
  borrowDate: Date;
  returnDate: Date;
}

const BorrowSchema = new Schema<IBorrow>({
  bookId: { type: Schema.Types.ObjectId, ref: "Book", required: true },
  memberId: { type: Schema.Types.ObjectId, ref: "Member", required: true },
  borrowDate: { type: Date, default: Date.now },
  returnDate: { type: Date },
});

export default model<IBorrow>("Borrow", BorrowSchema);
