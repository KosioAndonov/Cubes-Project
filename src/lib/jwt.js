const {promisify} = require('util');

const jwt = {
    sign: promisify(require('jsonwebtoken').sign),
    verify: promisify(require('jsonwebtoken').verify),
}

module.exports = jwt; 