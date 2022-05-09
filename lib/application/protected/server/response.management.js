'use strict';

const response_management = {};

response_management.custom_response = function (res, code, data) {
    return res.response(data).code(code);
}

response_management.auth_response = function (res, message) {
    return res.response({
        state: false,
        code: 401,
        message: message || 'Unauthorized'
    })
    .code(401);
}

response_management.error_response = function (res, message) {
    return res.response({
        state: false,
        code: 500,
        message: message
    })
    .code(500);
}

response_management.bussines_response = function (res, message) {
    return res.response({
        state: false,
        code: 201,
        message: message
    }).code(201);
}

module.exports = response_management;