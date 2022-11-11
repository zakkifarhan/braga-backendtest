const catchAsync = require('../../helper/catchAsync');
const { successResponse, errorResponse } = require('../../helper/response');
const LineService = require('./line.service');

const index = catchAsync(async (req, res) => {
  try {
    const result = await LineService.findAll();
    return successResponse(req, res, 'Berhasil mengambil data', result);
  } catch (error) {
    return errorResponse(res, error.message);
  }
});

const store = catchAsync(async (req, res) => {
  const { body } = req;
  try {
    const result = await LineService.create(body);
    return successResponse(req, res, 'Berhasil menyimpan data', result);  
  } catch (error) {
    return errorResponse(res, error.message);
  }
});

module.exports = {
  index,
  store,
};