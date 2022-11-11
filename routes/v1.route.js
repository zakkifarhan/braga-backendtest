/* eslint-disable max-len */
const express = require('express');
const router = express.Router();

const LineRoute = require('../app/modules/line/line.route');
const routes = [
  { path: '/line', route: LineRoute },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
