const webdriver = require('selenium-webdriver');
const { By } = require('selenium-webdriver');
let chrome = require('selenium-webdriver/chrome');
let path = require('chromedriver').path;


class LibraryPage {
    constructor() {

        let service = new chrome.ServiceBuilder(path).build();
        chrome.setDefaultService(service);

        this.driver = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome())
            .build();
    }

    navigateToPage(url) {
        this.driver.get(url);
        this.driver.sleep(3000);
    }

    inputToField(txt) {
        this.driver.findElement(By.xpath("//*[@id='ember26']")).sendKeys(txt);

    }

    findText() {
        console.log(this.driver.findElement(By.xpath("//h1")).getText());

    }

    waitAndQuit() {
            this.driver.sleep(1000);
            this.driver.quit();
    }

}
module.exports = {
    LibraryPage: LibraryPage
}