const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { id: 1, plate: "QAA1234A", status: "Available" },
    { id: 2, plate: "QAB5678B", status: "In Use" }
  ]);
});

module.exports = router;
