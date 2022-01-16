const express = require("express");
const router = express.Router()
const {getLatAndLong} = require("../controllers/task2")

//task2
router.post("/task2", getLatAndLong);

module.exports = router;