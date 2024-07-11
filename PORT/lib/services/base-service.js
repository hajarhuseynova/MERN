const fs = require('fs');
const path = require('path');
const util = require('util');
const getRootPath = require('../utils/root-path');
const DATABASE_PATH = path.join(getRootPath(), 'database/db.json');
const readFileAsync = util.promisify(fs.readFile);

async function getAllJsonData() {
  const allText = await readFileAsync(DATABASE_PATH);
  const allData = JSON.parse(allText);
  return allData;
};

module.exports = {
  getAllJsonData
};