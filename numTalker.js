var _ = require('lodash');
var fs = require('fs');


if (process.argv.length < 3) {
    console.log('please provide rank');
    process.exit(1);
}
var rank = process.argv[2];

if (isNaN(rank)) {
    console.log('rank not a number');
    process.exit(1);
}
fs.readFile('./data.txt', (err, data) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    let talkers = [];
    let text = data.toString();
    let lines = text.split('\n');

    _.forEach(lines, (l) => {
       if (!l.length)
           return;

       let parts = l.split(':');

       talkers.push({ name: parts[0], words: parts[1].split(' ').length});
    });
    if (rank > talkers.length) {
        console.log('rank greater than talkers');
        process.exit(1);
    }
    let byWords = _.orderBy(talkers, 'words', 'desc');

    console.log(byWords[rank - 1].name);

});
