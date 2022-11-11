const express = require('express');
const validate = require('../../../app/middlewares/validate.middleware');

const LineController = require('./line.controller');
const LineValidation = require('./line.validation');

const router = express.Router();

router.route('/')
  .get(LineController.index)
  .post(validate(LineValidation.create), LineController.store);

module.exports = router;