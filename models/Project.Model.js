import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  longDescription: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    // required: true,
  },
  techStack: {
    type: [String],
    required: true,
  },
  keyFeatures: {
    type: [String],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  images: {
    type: [String],
    default: [],
  },
  links: {
    type: {
      live: String,
      source: String,
      githubClient: String,
      githubServer: String,
    },
    default: {},
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

// Prevent model overwrite error in dev
export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
