const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index.controller');
const errorHandler = require('../routes/errorHandler')

router.get('/', errorHandler(indexController.get));
router.post('/', errorHandler(indexController.create))
router.put('/', errorHandler(indexController.update))
router.delete('/', errorHandler(indexController.remove))

module.exports = router;