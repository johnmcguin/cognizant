#! /usr/bin/env node
'use strict';
const { exec } = require('child_process');
const args = process.argv.slice(2); // ignore first two args: [node, path to executable]
// 