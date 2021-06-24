const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver')




async function letsGo() {

    let driver = await new webdriver.Builder().forBrowser('chrome').build()

    await driver.get('https://ptushki.org/');
    await driver.findElement(By.xpath('//*[@id="menu-item-18430"]/a')).click();
    if (await driver.findElement(By.xpath('//a[@href="https://ptushki.org/about"][@aria-expanded="true"]')) === true) {
        await driver.get("//a[contains(text(),'Клуб200')]").click;
    }

    //await driver.findElement(By.xpath("//input[@name='tab-1'][@value='razmer-3']")).click();

    //  if (driver.findElement(By.xpath("//a[contains(text(),'Время')][@class='current']") === false)) {

    //      await driver.findElement.By.xpath("//input[@type='checkbox'][@value='place-1zz']").click;

    //  }



    //   await driver.quit();


}


letsGo();