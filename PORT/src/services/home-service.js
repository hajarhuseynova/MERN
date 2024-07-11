const _baseService = require('./base-service');

async function getAllCards() {
    const result = await _baseService.getAllJsonData();
    return result.cards;
};

module.exports = { getAllCards };