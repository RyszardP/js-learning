const { element, browser, ExpectedConditions } = require("protractor");
const defaultTimeout = 5000;
const EC = protractor.ExpectedConditions;

class Waiters {
    async waitUntilIsVisible(element, timeout = defaultTimeout) {
        await browser.wait(ExpectedConditions.elementToBeVisible(element, timeout));
    }

    async waitPageReady() {
        await browser.sleep(2500);
        await browser.wait(async () => {
            const state = await browser.executeScript(() => document.readyState);
            return state === 'complete';
        });
    }

    async waitForUrlToContain(text = this.url, timeOut = 90000) {
        try {
            await browser.wait(async () => (await browser.getCurrentUrl().then(url => url.includes(text))) === true, timeOut);
        } catch (e) {
            console.error("URL doesn't contain such text");
        }
    }

    async waitForElementIsVisible(el, timeout = 15000) {
        return browser.wait(EC.visibilityOf(element(el)), timeout, 'timeout');
    }
}

module.exports = new Waiters();