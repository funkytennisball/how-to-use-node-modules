const express = require('express');
const logger = require('./logger');
const chalk = require('chalk');
const app = express();
const PORT = 8080;

module.exports = {
  host: (file) => {

    app.get('/', function (req, res) {
      res.sendFile(file);
    });

    app.listen(PORT);
    logger.info(`Server running at port: ${chalk.green(PORT)}`);
  }
};
