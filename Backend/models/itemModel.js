import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, default: Date.now },
  time: { type: String },
  category: { type: String },
  brand: { type: String },
  primaryColor: { type: String },
  secondaryColor: { type: String },
  location: { type: String },
  description: { type: String },
  status: { type: String, default: "lost" },
  imageUrl: { type: String },
  mobileNumber: { type: String },
  email: { type: String },
});

const Item = mongoose.model("Item", itemSchema);
export default Item;
