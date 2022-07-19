const {readFile, writeFile} = require('fs')
console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return;
    }
    const first = result;
    readFile('./content/subfolder/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return;
        }
        const second = result;
        writeFile('./content/result-hrd.txt', `Result: ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err)
            }
            console.log('done');
        })
    })
})
console.log('starting next');