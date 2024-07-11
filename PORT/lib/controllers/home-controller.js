const loadEjs = require('../utils/loadEjs');
const getHome = (req, res) => {
  loadEjs("home", req, res);
};
module.exports = {
  getHome
};