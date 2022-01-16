const express = require("express");
const router = express.Router()
const {getDevicesAndStatus} = require("../controllers/task1")

//task1
router.post("/task1/:collection1/:collection2", getDevicesAndStatus);

module.exports = router;