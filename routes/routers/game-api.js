
const router = require('express').Router();
const Controller = require('../../controllers/game');

router.get('/game',Controller);

module.exports = router;
