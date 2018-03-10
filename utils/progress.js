'use strict';
const ProgressBar = require('progress');
module.exports = { showProgress };

function showProgress(ms) {
    let bar = new ProgressBar(':bar :percent', { total: 100, width: 73, clear: true, incomplete: ' ', complete: '-' });
    let timer = setInterval(() => {
        bar.tick();
        if (bar.complete) clearInterval(timer);
    }, (ms / 100));
}