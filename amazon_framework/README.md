---
##### Protractor Cucumber Framework Project
This document describes building, testing, releasing Protractor and provides an overview of the framework.

 Requirements:

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

#### Installation
### Node installation on Windows:

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.

Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

Install JDK from https://www.oracle.com/java/technologies/javase-downloads.html.

### Node installation on Ubuntu:

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

If the installation was successful, you should be able to run the following command:
```
$ node --version
```
 and:
```
$ npm --version
```

If you need to update `npm` After running the following command, just open again the command line:
```
    $ npm install npm -g
```

## Install project
```
  $ git clone https://git.epam.com/Maksim_Parcheuski/test.git
```
Use command to install all packages:
```
npm install
```

## Start up Selenium server

First write command in your terminal:
```
npm run update:server
```

Then to start Selenium server use command:
```
npm run start:server 
```
After that use new terminal

## Run tests:
to run all test use command:
```
npm run test
```
