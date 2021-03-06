// Server setup
const express = require("express");
const app = express();
const api = require("./routes/api");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname, 'dist')))
// app.use(express.static(path.join(__dirname, 'node_modules')))

// Mongoose setup
const connectionKey =
  "mongodb+srv://waiyakanastain:Aa1234@waiyakanastain.uvwc6.mongodb.net/waiyakanastain?retryWrites=true&w=majority";
const mongoose = require("mongoose");
mongoose.connect(connectionKey, { useNewUrlParser: true });

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, Content-Length, X-Requested-With"
    );
  
    next();
  });
app.use("/", api);

const port = 5000;
app.listen(port, function () {
  console.log(`Running on port ${port}`);
});
