const _baseService = require('./base-service');

async function getAllCards() {
    const result = await _baseService.getAllJsonData();
    return result.cards;
};

async function createCard(model) {
    const data = await _baseService.create("cards", model);
    return data;
};

async function deleteCard(cardId) {
    const data = await _baseService.removeCard("cards", cardId);
    return data;
};

module.exports = { createCard, getAllCards, deleteCard };