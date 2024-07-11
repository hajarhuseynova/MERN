const {HOME_ENDPOINT} = require('../utils/url-helper');
const homeController = require('../controllers/home-controller');
const Router = require("./router");

const router = new Router();
router.addRoute(HOME_ENDPOINT, homeController.getHome);

module.exports = router.handleRoute.bind(router);