import mongoose from "mongoose";

const DB_URI = process.env.DB_URI || "mongodb://localhost:27017/portfolio";

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      return;
    }
    await mongoose.connect(DB_URI);
  } catch (err) {
    process.exit(1);
  }
};
