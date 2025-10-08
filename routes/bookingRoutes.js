const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { id: 1, vehicle: "QAA1234A", user: "John", status: "Confirmed" },
    { id: 2, vehicle: "QAB5678B", user: "Ali", status: "Pending" }
  ]);
});

module.exports = router;
