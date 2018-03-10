'use strict';
const { readFile } = require('fs');
const chalk = require('chalk');
const log = console.log;
module.exports = { displayArt };

function displayArt() {
    readFile('./cognizant.txt', 'ascii', (err, results) => {
        log('\n', '\n', '\n', '\n');
        log(chalk.cyanBright(results));
        log('\n', '\n', '\n', '\n');
    });
}