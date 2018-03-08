const mongoose = require('mongoose');

const MediaSchema = new mongoose.Schema({
  href: String,
  image: String
});

module.exports = MediaSchema;
