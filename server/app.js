const path = require("path");
const express = require("express");
const dotenvConfig = require('dotenv').config();
const colors = require("colors");

// Database connection
const connection = require("./config/connection");

// Initialize express
const app = express();

// Initialize database
connection();

// set server port
const PORT = process.env.PORT || 8002;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server connected to PORT: ${PORT} successfully.`.blue);
  } else {
    console.log(`Server connection to PORT: ${PORT} failed`.underline.red);
  }
});
