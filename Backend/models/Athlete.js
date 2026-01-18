import mongoose from "mongoose";

const athleteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
    },
    verticalJump: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Athlete", athleteSchema);
