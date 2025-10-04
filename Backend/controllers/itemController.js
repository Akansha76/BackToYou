// controllers/itemController.js
const Item = require('../models/Item');

const getItems = async (req, res) => {
    const items = await Item.find();
    res.json(items);
};

const addItem = async (req, res) => {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(201).json(newItem);
};

module.exports = { getItems, addItem };
