const mongoose = require("mongoose")

const dbConnect = async() => {
  try {
    await mongoose.connect(process.env.Mongodb_Url);
    console.log("DB Connected successfully");

  } catch(error) {
    console.log("DB issue",error);

  }
}

module.exports = dbConnect;