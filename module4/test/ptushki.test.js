const {Builder, By, Key, until} = require('selenium-webdriver');
const webDriver = require('selenium-webdriver');
const webDriverGecko = require('selenium-webdriver');
const chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

describe("Test ptushki.org with webdriver and browsers", function () {
    describe("birdwatch test", function () {
        describe("birdwatch test chrome", function () {
            it("find magpie", async () => {
                let BirdName = "Сорока";
                driver = new webDriver.Builder().forBrowser('chrome').build();
                await driver.get('http://guide.florafauna.by/bird.html');
                await driver.findElement(By.xpath("//input[@name='tab-1'][@value='razmer-3']")).click();
                await driver.manage().setTimeouts({ implicit: 5000 });
                let result = await driver.findElement(By.
                    xpath("//p[contains(text(),'Сорока')]")).getText();
                console.log(result);
                expect(BirdName).to.eql(result);
                await driver.quit();
            });

            it("find Woodcock", async () => {
                let BirdName = "Вальдшнеп";
                driver = new webDriver.Builder().forBrowser('chrome').build();
                await driver.get('http://guide.florafauna.by/bird.html');
                await driver.findElement(By.xpath("//input[@name='tab-1'][@value='razmer-3']")).click();
                await driver.manage().setTimeouts({ implicit: 5000 });
                let result = await driver.findElement(By.
                    xpath("//p[contains(text(),'Вальдшнеп')]")).getText();
                console.log(result);
                expect(BirdName).to.eql(result);
                await driver.quit();
            });

            it("find Corn bunting", async () => {
                let BirdName = "Просянка";
                driver = new webDriver.Builder().forBrowser('chrome').build();
                await driver.get('http://guide.florafauna.by/bird.html');
                await driver.findElement(By.xpath("//input[@name='tab-1'][@value='razmer-2']")).click();
                await driver.manage().setTimeouts({ implicit: 5000 });
                let result = await driver.findElement(By.
                    xpath("//p[contains(text(),'Просянка')]")).getText();
                console.log(result);
                expect(BirdName).to.eql(result);
                await driver.quit();
            });

            it("find Eurasian blue tit", async () => {
                let BirdName = "Обыкновенная лазоревка";

                driver = new webDriver.Builder().forBrowser('chrome').build();
                await driver.get('http://guide.florafauna.by/bird.html');
                await driver.findElement(By.xpath("//input[@name='tab-1'][@value='razmer-1']")).click();
                await driver.manage().setTimeouts({ implicit: 5000 });
                let result = await driver.findElement(By.
                    xpath("//p[contains(text(),'Обыкновенная лазоревка')]")).getText();
                console.log(result);
                expect(BirdName).to.eql(result);
                await driver.quit();
            });

            it("find Pygmy cormorant", async () => {
                let BirdName = "Малый баклан";

                driver = new webDriver.Builder().forBrowser('chrome').build();
                await driver.get('http://guide.florafauna.by/bird.html');
                await driver.findElement(By.xpath("//input[@name='tab-1'][@value='razmer-4']")).click();
                await driver.manage().setTimeouts({ implicit: 5000 });
                let result = await driver.findElement(By.
                    xpath("//p[contains(text(),'Малый баклан')]")).getText();
                console.log(result);
                expect(BirdName).to.eql(result);
                await driver.quit();
            });

            it("find Osprey", async () => {
                let BirdName = "Скопа";

                driver = new webDriver.Builder().forBrowser('chrome').build();
                await driver.get('http://guide.florafauna.by/bird.html');
                await driver.findElement(By.xpath("//input[@name='tab-1'][@value='razmer-5']")).click();
                await driver.manage().setTimeouts({ implicit: 5000 });
                let result = await driver.findElement(By.
                    xpath("//p[contains(text(),'Скопа')]")).getText();
                console.log(result);
                expect(BirdName).to.eql(result);
                await driver.quit();
            });
        });
        describe("birdwatch test firefox", function () {
            it("find Osprey", async () => {
                let BirdName = "Скопа";

                driver = new webDriverGecko.Builder().forBrowser('firefox').build();
                await driver.get('http://guide.florafauna.by/bird.html');
                await driver.findElement(By.xpath("//input[@name='tab-1'][@value='razmer-5']")).click();
                await driver.manage().setTimeouts({ implicit: 5000 });
                let result = await driver.findElement(By.
                    xpath("//p[contains(text(),'Скопа')]")).getText();
                console.log(result);
                expect(BirdName).to.eql(result);
                await driver.quit();
            });
        });

    });

});