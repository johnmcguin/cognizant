#! /usr/bin/env node
'use strict';
const { exec } = require('child_process');
const { displayArt } = require('./utils/display');
const { showProgress } = require('./utils/progress');
const argv = require('./utils/yargs');
let milliseconds = argv.n * 60000;
///////////////////////
cognizant(milliseconds);
///////////////////////
function cognizant(ms) {
    displayArt();
    playBell(ms);
    setInterval(() => {
        playBell(ms);
    }, ms);
}

function playBell(ms) {
    exec('afplay ./assets/singing-bowl.wav');
    showProgress(ms);
}