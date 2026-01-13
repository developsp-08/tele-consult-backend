const profile = require("../models/profile");

require("dotenv").config();
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

exports.getProfile = async (req, res) => {
  try {
    
    const user_id = req.user.id; 
    const profileData = await profile.findOne({ user_id });

    if (!profileData) {
      return res.status(404).json({ message: "Profile not found." });
    }

    res.status(200).json(profileData);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: "Error fetching profile" });
  }
};
