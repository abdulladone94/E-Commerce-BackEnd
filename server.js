const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3002, () => {
  console.log("Server up and running on port 3002");
});
