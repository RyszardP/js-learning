const BasePage = require('./basePage')

class HomePage extends BasePage {
    constructor() {
        super();
       
     this.logo = "//img[@src='https://ptushki.org/wp-content/themes/ptushki/images/apb_logo.png']";
     this.club200 = "//a[@href='https://ptushki.org/about/club200']";
    }
}

module.exports = new HomePage();
