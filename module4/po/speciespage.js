const { Key } = require('selenium-webdriver');
var BasePage = require('../po/basepage');

class SpiecePage extends BasePage {

    constructor(){
        super();
    }
    sizeThreeRbButton = "//input[@name='tab-1'][@value='razmer-3']";
    sizeTwoRbButton = "//input[@name='tab-1'][@value='razmer-2']";
    sizeOneRbButton = "//input[@name='tab-1'][@value='razmer-1']";

    resultField = "//div[@class='search-title'][contains(text(),'')]";

    clickOnSizeThreeButton() {
        this.clickByXpath(this.sizeThreeRbButton);
    }

    clickOnSizeOneButton() {
        this.clickByXpath(this.sizeOneRbButton);
    }

    findTextInSizeThree() {
        this.findTextOnPageByXpath(this.resultField);

    }

}
module.exports = new SpiecePage();