const homePage = require('../pages/AmazonHomePage.js');
const resultPage = require('../pages/MonitorResultPage.js');
const searchResultPage = require('../pages/SearchResultPage.js');
const gamersEssentialsPage = require('../pages/GamersEssentialsPage');
const getFitAtHomePage = require('../pages/GetFitAtHomePage');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1200);
const waiters = require('../helpers/waiters.js');
const helper = require('../helpers/helper.js');

Given('Go to {string}', async function (string) {
    await homePage.startBrowser(string);
});

// @EPMFARMATS-14564 @searchWithDifferentCases @search&Navigation
When('I enter {string} with using different cases to search field', async function (string) {
    await homePage.enterTextInAskedInput(homePage.searchField, string);
});

Then('I click on search button', async function () {
    await homePage.clickElement(homePage.searchButton);
});

Then('Should open page with {string} results', async function (string) {
    const result = await resultPage.getTextFromAskedElement(resultPage.monitorResult);
    expect(result).contain(string);
});

//@EPMFARMATS-14562 @searchUsingImages @search&Navigation
When('I click on image "Essentials for Gamers" in slidebar', async function () {
    await homePage.clickElement(homePage.essentialsForGamersSlidebar);
});

When('I click on image "Oculus"', async function () {
    await gamersEssentialsPage.clickElement(gamersEssentialsPage.oculusIcon);
});

Then('I see page with {string} results', async function (string) {
    const result = await resultPage.getTextFromAskedElement(gamersEssentialsPage.oculusResults);
    expect(result).contain(string);
});

//EPMFARMATS-14560 @searchItemByClickingToItemMenu @search&Navigation
When('I click on dropdown button "All"', async function () {
    await homePage.clickElement(homePage.dropdownMenuButtonAll);
});

When('I click on dropdown menu item "Computers"', async function () {
    await waiters.waitForElementIsVisible(homePage.computersFieldOnDropDownMenu);
    await homePage.clickElement(homePage.computersFieldOnDropDownMenu);
});

When('I input {string} to search field"', async function (inputMouse) {
    await waiters.waitForElementIsVisible(homePage.searchField);
    await homePage.enterTextInAskedInput(homePage.searchField, inputMouse);
});

//EPMFARMATS-14563 @searchItemUsingImagesOnCards @search&Navigation
When('I click on card "Get fit at home"', async function () {
    await homePage.clickElement(homePage.getFitImage);
});

When('I click on menu item "Yoga"', async function () {
    await getFitAtHomePage.clickElement(getFitAtHomePage.yogaText);
});

Then('I see in page {string}', async function (yogaEquipmentString) {
    const yogaEquipmentInDropDown = await searchResultPage.getTextFromAskedElement(searchResultPage.dropDownSelected);
    expect(yogaEquipmentInDropDown).contain(yogaEquipmentString);
});

//@EPMFARMATS-14543 @searchUsingEng&Rus @search&Navigation
When('I input {string} to search field using English and Russian language', async function(string) {
    await homePage.enterTextInAskedInput(homePage.searchField, string);
});

//@EPMFARMATS-14566 @searchUsingCategoriesFromDropdownAll @search&Navigation
When('I click on menu item "Baby"', async function() {
    await homePage.clickElement(homePage.menuItemBaby);
});

When('I click on department item "Gifts" on left side', async function() {
    await homePage.clickElement(homePage.departmentItemGifts);
});

Then('Page with results "Baby Gifts" is opened', async function() {
    const result = await resultPage.getTextFromAskedElement(homePage.dropdownMenuButtonAll);
    expect(result).contain('Baby Gifts');
});

//@EPMFARMATS-14567 @searchCertainProduct @search&Navigation
When('I input {string} of certain product', async function(string) {
    await homePage.enterTextInAskedInput(homePage.searchField, string);
});

Then('{string} product is on the page', async function(string) {
    const arrayOfProductsNames = await resultPage.findElementsText(resultPage.namesOfProductsOnThePage);
    const result = await helper.checkAvailability(arrayOfProductsNames, string);
    expect(result).equal(true);
});