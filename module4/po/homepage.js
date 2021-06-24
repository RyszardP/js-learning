const { Key } = require('selenium-webdriver');
var BasePage = require('../po/basepage');

class HomePage extends BasePage {
 
    searchField = "//input[@name='s']";
    fieldInSearchPage = "//div[@class='col-md-9']";

    enterSearch(searchText) {
        this.enterTextByXpath(this.searchField, searchText);
        this.enterTextByXpath(this.searchField, Key.RETURN);
    }

    findTextOnPage() {
       this.findTextOnPageByXpath(this.fieldInSearchPage);
      
    }

}
module.exports = new HomePage();