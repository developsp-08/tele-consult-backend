const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { swaggerUi, swaggerSpec } = require("./config/swagger"); // Import Swagger
const mongoose = require("mongoose");
const app = require("./app");

dotenv.config({ path: ".env" });
dotenv.config({ path: `.env.${process.env.NODE_ENV}` }); // set run another environment

console.log(`PORT: ${process.env.PORT}`);

// connection MongoDB
const uri = process.env.MONGODB_URI;
const PORT = process.env.PORT;

// mongoose
//   .connect(uri) // ลบ Options ที่ไม่รองรับออก เหลือแค่นี้พอครับ
//   .then(() => console.log("Connected to MongoDB successfully"))
//   .catch((err) => {
//     console.error("Failed to connect to MongoDB:");
//     console.error(err);
//   });

// // Start server
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
//     console.log(`Swagger UI available at http://localhost:${PORT}/api-docs`);
// });

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
      console.log(`Swagger UI available at http://localhost:${PORT}/api-docs`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  });
  // version 2
