require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const db = require("./config/db.config")

const app = express();
const port =  8000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(cookieParser());
db;
app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`);
});
// Routes
app.use('/api', require('./routes/authRoutes'));
app.use('/api', require('./routes/postRoutes'));








// Routes
app.use('/api', require('./routes/authRoutes'));
app.use('/api', require('./routes/postRoutes'));