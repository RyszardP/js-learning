const { After, Status } = require("@cucumber/cucumber");

After(function(testCase) {
    const me = this;

    if (testCase.result.status === Status.FAILED) {
        return browser.takeScreenshot().then(function(screenshot) {
            return me.attach(screenshot, "image/png");
        });
    }
});