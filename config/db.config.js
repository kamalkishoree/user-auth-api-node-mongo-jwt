const mongoose = require('mongoose');
require('dotenv').config();

const DB_URI = process.env.DB_URI || "";

async function connectToDatabase() {
  try {
    const con = await mongoose.connect(DB_URI);
    console.log(`mongo db connected: ${con.connection.host}`);
  } catch(e) {
    console.error(e);
  }
}

connectToDatabase(); // Call the async function
