const fs = require('fs')
const path = require('path')

fs.appendFile(
    path.join('./text.txt'),
    'This file was being created by .appendFile in practice.js',
    err => {
        if (err) {
            console.log('error!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        }
        else {
            console.log('success!!!!!!!!!!!!!!!!!')
        }
    }
)

fs.readFile('./text.txt', 'utf-8', (err, data) => err ? console.log(err): console.log(data))

fs.writeFile(
    './text.txt',
    'New text for the file',
    err => {
        if (err) {
            console.log('error!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        }
        else {
            console.log('rewritten!!!!!!!!!!!!!!!!!')
        }
    }
    )
    
fs.rename(
    './text.txt', './newestName.txt', err => {
        if (err) {
            console.log('error!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        }
        else {
            console.log('renamed!!!!!!!!!!!!!!!!!')
        }
    }
)

fs.unlink(
    './newName.txt', err => {
        if (err) {
            console.log('error!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        }
        else {
            console.log('unlinked!!!!!!!!!!!!!!!!!')
        }
    }
)

