const limit = new RegExp('^([1-9]|1[0-9]|1[0-9][0-9]|2[0-9]|2[0-9][0-9]|3[0-9]|3[0-9][0-9]|4[0-9]|4[0-9][0-9]|5[0-9]|5[0-9][0-9]|6[0-9]|6[0-9][0-9]|7[0-9]|7[0-9][0-9]|8[0-9]|8[0-9][0-9]|9[0-9]|9[0-9][0-9]|10[0-9][0-9]|11[0-9][0-9]|12[0-9][0-9]|13[0-9][0-9]|14[0-4][0])$');

module.exports = require('yargs')
    .options({
        'number': {
            alias: 'n',
            describe: 'provide a number (repeat bell every n minutes)'
        }
    })
    .number('n')
    .default('number', 20)
    .check((argv) => {
        if (limit.test(argv.n)) return true;
        throw new Error('n must be a number between 1 and 1440');
    })
    .help()
    .argv;