const BaseRepository = require('../../helper/baseRepository');
const { Polygon } = require('../../../database/models');

class PolygonRepository extends BaseRepository {
  //
}

module.exports = new PolygonRepository(Polygon);