const router = require('express').Router();

const Controller = require('../../controllers/answer-generator');

router.get('/generate', Controller.generate);


module.exports = router;
