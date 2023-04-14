const mongoose = require("mongoose");

// Create connection to database
const connection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Connect to database successful. ${conn.connection.host}`.underline.blue
    );
  } catch (error) {
    console.log(`Connection to database failed ${error}`.underline.red);
  }
};

module.exports = connection;
