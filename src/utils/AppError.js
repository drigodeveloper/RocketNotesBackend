class AppError {
    message;
    statusCode;

    constructor(message, statusCode = 400) {

    }
};

module.exports = AppError;