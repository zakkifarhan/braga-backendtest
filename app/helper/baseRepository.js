class BaseRepository {
  constructor(model) {
    if (this.constructor === BaseRepository) {
      throw new Error("Can't instantiate abstract class!");
    }
    this.model = model;
  }

  async findAll(options) {
    return this.model.findAll({ ...options });
  }

  async create(data, options) {
    return this.model.create(data, { ...options });
  }
}

module.exports = BaseRepository;
