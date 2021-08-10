const { JsonFormatter } = require("@cucumber/cucumber");
const fse = require("fs-extra");
const path = require("path");

class ExJsonFormatter extends JsonFormatter {
    constructor(options) {
        super(options);

        // overwrite the default log function
        this.log = function(string) {
            const outputDir = global.reportDir + "/cucumber";
            const fileName = "cucumber-report.json";
            const targetJson = path.resolve(outputDir, fileName);

            fse.outputFileSync(targetJson, string);
        };
    }
}

module.exports = ExJsonFormatter;