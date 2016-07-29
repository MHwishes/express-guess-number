const router = require('express').Router();

const Controller = require('../../controllers/compare-number');

router.post('/compare', Controller.compare);


module.exports = router;
