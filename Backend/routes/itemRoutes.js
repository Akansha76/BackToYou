import express from "express";
import multer from "multer";
import Item from "../models/itemModel.js";

const router = express.Router();

// Multer setup: store files in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// POST /api/items
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const {
      name,
      date,
      time,
      category,
      brand,
      primaryColor,
      secondaryColor,
      location,
      description,
      status,
      mobileNumber,
      email,
    } = req.body;

    const imageBuffer = req.file ? req.file.buffer.toString("base64") : null;

    const item = new Item({
      name,
      date,
      time,
      category,
      brand,
      primaryColor,
      secondaryColor,
      location,
      description,
      status: status || "lost",
      imageUrl: imageBuffer ? `data:${req.file.mimetype};base64,${imageBuffer}` : null,
      mobileNumber,
      email,
    });

    await item.save();
    res.status(201).json(item);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error saving item", error });
  }
});

// GET /api/items
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Error fetching items", error });
  }
});

export default router;

