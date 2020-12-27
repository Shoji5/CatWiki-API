import { Document, model, Schema } from "mongoose";

const countSchema = new Schema({
  breed_id: { type: String, required: true },
  count: { type: Number, required: true },
});

const Count = model("count", countSchema);

export type CountDocument = Document & { breed_id: string; count: number };

export default Count;
