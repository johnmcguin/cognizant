#! /usr/bin/env node
'use strict';
const { exec } = require('child_process');
const args = process.argv.slice(2); // ignore first two args: [node, path to executable]
const { readFile } = require('fs');
// 
let file = readFile('./nirvana.txt', 'ascii', (err, results) => {
    console.log(err);
    console.log(results);
});