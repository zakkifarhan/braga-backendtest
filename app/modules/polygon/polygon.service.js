const PolygonRepository = require('./polygon.repository');

class PolygonService {
  async create(data, options) {
    return PolygonRepository.create(data, options);
  }
  async findAll(data, options) {
    return PolygonRepository.findAll(data, options);
  }
}

module.exports = new PolygonService();