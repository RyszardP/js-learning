const homePage = require('../po/homepage');
const spiecePage = require('../po/speciespage');
const chai = require('chai');
var expect = chai.expect;

describe('test for birds', function () {
    describe('test for birds search', function () {
        this.timeout(50000);
        beforeEach(function () {
            let baseurl = 'https://ptushki.org/';
            homePage.goToUrl(baseurl);
        });

        afterEach("close page", function () {
            homePage.closePage();
        });

        it('find busel', async () => {
            let BirdName = "Бусел";

            homePage.enterSearch('Бусел');
            let result = homePage.findTextOnPage();
            console.log(result);
            expect(BirdName).to.eql(result);
        });
    });

    describe('test for birds search', function () {
        this.timeout(50000);
        beforeEach(function () {
            let baseurl = 'http://guide.florafauna.by/bird.html';
            spiecePage.goToUrl(baseurl);
        });

        afterEach(function () {
            spiecePage.closePage();
        });

        it('find busel', function () {
            spiecePage.clickOnSizeThreeButton();
            let result = spiecePage.findTextInSizeThree();
            console.log(result);
            expect(BirdName).to.eql(result);
        });

        it('click on first size', function () {
            spiecePage.clickOnSizeOneButton();
        });
    });
});
