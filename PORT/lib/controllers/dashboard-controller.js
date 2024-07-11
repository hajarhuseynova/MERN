const loadEjs = require('../utils/loadEjs');
const parseRequestBody = require('../utils/parser');
const _creatorService = require('../services/creator-service');

const getDashboard = (req, res) => {
  loadEjs("dashboard", req, res);
};

const get = async (req, res) => {
  const body = await parseRequestBody(req);
  const hero = new Hero(body.title);
  const result = await _creatorService.get(hero);
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
      data: {
        error: 'Error occured'
      }
    });
  }
};
const getList = async (req, res) => {};
const getServices = async (req, res) => {};
const getusers = async (req, res) => {};
const getPortfolios = async (req, res) => {};
const getTeam = async (req, res) => {};

module.exports = {
  getDashboard,
  get,
  getList,
  getServices,
  getusers,
  getPortfolios,
  getTeam
};