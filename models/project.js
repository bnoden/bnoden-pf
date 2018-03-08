const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required.']
  },
  description: String,
  media: {
    href: String,
    image: String
  },
  mediaPlus: [
    {
      href: String,
      image: String
    }
  ],
  notes: String,
  tags: [String],
  section: String
});

const Project = mongoose.model('project', ProjectSchema);

module.exports = Project;
