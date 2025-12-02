import mongoose from "mongoose";

const cardSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    link: { type: String, required: true, trim: true },
<<<<<<< HEAD
    description: { type: String, required: true },
    like: {
      type: Boolean,
      default: false,
    },
=======
    description: { type: String},
>>>>>>> 385ca70d6cffd6157791c4e454d316f35031cbe3
  },
  { timestamps: true }
);
export const Card = mongoose.model("Card", cardSchema);
