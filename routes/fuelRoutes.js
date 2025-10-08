const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { id: 1, vehicle: "QAA1234A", fuelUsed: "45L", cost: "RM120" },
    { id: 2, vehicle: "QAB5678B", fuelUsed: "60L", cost: "RM160" }
  ]);
});

module.exports = router;
