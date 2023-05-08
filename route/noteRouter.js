const express = require("express");
const router = express.Router();
const noteController = require("../controller/noteController")

router.get('/notes',noteController.getAllNotes) 

module.exports = router ;