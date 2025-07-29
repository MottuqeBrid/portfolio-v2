import mongoose from "mongoose";

const EmailSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  subject: {
    type: String,
  },
  body: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isRead: {
    type: Boolean,
    default: false,
  },
});

// Prevent model overwrite error in dev
export default mongoose.models.Email || mongoose.model("Email", EmailSchema);
