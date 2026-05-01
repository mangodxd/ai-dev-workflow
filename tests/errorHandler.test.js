const { errorHandler } = require('../src/middleware/errorHandler');

test('Should return correct statusCode from AppError', () => {
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const err = { statusCode: 404, message: 'Not Found' };
    errorHandler(err, {}, res, {});
    expect(res.status).toHaveBeenCalledWith(404);
});