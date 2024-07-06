import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // status: {
  //   type: Boolean,
  //   required: true,
  // },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
});

export const TaskModel = mongoose.model("todos", TaskSchema);
