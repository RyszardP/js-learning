const BasePage = require('./BasePage');

class MonitorResultPage extends BasePage {
    constructor() {
        super();
        this.monitorResult = by.css('.a-color-state.a-text-bold');
        this.namesOfProductsOnThePage = by.css('[class="a-size-mini a-spacing-none a-color-base s-line-clamp-2"]');
    }
}

module.exports = new MonitorResultPage();