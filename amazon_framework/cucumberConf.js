const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const moment = require("moment");
const reportDir = (global.reportDir = "reports/report_" + moment().format("YYYYMMDD_HHmmss"));
chai.use(chaiAsPromised);

exports.config = {
    seleniumAddress: "http://localhost:4444/wd/hub",
    directConnect: true,
    getPageTimeout: 60000,
    allScriptsTimeout: 60000,

    //Running chrome
    capabilities: {
        browserName: "chrome",
        enableVNC: true,
        shardTestFiles: true,
        useAutomationExtension: false,
        maxInstances: 3
    },

    //point spec to feature file , my feature file was under feature folder
    specs: ["features/*.feature"],

    //set framework options
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    //working with Angular website
    onPrepare: function () {
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
    },

    //Create html report
    onComplete: () => {
        require("./supports/cucumber-html-reporter.js").generate(reportDir);
    },

    //set cucumber options
    cucumberOpts: {
        require: [
            "tests/*.js", "supports/timeout.js", "supports/cucumber-screenshot.js"
        ],
        tags: [
        ],
        "dry-run": [],
        "no-source": [],
        compiler: [],
        format: ['./supports/cucumber-json-reporter.js:tmp'],
    },
    SELENIUM_PROMISE_MANAGER: false,
};
