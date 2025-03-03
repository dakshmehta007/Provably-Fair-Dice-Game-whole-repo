const express = require("express");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.post("/roll-dice", (req, res) => {
  const roll = Math.floor(Math.random() * 6) + 1;
  const hash = crypto
    .createHash("sha256")
    .update(roll.toString())
    .digest("hex");
  res.json({ roll, hash });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
