require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const parser = require("body-parser");
const cors = require("cors");

const noteRoutes = require("./routes/note");

const app = express();
const PORT = process.env.PORT || 5500;

// middlewares
app.use(parser.json());
app.use(cors());

// routes
app.use("/api", noteRoutes);

// DB connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTED TO DATABASE");
  })
  .catch((err) => console.log(err));

// start server
app.listen(PORT, () => {
  console.log("Server has been started on http://localhost:" + PORT + "/");
});
