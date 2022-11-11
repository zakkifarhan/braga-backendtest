const express = require('express');
const validate = require('../../../app/middlewares/validate.middleware');

const PolygonController = require('./polygon.controller');
const PolygonValidation = require('./polygon.validation');

const router = express.Router();

router.route('/')
  .get(PolygonController.index)
  .post(validate(PolygonValidation.create), PolygonController.store);

module.exports = router;