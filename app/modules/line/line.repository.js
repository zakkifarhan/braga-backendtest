const BaseRepository = require('../../helper/baseRepository');
const { Line } = require('../../../database/models');

class LineRepository extends BaseRepository {
  //
}

module.exports = new LineRepository(Line);