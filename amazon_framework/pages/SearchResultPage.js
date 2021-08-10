const BasePage = require('./BasePage');

class SearchResultPage extends BasePage {
    constructor() {
        super();
        this.sponsoredField = by.css('a-row a-spacing-micro');
        this.itemWithPrice = by.css("[class=a-price-symbol]");
        this.firstItem = by.css('[data-cel-widget="search_result_1"]');
        this.dropDownSelected = by.css('#searchDropdownBox option'); 
    }
}

module.exports = new SearchResultPage();