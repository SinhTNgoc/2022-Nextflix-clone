import mongoose from "mongoose";
const { Schema } = mongoose;

const listSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
    },
    genre: {
      type: String,
    },
    content: {
      type: Array,
    },
  },
  { timestamps: true }
);

export default mongoose.model("List", listSchema);
