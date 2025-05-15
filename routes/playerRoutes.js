const express = require('express');
const router = express.Router();
const {
    getPlayers,
    createPlayer,
    updatePlayer,
    deletePlayer,
    getPlayerDescription,
} = require('../controllers/players');
const {validateCreatePlayer,validateUpdatePlayer } = require('../middleware/validate');
const{upload}=require("../middleware/multer")

router.get('/', getPlayers);
router.post('/', upload.single('image'), validateCreatePlayer, createPlayer);
router.patch('/:id',upload.single('image'),updatePlayer);
router.delete('/:id', deletePlayer);
router.get('/:id/description', getPlayerDescription);

module.exports = router;