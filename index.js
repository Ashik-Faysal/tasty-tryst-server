const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 5000;

// MiddleWare
app.use(cors());

app.get("/", (req, res) => {
  res.send("Tasty Tryst server is running");
});

app.listen(port, () => {
  console.log(`Server is Running on Port ${port}`);
});
