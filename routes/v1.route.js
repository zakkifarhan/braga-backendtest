/* eslint-disable max-len */
const express = require('express');
const router = express.Router();

const LineRoute = require('../app/modules/line/line.route');
const PointRoute = require('../app/modules/point/point.route');
const PolygonRoute = require('../app/modules/polygon/polygon.route');

const routes = [
  { path: '/line', route: LineRoute },
  { path: '/point', route: PointRoute },
  { path: '/polygon', route: PolygonRoute },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
