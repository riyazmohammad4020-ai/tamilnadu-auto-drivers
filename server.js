// server.js
require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/districts", require("./routes/districts"));
app.use("/api/places", require("./routes/places"));
app.use("/api/distance", require("./routes/distance"));
app.use("/api/utilities", require("./routes/utilities"));

app.listen(PORT, () => {
  console.log(`Tamil Nadu Auto Drivers server running on http://localhost:${PORT}`);
});
