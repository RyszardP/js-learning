const homePage = require('../pages/AmazonHomePage.js');
const todaysDealPage = require('../pages/TodaysDealPage.js');
const chai = require('chai');
const { assert } = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
chai.use(require("chai-sorted"));
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1200);
const { Given, When, Then } = require('@cucumber/cucumber');
const waiters = require('../helpers/waiters.js');
const helper = require('../helpers/helper.js');

Given('I Go to {string}', function (string) {
    homePage.startBrowser(string);
});

When(`I click to "Today's Deals" on top menu`, async function () {
    const arrayOfElements = await homePage.findAllElementsOnThePage(homePage.dontChangeLocalizationButton);
    if (arrayOfElements.length === 1) {
        await homePage.clickElement(homePage.dontChangeLocalizationButton);
    }
    await homePage.clickElement(homePage.todaysDealButton);
});

//@EPMFARMATS-14542 @sortByDiscountHighToLow @filtering
When("I Click drop down button Sort by", async function () {
    await waiters.waitForElementIsVisible(todaysDealPage.sortByDropDownButton);
    await todaysDealPage.clickElement(todaysDealPage.sortByDropDownButton);
});

When("I Select Discount - High To Low", async function () {
    await todaysDealPage.clickElement(todaysDealPage.highToLowOption);
});

Then("Verify that Discount sorted High To Low", async function () {
    await waiters.waitPageReady();
    const arrayDiscount = await todaysDealPage.findElementsText(todaysDealPage.discountField);
    const expectedResult = arrayDiscount.map(element => helper.getPercentageOfDiscountFromPriceMessage(element));
    expect(expectedResult).to.be.descending;
});

//@EPMFARMATS-14544 @goodsPriceUnder$25 @filtering
When("I click on 'Under $25' on left sidebar", async function () {
    await waiters.waitForElementIsVisible(todaysDealPage.sortUnder$25);
    await todaysDealPage.clickElement(todaysDealPage.sortUnder$25);
});

Then("Verify that goods price on page 'Today's Deals' is under {string}$", async function (string) {
    await waiters.waitPageReady();
    const arrayPrice = await todaysDealPage.findElementsText(todaysDealPage.productPrice);
    const expectedResult = arrayPrice.map(element => helper.getPriceFromArrayPrices(element));
    expectedResult.map(price => assert.isAtMost(+price, +string));
});

//@EPMFARMATS-14552 @goodsPriceFrom$25To$50 @filtering
When('I Click on "$25 to $50" on left sidebar', async function() {
    await waiters.waitForElementIsVisible(todaysDealPage.sortFrom$25To$50);
    await todaysDealPage.clickElement(todaysDealPage.sortFrom$25To$50);
});

Then('Verify that page "Deals and Promotions" display goods price $25 to $50', async function () {
    await waiters.waitPageReady();
    const arrayPrice = await todaysDealPage.findElementsText(todaysDealPage.productPrice);
    const resultPrices = helper.getPricesWithout$(arrayPrice);
    const firstPrice = resultPrices.map(str => str.substring(0, 4));
    const secondPrice = resultPrices.map(str => str.substring(str.length - 6));
    firstPrice.map(value => assert.isAtMost(+value, 50)); // <=
    secondPrice.map(value => assert.isAtLeast(+value, 25)); // >=
});

//@EPMFARMATS-14551 @goodsPriceFrom$200AndAbove @filtering
When('I Click on "$200 & Above" on left sidebar', async function() {
    await waiters.waitForElementIsVisible(todaysDealPage.sortFrom$200AndAbove);
    await todaysDealPage.clickElement(todaysDealPage.sortFrom$200AndAbove);
});

Then('Verify that page "Deals and Promotions" display goods price from $200 and above', async function () {
    await waiters.waitPageReady();
    const arrayPrice = await todaysDealPage.findElementsText(todaysDealPage.productPrice);
    const resultPrices = helper.getPricesWithout$(arrayPrice);
    const price = resultPrices.map(str => str.substring(str.length - 6));
    price.map(value => assert.isAtLeast(+value, 200)); // >=
});

//@EPMFARMATS-14556 @upcomingGoods @filtering
Then('I Click on "Clear" on left sidebar and see that checkboxes below are unchecked', async function() {
    await waiters.waitForElementIsVisible(todaysDealPage.clearButton);
    await todaysDealPage.clickElement(todaysDealPage.clearButton);
    expect(!todaysDealPage.activeCheckbox.checked).equal(true);
    expect(!todaysDealPage.upcomingCheckbox.checked).equal(true);
    expect(!todaysDealPage.missedCheckbox.checked).equal(true);
});

When('I Click on "Upcoming" on left sidebar', async function () {
    await waiters.waitPageReady();
    await todaysDealPage.clickElement(todaysDealPage.upcomingCheckbox);
});

Then('Verify that page "Deals and Promotions" display Upcoming goods', async function () {
    await waiters.waitPageReady();
    const arrayStartsForYouStrings = await todaysDealPage.findElementsText(todaysDealPage.upcomingField);
    arrayStartsForYouStrings.map(string => expect(string).to.include('Starts for you'));
});

//@EPMFARMATS-14546 @computers&Accessories @filtering
When('I click on check box "Computers & Accessories" on left sidebar', async function () {
    await waiters.waitForElementIsVisible(todaysDealPage.computersAndAccessoriesCheckbox);
    await todaysDealPage.clickElement(todaysDealPage.computersAndAccessoriesCheckbox);
});

Then('I see only {string} goods', async function (string) {
    await waiters.waitPageReady();
    const result = await todaysDealPage.getTextFromAskedElement(todaysDealPage.computerAndAccesoriesResult);
    expect(result).contain(string);
});

//@EPMFARMATS-14545 @4Stars&Up @filtering
When('I click on button avg. Customer Review "4 Stars & UP" on left sidebar', async function () {
    await todaysDealPage.clickElement(todaysDealPage.fourStarsAndUpButton);
});

Then('I see that on the page displayed only goods with 4 stars & up', async function () {
    await waiters.waitPageReady();
    const resultMessageAfterFiltering = await todaysDealPage.getTextFromAskedElement(todaysDealPage.amountOfProductsDisplayedOnPageMessage);
    const amountOfProductsWithoutStars = (await todaysDealPage.findAllElementsOnThePage(todaysDealPage.productWithoutStars)).length;
    const amountOfDisplayedProductsWithStars = resultMessageAfterFiltering.substr(10, 2) - amountOfProductsWithoutStars;
    const allDisplayedElementsWithFourAndUpStars = (await todaysDealPage.findAllElementsOnThePage(todaysDealPage.customerReviewStarValueFour)).length
        + (await todaysDealPage.findAllElementsOnThePage(todaysDealPage.customerReviewStarValueFive)).length
        + (await todaysDealPage.findAllElementsOnThePage(todaysDealPage.customerReviewStarValueFourFive)).length;
    expect(allDisplayedElementsWithFourAndUpStars).equal(amountOfDisplayedProductsWithStars);
});

//scenario @EPMFARMATS-14549 @filtering @goodsPriceUnder$25AndUp3Stars
When('I Click Todays Deals', async function () {
    const arrayOfElements = await homePage.findAllElementsOnThePage(homePage.dontChangeLocalizationButton);
    if (arrayOfElements.length === 1) {
        await homePage.clickElement(homePage.dontChangeLocalizationButton);
    }
    await homePage.clickElement(homePage.todaysDealButton);
});

When('I Click on 3 Stars & UP on left sidebar', async function () {
    await waiters.waitPageReady();
    await todaysDealPage.clickElement(todaysDealPage.threeStarsAndMore);
});

When('I Click on Discount 25% and more', async function () {
    await waiters.waitPageReady();
    await todaysDealPage.clickElement(todaysDealPage.discountTwentyFive);
});

Then('Verify that Discount 25% and more', async function () {
    await waiters.waitPageReady();
    const arrayDiscount = await todaysDealPage.findElementsText(todaysDealPage.discountField);
    const expectDiscountPercentage = arrayDiscount.map(element => helper.getPercentageOfDiscountFromPriceMessage(element));
    expectDiscountPercentage.map(value => assert.isAtLeast(+value, 25));
});

Then('Verify that goods only with 3 Stars & UP', async function () {
    await waiters.waitPageReady();
    const resultMessageAfterFiltering = await todaysDealPage.getTextFromAskedElement(todaysDealPage.amountOfProductsDisplayedOnPageMessage);
    const amountOfProductsWithoutStars = (await todaysDealPage.findAllElementsOnThePage(todaysDealPage.productWithoutStars)).length;
    const amountOfDisplayedProductsWithStars = resultMessageAfterFiltering.substr(10, 2) - amountOfProductsWithoutStars;
    const arrayOfFourStars = await todaysDealPage.findAllElementsOnThePage(todaysDealPage.customerReviewStarValueFour);
    const arrayOfFiveStars = await todaysDealPage.findAllElementsOnThePage(todaysDealPage.customerReviewStarValueFive);
    const arrayOfFourFiveStars = await todaysDealPage.findAllElementsOnThePage(todaysDealPage.customerReviewStarValueFourFive);
    const sumOfStars = arrayOfFourStars.length + arrayOfFiveStars.length + arrayOfFourFiveStars.length;
    expect(sumOfStars).equal(amountOfDisplayedProductsWithStars);
});

// @EPMFARMATS-14553 @4Stars&Up @filtering
When('I click on button avg. Customer Review "1 Stars & UP" on left sidebar', async function () {
    await waiters.waitForElementIsVisible(todaysDealPage.oneStarsAndUpButton);
    await todaysDealPage.clickElement(todaysDealPage.oneStarsAndUpButton);
});

Then('I see that page for products with {string} message is opened', async function (string){
    await waiters.waitForElementIsVisible(todaysDealPage.oneStarsAndUpResultMessage);
    const resultMessage = await todaysDealPage.getTextFromAskedElement(todaysDealPage.oneStarsAndUpResultMessage);
    expect(resultMessage).contain(string);
});