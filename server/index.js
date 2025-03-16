const express = require("express");

const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const dbConnect = require("./config/database");
const routes = require("./routes/video.route");
app.use(express.json());

app.use(cors());

// db
dbConnect();

// routes

app.use("/api/video" , routes );

app.listen(PORT , () => {
  console.log("Server listening in port no" , PORT);
});