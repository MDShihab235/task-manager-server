import mongoose from "mongoose";

export const connectDB = () => {
  const url = process.env.DB_URL;

  mongoose
    .connect(url)
    .then(() => {
      console.log("MongoDB is Connected...");
    })
    .catch((err) => {
      console.log("MongoDB Conn Error...", err);
    });
};
