const parseRequestBody = require('../utils/parser');
const loadEjs = require('../utils/loadEjs');
const User = require('../models/User');
const generateResponse = require('../utils/responseGenerator');
const _authService = require('../services/auth-service');
const { CONTENT_TYPES } = require('../utils/constants');

const getLogin = (req, res) => {
    loadEjs("login", req, res);
};

const loginUser = async (req, res) => {
    const body = await parseRequestBody(req);
    const result = await _authService.verifyUser(body);
    if (result) {
        res.writeHead(302, {
            'Location': '/'
        });
        res.end();
    } 
    else {
        generateResponse({
            res: res,
            status: 500,
            header: CONTENT_TYPES['.json'],
            data: { error: 'Registration Failed' }
        });
    }
};

const getRegister = (req, res) => {
    loadEjs("Register", req, res);
};

const registerUser = async (req, res) => {
    const body = await parseRequestBody(req);
    const user = new User(body.email, body.username, body.password, true);
    const result = await _authService.signUp(user);

    if (result) {
        res.writeHead(302, {
            'Location': '/login'
        });
        res.end();
    } 
    else {
        generateResponse({
            res: res,
            status: 500,
            header: CONTENT_TYPES['.json'],
            data: { error: 'Registration Failed' }
        });
    }
};

module.exports = {
    getLogin,
    getRegister,
    registerUser,
    loginUser
};