const express = require('express');
const Order = require('../models/Order');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', protect, async (req, res) => {
  const query = req.user.role === 'admin' ? {} : { user: req.user._id };
  const orders = await Order.find(query).populate('items.menuItem').populate('user');
  res.json(orders);
});

router.post('/', protect, async (req, res) => {
  const { items, total, address } = req.body;
  const order = await Order.create({ user: req.user._id, items, total, address });
  res.status(201).json(order);
});

module.exports = router;