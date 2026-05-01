class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}

const errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    res.status(err.statusCode).json({
        status: 'error',
        message: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
    // Ensure we don't leak internal details on non-operational errors
    if (!err.isOperational) {
        return res.status(500).json({ message: 'Something went wrong!' });
    }
};

module.exports = { errorHandler, AppError };