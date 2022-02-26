const yargs = require('yargs');
const randomEmail = require('random-email');
const argv = yargs
    .command('generate', 'Generate random e-mail', {
    })
    .option('size', {
        alias: 's',
        description: 'How many e-mail do you want to generate.',
        type: 'number'
    })
    .option('post', {
        alias: 'p',
        description: 'Witch post server do you want to use. ex. example.com',
        type: 'string'
    })
    .help()
    .alias('help', 'h').argv;

if(argv._.includes('generate')) {
    let response = [];
    let size = 1;
    if(argv.size) {
        size = argv.size;
    }
    if(argv.post) {
        for(i=0; i<size; i++) {
            response.push(randomEmail({ domain: argv.post}));
        }
    } else {
        for(i=0; i<size; i++) {
            response.push(randomEmail());
        }
    }

    console.log(response);
}