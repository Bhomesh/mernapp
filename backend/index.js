const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db");
const connectToMongoDB = require("./db1");
const localDB = require("./db_local");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
// mongoDB();
// connectToMongoDB();
localDB();

app.get("/", (req, res) => {
  res.send("hello  world");
});
app.use(express.json());

app.use("/api/", require("./Routes/CreateUser"));

// app.use("/api/", require("./Routes/SignUp"));

app.listen(port, () => {
  console.log(`connected at ${port}`);
});
