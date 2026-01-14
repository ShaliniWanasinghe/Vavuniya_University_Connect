

const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: [
        "General",
        "Academic",
        "Welfare",
        "Sports",
        "Societies",
        "StudentServices",
      ],
      required: true,
    },

    subCategory: {
      type: String,
      enum: ["Marketplace", "Hostel", "LostAndFound", "Donations"],
    },

    priority: {
      type: String,
      enum: ["NORMAL", "IMPORTANT"],
      default: "NORMAL",
    },

    dueDate: {
      type: Date,
    },

    status: {
      type: String,
      enum: ["PENDING", "PUBLISHED"],
      default: "PENDING",
    },

    isTrending: {
      type: Boolean,
      default: false,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    approvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notice", noticeSchema);
