const User = require("../models/User");
const Notice = require("../models/Notice");

// Get all users (admin only)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password").sort({ createdAt: -1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get pending moderator approvals (admin only)
exports.getPendingModerators = async (req, res) => {
  try {
    const pendingModerators = await User.find({ 
      role: "moderator", 
      isApproved: false 
    }).select("-password").sort({ createdAt: -1 });
    res.json(pendingModerators);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Approve moderator (admin only)
exports.approveModerator = async (req, res) => {
  try {
    const moderator = await User.findByIdAndUpdate(
      req.params.id,
      { isApproved: true },
      { new: true }
    ).select("-password");
    
    if (!moderator) {
      return res.status(404).json({ message: "Moderator not found" });
    }
    
    res.json(moderator);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Reject/delete moderator (admin only)
exports.rejectModerator = async (req, res) => {
  try {
    const moderator = await User.findByIdAndDelete(req.params.id);
    
    if (!moderator) {
      return res.status(404).json({ message: "Moderator not found" });
    }
    
    res.json({ message: "Moderator rejected and deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all notices with status (admin only)
exports.getAllNotices = async (req, res) => {
  try {
    const notices = await Notice.find()
      .populate("createdBy", "name email")
      .populate("approvedBy", "name email")
      .sort({ createdAt: -1 });
    res.json(notices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get pending notices (admin only)
exports.getPendingNotices = async (req, res) => {
  try {
    const pendingNotices = await Notice.find({ status: "PENDING" })
      .populate("createdBy", "name email")
      .sort({ createdAt: -1 });
    res.json(pendingNotices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Approve notice (admin only)
exports.approveNotice = async (req, res) => {
  try {
    const notice = await Notice.findByIdAndUpdate(
      req.params.id,
      { 
        status: "PUBLISHED",
        approvedBy: req.user._id
      },
      { new: true }
    ).populate("createdBy", "name email")
     .populate("approvedBy", "name email");
    
    if (!notice) {
      return res.status(404).json({ message: "Notice not found" });
    }
    
    res.json(notice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete notice (admin only)
exports.deleteNotice = async (req, res) => {
  try {
    const notice = await Notice.findByIdAndDelete(req.params.id);
    
    if (!notice) {
      return res.status(404).json({ message: "Notice not found" });
    }
    
    res.json({ message: "Notice deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Toggle trending status (admin only)
exports.toggleTrending = async (req, res) => {
  try {
    const notice = await Notice.findById(req.params.id);
    
    if (!notice) {
      return res.status(404).json({ message: "Notice not found" });
    }
    
    notice.isTrending = !notice.isTrending;
    await notice.save();
    
    res.json(notice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get dashboard statistics (admin only)
exports.getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalModerators = await User.countDocuments({ role: "moderator" });
    const pendingModerators = await User.countDocuments({ 
      role: "moderator", 
      isApproved: false 
    });
    const totalNotices = await Notice.countDocuments();
    const publishedNotices = await Notice.countDocuments({ status: "PUBLISHED" });
    const pendingNotices = await Notice.countDocuments({ status: "PENDING" });
    const trendingNotices = await Notice.countDocuments({ isTrending: true });
    
    const stats = {
      users: {
        total: totalUsers,
        moderators: totalModerators,
        pendingModerators
      },
      notices: {
        total: totalNotices,
        published: publishedNotices,
        pending: pendingNotices,
        trending: trendingNotices
      }
    };
    
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete user (admin only)
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    // Also delete all notices created by this user
    await Notice.deleteMany({ createdBy: req.params.id });
    
    res.json({ message: "User and their notices deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update user role (admin only)
exports.updateUserRole = async (req, res) => {
  try {
    const { role } = req.body;
    
    if (!["admin", "moderator", "user"].includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }
    
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role, isApproved: role === "moderator" ? false : user.isApproved },
      { new: true }
    ).select("-password");
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};