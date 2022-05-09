'use strict';

const Joi = require('joi');

const router = {};

//Controllers import
const ping_controller = require('../controllers/ping.controller');

module.exports = {
    name: 'ping',
    version: '1.0.0',
    register: async (server) => {
        server.route([
            {
                method: 'GET',
                path: '/smssolution/ping',
                handler: async (req, res) => {
                    return await ping_controller.ping(res)
                },
            }
        ])
    }
};
