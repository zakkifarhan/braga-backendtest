const LineRepository = require('./line.repository');

class LineService {
  async create(data, options) {
    return LineRepository.create(data, options);
  }
  async findAll(data, options) {
    return LineRepository.findAll(data, options);
  }
}

module.exports = new LineService();