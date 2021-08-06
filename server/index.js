const express = require("express");
const { videos, user } = require("./fakeData");
const app = express();
app.use(express.json());

app.get("/api/user/1", (req, res) => {
  res.json(user);
});

app.get("/api/videos/1", (req, res) => {
  res.json(videos);
});

app.listen(8800, () => {
  console.log("Backend server is running");
});
