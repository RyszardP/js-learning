const {Builder, By, Key, until} = require('selenium-webdriver');
const Page = require('../pages/basePage.js');
const HomePage = require('../pages/homePage.js');
const TwoHundred = require('../pages/clubTwoHundred.js');
const chai = require('chai');
var expect = chai.expect;
let page;

describe("Test ptushki.org with page object pattern", function () {
   
    // before("open page", async function () {
    //     page = await new Page();
    //     await page.openPage('https://ptushki.org/');
    // });

    // after("close", async function(){
    //     await page.quit;
    // });

    it('check page title is ',  async () => {
        page =  new Page();
        page.openPage('https://ptushki.org/');
        let expectedTitle = "Галоўная * Грамадская арганізацыя «Ахова птушак Бацькаўшчыны»";
        expect(HomePage.getTitle()).to.equal(expectedTitle);
    });

    it('check page clubTwoHundred ', async () => {
        await page.openPage('https://ptushki.org/');
        await HomePage.clickXpathLink(HomePage.club200);
        let expectedTitle = "Клуб200 * Грамадская арганізацыя «Ахова птушак Бацькаўшчыны»";
        expect(await TwoHundred.getPagetitle()).to.equal(expectedTitle);
    });
});

