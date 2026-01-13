const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user_id: { type: String, required: true, unique: true }, // เชื่อมกับ UsersSchema
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  specialization: { type: String, required: true }, // ความเชี่ยวชาญ เช่น อายุรแพทย์, กุมารแพทย์
  sub_specialization: { type: String },           // ความเชี่ยวชาญเฉพาะทางย่อย
  medical_license: { type: String, required: true }, // เลขที่ใบประกอบวิชาชีพเวชกรรม (ว.)
  hospital: { type: String },                       // สังกัดโรงพยาบาล/คลินิก
  phone: { type: String },
  
  profile_pic: { type: String, default: "https://via.placeholder.com/150" },
}, { timestamps: true }); // เพิ่ม timestamps เพื่อดูว่าอัปเดตข้อมูลล่าสุดเมื่อไหร่

const Profile = mongoose.model("profile", ProfileSchema, "profile");
module.exports = Profile;