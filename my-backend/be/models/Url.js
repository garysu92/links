const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const URL = mongoose.model('Link', urlSchema);

module.exports = URL;
