const express = require("express");
// const jwt = require("jsonwebtoken");
const router = express.Router();
const Equipment = require("../models/Equipment");
const equipments= require("../data/equipmentsApi");


router.get("/getEquipment", (req, res) => {
    res.json({ equipments });
  });

  module.exports = router;