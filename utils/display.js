'use strict';
const { readFile } = require('fs');
const chalk = require('chalk');
const log = console.log;
// fs.readFile(path.join(__dirname,"helpers","test.txt"), 'utf8',function (err,data
const asciiFile = require('path').join(__dirname, '../cognizant.txt');
// const asciiFile = require('path').resolve(__dirname, '../cognizant.txt');
module.exports = { displayArt };

function displayArt() {
    readFile(asciiFile, 'ascii', (err, results) => {
        if (err) log(err);
        log('\n', '\n', '\n', '\n');
        log(chalk.cyanBright(results));
        log('\n', '\n', '\n', '\n');
    });
}