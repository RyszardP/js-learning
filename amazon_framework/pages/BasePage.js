const { browser } = require('protractor');
const waiters = require('../helpers/waiters.js');
const EC = protractor.ExpectedConditions;

class BasePage {
    constructor() {
        this.startBrowser = url => browser.get(url);

        this.findElement = async askedElement => element(askedElement);

        this.findElementsText = async askedElements => element.all(askedElements).getText();

        this.enterTextInAskedInput = async (askedInput, message) => element(askedInput).sendKeys(message);

        this.getTextFromAskedElement = async elementWithText => element(elementWithText).getText();

        this.clickElement = async elementToClick => element(elementToClick).click();

        this.waitURL = async url => await waiters.waitForUrlToContain(url);

        this.getTextOfItemFromList = async (repeater, itemNumber) => element.all(repeater).get(itemNumber).getText();

        this.findAllElementsOnThePage = async askedElements => element.all(askedElements);

        this.findFirstElementOnThePage = async askedElements => element.all(askedElements).first();

        this.clickAllElementsOnThePage = async askedElements => element.all(askedElements).each(el => {
            el.click();
        });
    }
}

module.exports = BasePage;