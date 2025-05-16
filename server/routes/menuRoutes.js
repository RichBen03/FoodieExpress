const express = require('express');
const MenuItem = require('../models/MenuItem');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', async (req, res) => {
  const items = await MenuItem.find().populate('restaurant');
  res.json(items);
});
// GET /api/menus/:restaurantId — Get menu for a specific restaurant
router.get('/:restaurantId', async (req, res) => {
  try {
    const items = await MenuItem.find({ restaurant: req.params.restaurantId });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch menu items' });
  }
});

router.post('/', protect, admin, async (req, res) => {
  const item = await MenuItem.create(req.body);
  res.status(201).json(item);
});

module.exports = router;