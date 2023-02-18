const {dirname} = require('path');

const general = {
    appDir: dirname(require.main.filename),
};

module.exports = general;
