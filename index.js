const express = require("express");
const app = express();
const PORT = 500;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend server ishlayapti");
});

app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT} da ishlayapti`);
});
