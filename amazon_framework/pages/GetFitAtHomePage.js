const BasePage = require('./BasePage');

class GetFitAtHomePage extends BasePage {
    constructor() {
        super();
        this.yogaLink = by.css("span:contains('Yoga')");
        this.yogaText = by.css('div.a-column.a-span3.acs_tile.acs_tile--3 div div div:nth-child(2)');
    }
}

module.exports = new GetFitAtHomePage();