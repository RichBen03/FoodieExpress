const express = require('express');
const Restaurant = require('../models/Restaurant');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', async (req, res) => {
  const restaurants = await Restaurant.find().populate('menu');
  res.json(restaurants);
});

router.post('/', protect, admin, async (req, res) => {
  const restaurant = await Restaurant.create(req.body);
  res.status(201).json(restaurant);
});

module.exports = router;