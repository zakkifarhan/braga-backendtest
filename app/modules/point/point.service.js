const PointRepository = require('./point.repository');

class PointService {
  async create(data, options) {
    return PointRepository.create(data, options);
  }
  async findAll(data, options) {
    return PointRepository.findAll(data, options);
  }
}

module.exports = new PointService();