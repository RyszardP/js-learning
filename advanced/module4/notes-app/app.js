const yargs = require('yargs');
const notes = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

yargs.command({
    command: 'read',
    describe: 'read note by its title',
    handler: function () {
        console.log('read note by its title')
    }
})

yargs.command({
    command: 'list',
    describe: 'list your notes',
    handler: function () {
        console.log('list your notes')
    }
})

console.log(yargs.argv)