const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [
    {
      menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
      quantity: Number
    }
  ],
  total: Number,
  address: String,
  status: { type: String, enum: ['Pending', 'Preparing', 'Delivered'], default: 'Pending' }
});

module.exports = mongoose.model('Order', orderSchema);