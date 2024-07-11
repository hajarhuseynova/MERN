const { DASHBOARD_ENDPOINT, DASHBOARD_CREATE_ENDPOINT, DASHBOARD_CREATE_ACTİON_ENDPOINT, DASHBOARD_DELETE_ACTİON_ENDPOINT } = require('../utils/url-helper');
const dahsboard_Controller = require('../controllers/dashboard-controller');
const Router = require("./router");

const router = new Router();
router.addRoute(DASHBOARD_ENDPOINT, dahsboard_Controller.getDashboard);
router.addRoute(DASHBOARD_CREATE_ENDPOINT, dahsboard_Controller.getCreatePage);
router.addRoute(DASHBOARD_CREATE_ACTİON_ENDPOINT, dahsboard_Controller.createCard);
router.addRoute(DASHBOARD_DELETE_ACTİON_ENDPOINT, dahsboard_Controller.deleteCard);

