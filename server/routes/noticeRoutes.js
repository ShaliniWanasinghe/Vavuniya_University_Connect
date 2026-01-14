const express = require("express");
const router = express.Router();
const {
  createNotice,
  approveNotice,
  deleteNotice,
  getPublishedNotices
} = require("../controllers/noticeController");

const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

// Moderator
router.post("/", protect, authorizeRoles("moderator"), createNotice);

// Admin
router.put("/:id/approve", protect, authorizeRoles("admin"), approveNotice);
router.delete("/:id", protect, authorizeRoles("admin"), deleteNotice);

// User
router.get("/", protect, getPublishedNotices);

module.exports = router;
