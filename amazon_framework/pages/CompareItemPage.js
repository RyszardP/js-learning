const BasePage = require('./BasePage');
class CompareItemPage extends BasePage {
    constructor() {
        super();
        this.productTitlesInCompareList = by.css('a-size-base a-link-normal');
    }
}

module.exports = new CompareItemPage();