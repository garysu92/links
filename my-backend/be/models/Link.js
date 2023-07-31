const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
  name: String,
  url: String,
})

const Link = mongoose.model('Link', linkSchema);

module.exports = Link;
