const express = require("express");
const todoRoutes = require("./routes/todoRoutes");
const errorHandler = require("./utils/errorHandler");

const app = express();

app.use(express.json());

app.use("/api/todos", todoRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT} da ishlayapti`);
});
