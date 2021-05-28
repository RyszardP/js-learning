const fs = require('fs')
const chalk = require('chalk')
const notes = require('./notes.json')

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("new notes added!"))
    } else {
        console.log(chalk.yellow.inverse("Note title taken!"))
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const noteToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > noteToKeep.length) {
        console.log(chalk.yellow.inverse("note removed"))
        saveNotes(noteToKeep)
    } else {
        console.log(chalk.red.inverse("note not found"))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse("Your notes"))
    notes.forEach((note) => {
        console.log(chalk.gray.inverse(note.title))
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.inverse("Note doesnt found"))
    }
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('./notes.json', dataJson)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('./notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}


