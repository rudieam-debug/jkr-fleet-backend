const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();  // ✅ this line is important

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Add this for debugging (temporary)
console.log("MONGO_URI:", process.env.MONGO_URI);

const connectDB = async () => {
  try {
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

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
