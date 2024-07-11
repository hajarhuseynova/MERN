const { LOGIN_USER, LOGIN_ENDPOINT, REGISTER_ENDPOINT, REGISTER_USER } = require('../utils/urlHelper');
const authController = require('../controllers/authController');
const Rooter = require('./router');

const rooter = new Rooter();
rooter.addRoute(LOGIN_ENDPOINT, authController.getLogin);
rooter.addRoute(REGISTER_ENDPOINT, authController.getRegister);
rooter.addRoute(LOGIN_USER, authController.loginUser);
rooter.addRoute(REGISTER_USER, authController.registerUser);

module.exports = rooter.handleRoute.bind(rooter);