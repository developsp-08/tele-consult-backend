const jwt = require("jsonwebtoken");
const users = require("../models/users");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  const { username, password } = req.body;

  // ตรวจสอบว่ามีการส่งข้อมูลครบหรือไม่
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  try {
    // ค้นหาผู้ใช้ตาม username
    const user = await users.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "User not found." });
    }
    // ตรวจสอบรหัสผ่าน
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    if (user) {
      const token = jwt.sign(
        { id: user.user_id, username: user.username, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      // ส่ง response พร้อม token และข้อมูล role
      // console.log("Token " + token);
      return res.status(200).json({ 
        token, 
        user: {
          user_id: user.user_id,
          username: user.username,
          name: user.name,
          role: user.role,
          email: user.email,
          profile_pic: user.profile_pic // ถ้ามีฟิลด์นี้ใน MongoDB
        }
      });
    }
    return res.status(401).json({ message: "Invalid credentials" });
  } catch (error) {
    res.status(500).send("Error logging in");
  }
};

module.exports = { login };


