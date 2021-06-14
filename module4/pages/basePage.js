const {By, until} = require('selenium-webdriver');
const driver = require('selenium-webdriver');

class BasePage {

    constructor() {
        this.driver = driver;

        this.openPage = function (url) {
            return this.driver.get(url);
        }

        this.quit = function () {
            return this.driver.quit();
        }

        this.getPagetitle = function () {
            return this.driver.getTitle();
        }

        this.findByXpath = function (element) {
            this.driver.wait(until.elementLocated(By.xpath(element)), 100000);
            return this.driver.findElement(By.xpath(element));
        }

        this.clickXpathLink = async function (element) {
            let letToClick = await this.findByXpath(element);
            return letToClick.click();
        }
    }
}

module.exports = BasePage;