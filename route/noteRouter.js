const express = require("express");
const router = express.Router();
const noteController = require("../controller/noteController")

router.get('/notes',noteController.getAllNotes) ;
router.post('/notes/save',noteController.saveNote) ;
router.post('/update',noteController.updateNote) ;
router.get('/delete',noteController.deleteNote) ;

module.exports = router ;