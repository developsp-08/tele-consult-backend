const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  user_id: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true }, // ใช้สำหรับ Login
  password: { type: String, required: true },
  name: { type: String, required: true }, // เพิ่มฟิลด์ชื่อ-นามสกุลจริง
  role: { type: String, enum: ["doctor", "admin"], default: "doctor" },
  email: { type: String, required: true },
  profile_pic: { type: String, default: "https://via.placeholder.com/150" },
});

const Users = mongoose.model("users", UsersSchema);
module.exports = Users;
