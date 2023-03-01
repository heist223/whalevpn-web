const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/logout.controller');
const errorHandler = require('../errorHandler')

const schema = require('../../schemas/api/logout.schema')
const validator = require('../../middlewares/validate.middleware')

router.get('/', errorHandler(controller.get));
router.post('/', validator(schema.create), errorHandler(controller.create))
router.put('/', errorHandler(controller.update))
router.delete('/', errorHandler(controller.remove))

module.exports = router;