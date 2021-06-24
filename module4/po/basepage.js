let webdriver = require('selenium-webdriver');
const { By } = require('selenium-webdriver');
const driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({ implicit: (10000) });

class BasePage {
    constructor() {
        global.driver = driver;
    }

    goToUrl(theURL) {
        driver.get(theURL);
    }

    closePage(){
        driver.close();
    }

    enterTextByXpath(xpath, searchText) {
        driver.findElement(By.xpath(xpath)).sendKeys(searchText);
    }

    enterTextByCss(css, searchText) {
        driver.findElement(By.css(css)).sendKeys(searchText);
    }

    clickById(id) {
        driver.findElement(By.id(id)).click();
    }

    clickByXpath(xpath) {
        driver.findElement(By.xpath(xpath)).click();
    }

    quitPage() {
        driver.quit();
    }

    findElementsOnPage(xpath) {
        driver.findElements(By.xpath(xpath));
    }

    findElementOnPageByXpath(xpath) {
        driver.findElement(By.xpath(xpath));
    }

    findTextOnPageByXpath(xPath) {
     driver.findElement(By.xpath(xPath)).getText();
    }


    scrollToElement(element) {
        element.scrollTopscrollIntoView({ block: "center", behavior: "smooth" });
    }

    sleep(seconds) {
        var e = new Date().getTime() + (seconds * 1000);
        while (new Date().getTime() <= e) { }
    }

}

module.exports = BasePage;
