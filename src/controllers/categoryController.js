const Category = require('../models/Category');
exports.getCategories = async (req, res) => {
  const categories = await Category.find();
  res.json({ success: true, data: categories });
};
exports.createCategory = async (req, res) => {
  const category = await Category.create(req.body);
  res.status(201).json({ success: true, data: category });
};
