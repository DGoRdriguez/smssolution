'use strict';

const controller = {};
const response_management = require('../../application/protected/server/response.management');
const aws_sqs = require("../../application/protected/aws/sqs");

// Ping controller response to the client avaliable services
controller.ping = async function (res) {
    aws_sqs.push_message();
    return response_management.custom_response(res, 200, 'pong');
}

module.exports = controller;