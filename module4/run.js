const {LibraryPage} = require( './library.js');

let lib = new LibraryPage();
lib.navigateToPage('https://library-app.firebaseapp.com');
lib.findText();
lib.inputToField("hi");
//lib.waitAndQuit();