const _dashboardService = require('../services/dashboard-service');
const loadEjs = require('../utils/loadEjs');
const Card = require('../models/card');
const parseRequestBody = require('../utils/parser');

const getDashboard = async (req, res) => {
    const cards = await _dashboardService.getAllCards();
    console.log("cards: ", cards);
    loadEjs("dashboard", req, res, cards);
};
const getCreatePage = (req, res) => {
    loadEjs("create", req, res);
};
const getUpdatePage = async (req, res) => {
    const { url } = req;
    const id = url.split("/")[3];
    const cardId = id.replace("/", "");

    const cards = await _dashboardService.getAllCards();
    const card = cards.find(c => c.id === cardId);

    console.log("getUpdatePage card", card);

    if (card) {
        loadEjs("update", req, res, card);
    } else {
        generateResponse({
            res: res,
            status: 500,
            header: CONTENT_TYPES['.json'],
            data: { error: 'update failed' }
        });
    }
};
const createCard = async (req, res) => {
    const body = await parseRequestBody(req);
    const card = new Card(body.title, body.desc, body.icon);
    const result = await _dashboardService.createCard(card);

    if (result) {
        res.writeHead(302, {
            'Location': '/dashboard'
        });
        res.end();
    } else {
        generateResponse({
            res: res,
            status: 500,
            header: CONTENT_TYPES['.json'],
            data: { error: 'Create failed' }
        });
    }
};
const deleteCard = async (req, res) => {
    const { url } = req;
    const id = url.split("/")[3];
    const cardId = id.replace("/", "");

    const deletedCard = await _dashboardService.deleteCard(cardId);

    if (deletedCard) {
        res.writeHead(302, {
            'Location': '/dashboard'
        });
        res.end();
    } else {
        generateResponse({
            res: res,
            status: 500,
            header: CONTENT_TYPES['.json'],
            data: { error: 'Card was not found' }
        });
    }
};

module.exports = { getDashboard, getCreatePage, getUpdatePage, createCard, deleteCard };