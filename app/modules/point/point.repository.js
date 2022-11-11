const BaseRepository = require('../../helper/baseRepository');
const { Point } = require('../../../database/models');

class PointRepository extends BaseRepository {
  //
}

module.exports = new PointRepository(Point);