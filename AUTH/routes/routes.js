const defaultHandler = require('./defaultRouter');
const authHandler = require('./authRooter');

module.exports = [defaultHandler, authHandler];