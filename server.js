// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // ✅ Enables reading environment variables from Render or .env

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Debug line: shows if MONGO_URI is being read correctly
console.log("MONGO_URI:", process.env.MONGO_URI ? "Loaded ✅" : "❌ Not Loaded");

// ✅ Connect to MongoDB
const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI environment variable not found");
    }

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(`✅ Database connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`❌ Database connection failed: ${err.message}`);
    process.exit(1);
  }
};

connectDB();

// ✅ Example base route
app.get('/', (req, res) => {
  res.send('🚗 JKR Fleet Backend is running successfully!');
});

// ✅ Start the server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
