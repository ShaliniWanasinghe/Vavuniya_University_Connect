const Notice = require("../models/Notice");

// Moderator creates notice
exports.createNotice = async (req, res) => {
  try {
    const notice = await Notice.create({
      ...req.body,
      createdBy: req.user._id,
      status: "pending"
    });
    res.status(201).json(notice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Admin approves notice
exports.approveNotice = async (req, res) => {
  try {
    const notice = await Notice.findById(req.params.id);
    notice.status = "published";
    await notice.save();
    res.json(notice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Admin deletes notice
exports.deleteNotice = async (req, res) => {
  try {
    await Notice.findByIdAndDelete(req.params.id);
    res.json({ message: "Notice deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Users view published notices
exports.getPublishedNotices = async (req, res) => {
  const notices = await Notice.find({ status: "published" }).sort({ createdAt: -1 });
  res.json(notices);
};
