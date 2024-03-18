//**CONECTAR A LA BASE DE DATOS */

require("dotenv").config();
const mongoose = require("mongoose");

const dbCon = async () => {
  try {
    await mongoose.connect(process.env.MONGO_FER);
  } catch (error) {
    throw error;
  }
};

module.exports = dbCon;

