const util = require('util');
const fs = require('fs');
const path = require('path');
const getRootPath = require('../utils/root-path');
const DATABASE_PATH = path.join(getRootPath(), 'database/db.json');
const generateId = require('../utils/generateUniqueId');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function getAllJsonData() {
    const allText = await readFileAsync(DATABASE_PATH);
    const allData = JSON.parse(allText);
    return allData;
};

async function create( model,jsonKey) {
    const allData = await getAllJsonData();
    const newCard = { "id": generateId(allData[jsonKey]), ...model };
    allData[jsonKey].push(newCard);
    await writeFileAsync(DATABASE_PATH, JSON.stringify(allData, null, 2));
    return newCard;
};

async function removeCard(id,jsonKey) {
    const allData = await getAllJsonData();
    const deleteCard = allData[jsonKey].find((card) => card.id === id);
    const indexDeleteCard = allData[jsonKey].indexOf(deleteCard);
    
    allData[jsonKey].splice(indexDeleteCard, 1);
    await writeFileAsync(DATABASE_PATH, JSON.stringify(allData, null, 2));
    return deleteCard;
};

module.exports = { getAllJsonData, create, removeCard };
