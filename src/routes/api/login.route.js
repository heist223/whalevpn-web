const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/login.controller');
const errorHandler = require('../errorHandler')

router.get('/', errorHandler(controller.get));
router.post('/', errorHandler(controller.create))
router.put('/', errorHandler(controller.update))
router.delete('/', errorHandler(controller.remove))

module.exports = router;