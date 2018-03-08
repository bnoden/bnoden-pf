const mongoose = require('mongoose');

const MediaSchema = require('./sub/media');

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required.']
  },
  description: String,
  media: [MediaSchema],
  notes: String,
  tags: [String],
  section: String
});

const Project = mongoose.model('project', ProjectSchema);

module.exports = Project;
