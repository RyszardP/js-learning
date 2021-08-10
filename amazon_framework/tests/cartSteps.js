const homePage = require('../pages/AmazonHomePage.js');
const productPage = require('../pages/ProductPage.js');
const cartPage = require('../pages/CartPage.js');
const compareItemPage = require('../pages/CompareItemPage.js');
const searchResultPage = require('../pages/SearchResultPage.js');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1200);
const { Given, When, Then, After } = require('@cucumber/cucumber');
const signInPage = require('../pages/SignInPage.js');
let productName;
require('dotenv').config({ path: '.env' });
const waiters = require('../helpers/waiters.js');
const helper = require('../helpers/helper.js');

After(async () => {
    await waiters.waitPageReady();
    const allElementsToDeleteOnCartPage = await cartPage.findAllElementsOnThePage(cartPage.productDeleteLink);
    if (allElementsToDeleteOnCartPage.length > 0) {
        await cartPage.clickAllElementsOnThePage(cartPage.productDeleteLink);
    }
});

Given('The user go to {string}', async function (string) {
    homePage.startBrowser(string);
});

//@EPMFARMATS-14547 @loggedUserAddProductToTheCart @cart
When('I select any product on homepage', async function () {
    await waiters.waitForElementIsVisible(homePage.firstProductFromAmazonTopSellers);
    await homePage.clickElement(homePage.firstProductFromAmazonTopSellers);
});

When('I get title of the product', async function () {
    await waiters.waitForElementIsVisible(productPage.productTitle);
    productName = await productPage.getTextFromAskedElement(productPage.productTitle);
});

When('I add product to the Cart', async function () {
    await waiters.waitForElementIsVisible(productPage.addToCartButton);
    await productPage.clickElement(productPage.addToCartButton);
});

Then('I see 1 selected product on the Cart icon at the top container', async function () {
    await waiters.waitForElementIsVisible(homePage.cartCountIcon);
    const numberOfProductsOnCartIcon = await homePage.getTextFromAskedElement(homePage.cartCountIcon);
    expect(numberOfProductsOnCartIcon).to.equal('1');
});

When('I go to the Cart page', async function () {
    await waiters.waitPageReady();
    const a = await productPage.findAllElementsOnThePage(productPage.appearedCartButton);
    if ((a.length === 0)) {
        await productPage.clickElement(productPage.cartButton);
    } else {
        await waiters.waitForElementIsVisible(productPage.appearedCartButton);
        await productPage.clickElement(productPage.appearedCartButton);
    }
});

Then('I see selected product in the list on the Cart page', async function () {
    const titleOfProductInTheCart = await homePage.getTextFromAskedElement(cartPage.productTitleInTheCart);
    expect(productName).contain(titleOfProductInTheCart);
});

//@EPMFARMATS-14558 @saveForLater @cart
When('I log in', async function () {
    await homePage.clickElement(homePage.sigInButton);
    await signInPage.clickElement(signInPage.amazonLabel);
});

When('I select any anon product on the homepage', async function () {
    await waiters.waitPageReady();
    await homePage.clickElement(homePage.firstProductFromAmazonTopSellers);
});

When('I add anon product to the Cart', async function () {
    await waiters.waitPageReady();
    await productPage.clickElement(productPage.addToCartButton);
});

When('I click button to Cart page', async function () {
    await waiters.waitPageReady();
    await productPage.clickElement(productPage.cartButton);
});

When('I click Save for later for product in the Cart', async function () {
    await waiters.waitForElementIsVisible(cartPage.saveForLater);
    await productPage.clickElement(cartPage.saveForLater);
});

Then('I check if the Cart is empty', async function () {
    const emptyCartMessage = 'Your Amazon Cart is empty.';
    await waiters.waitForElementIsVisible(cartPage.emptyMessage);
    const messageInTheCart = await cartPage.getTextFromAskedElement(cartPage.emptyMessage);
    expect(emptyCartMessage).contain(messageInTheCart);
});

//@EPMFARMATS-14554
When('I change quantity of items from 1 to 3', async function () {
    await productPage.clickElement(cartPage.quantityDropdown);
    await productPage.clickElement(cartPage.quantity3);
});

Then('I see {int} items of selected product are in the list on the Cart page', async function (productsInTheList) {
    await waiters.waitPageReady();
    const expectedCartCount = await cartPage.getTextFromAskedElement(homePage.cartCountIcon);
    expect(+expectedCartCount).equal(productsInTheList);
});

//@EPMFARMATS-14568
Then('I check that "This is a gift" checkbox is unchecked', async function () {
    expect(!cartPage.thisIsAGiftCheckbox.checked).equal(true);
});

When('I select "This is a gift" checkbox for the product', async function () {
    await waiters.waitPageReady();
    await productPage.clickElement(cartPage.thisIsAGiftCheckbox);
});

Then('I see that "This is a gift" and "This order contains a gift" checkboxes are selected', async function () {
    expect(cartPage.thisIsAGiftCheckbox.checked).equal(true);
    expect(cartPage.thisOrderContainsAGift.checked).equal(true);
});

//@EPMFARMATS-14570
Then('I see 1 product in "Save for later" section', async function () {
    await waiters.waitPageReady();
    const textSavedForLater = await cartPage.getTextFromAskedElement(cartPage.savedForLater);
    expect(textSavedForLater).equal('Saved for later (1 item)');
});

//@EPMFARMATS-14550 @addMultipleProducts @cart
When('I enter {string} in search input', async function (enteredValue) {
    await homePage.enterTextInAskedInput(homePage.searchField, enteredValue);
    await homePage.clickElement(homePage.searchButton);
});

When('I select first item', async function () {
    await waiters.waitPageReady();
    await searchResultPage.clickElement(searchResultPage.itemWithPrice);
});

Then('I see {int} products in the list on the Cart page', async function (productsInTheList) {
    await waiters.waitPageReady();
    const expectedItemCount = await cartPage.getTextFromAskedElement(cartPage.cartItemCountId);
    expect(productsInTheList).equal(+expectedItemCount);
});

//@EPMFARMATS-14548
When('I click "Compare with similar items"', async function () {
    await waiters.waitForElementIsVisible(cartPage.compareWithSimilarItemsLink);
    await cartPage.clickElement(cartPage.compareWithSimilarItemsLink);
});

Then('I check if {string} board is opened', async function (compareWithSimilarItems) {
    await waiters.waitForElementIsVisible(cartPage.compareWithSimilarItemsBody);
    const compareWithSimilarItemBoardTitle = await cartPage.getTextFromAskedElement(cartPage.compareWithSimilarItemsBody);
    expect(compareWithSimilarItemBoardTitle).equal(compareWithSimilarItems);
});

When('I close "Compare with similar items" board', async function () {
    await cartPage.clickElement(cartPage.closecompareWithSimilarItemButton);
});

//@EPMFARMATS-14555
When('I delete product from Cart', async function () {
    await waiters.waitForElementIsVisible(cartPage.productDeleteLink);
    await cartPage.clickElement(cartPage.productDeleteLink);
});

Then('I see 0 selected product on the Cart icon at the top container', async function () {
    await waiters.waitForElementIsVisible(homePage.cartCountIcon);
    const numberOfProductsOnCartIcon = await homePage.getTextFromAskedElement(homePage.cartCountIcon);
    expect(numberOfProductsOnCartIcon).to.equal('0');
});

//@EPMFARMATS-14569 @compareWithSimilar
When('I select any random product on the homepage', async function () {
    await waiters.waitForElementIsVisible(homePage.firstProductFromAmazonTopSellers);
    await homePage.clickElement(homePage.firstProductFromAmazonTopSellers);
});

When('I add the random product to the Cart', async function () {
    await waiters.waitPageReady();
    await productPage.clickElement(productPage.addToCartButton);
    productName = await productPage.getTextFromAskedElement(productPage.productTitle);
});

When('I click Cart', async function () {
    await waiters.waitPageReady();
    const a = await productPage.findAllElementsOnThePage(productPage.appearedCartButton);
    if ((a.length === 0)) {
        await productPage.clickElement(productPage.cartButton);
    } else {
        await waiters.waitForElementIsVisible(productPage.appearedCartButton);
        await productPage.clickElement(productPage.appearedCartButton);
    }
});

When('I click "Compare with similar items" on page', async function () {
    await waiters.waitPageReady();
    await cartPage.clickElement(cartPage.compareWithSimilarItemsLink);
});

Then('I see item from "Compare with similar items" board in the Cart', async function () {
    await waiters.waitPageReady();
    const titlesOnComparePages = await compareItemPage.findElementsText(compareItemPage.productTitlesInCompareList);
    expect(productName).contain(titlesOnComparePages);
});

//@EPMFARMATS-14557 @totalCostInCard @cart
Then('I see that amount of products on the Cart at the top container is {int}', async function (productsAmountInCard) {
    await waiters.waitPageReady();
    const cartCount = await homePage.getTextFromAskedElement(homePage.cartCountIcon);
    expect(productsAmountInCard).equal(+cartCount);
});

When('I add parrot item to the Cart', async function () {
    await waiters.waitPageReady();
    const sizeDropDownButton = await productPage.findAllElementsOnThePage(productPage.sizeDropDown);
    if (sizeDropDownButton.length === 1) {
        await productPage.clickElement(productPage.sizeDropDown);
        await productPage.clickElement(productPage.firstSizeInDropDown);
    }
    const colorArray = await productPage.findAllElementsOnThePage(productPage.colorVariation);
    if (colorArray.length === 1) {
        await productPage.clickElement(productPage.firstColorId);
    }
    await productPage.clickElement(productPage.addToCartButton);
});

Then('Verify that automatically calculated total price is equal to summ of products price', async function () {
    await waiters.waitPageReady();
    const totalPrice = await cartPage.findElementsText(cartPage.subtotalCost);
    const totalPriceInCart = parseFloat(helper.getPricesWithout$(totalPrice));
    const arrayItemsPrices = await cartPage.findElementsText(cartPage.itemPrice);
    const itemPrices = helper.getPricesWithout$(arrayItemsPrices);
    const totalCostOfItems = itemPrices.reduce((result, current) => +result + +current);
    expect(totalPriceInCart).equal(totalCostOfItems);
});
