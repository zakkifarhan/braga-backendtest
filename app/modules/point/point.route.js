const express = require('express');
const validate = require('../../../app/middlewares/validate.middleware');

const PointController = require('./point.controller');
const PointValidation = require('./point.validation');

const router = express.Router();

router.route('/')
  .get(PointController.index)
  .post(validate(PointValidation.create), PointController.store);

module.exports = router;