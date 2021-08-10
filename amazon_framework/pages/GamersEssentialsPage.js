const BasePage = require('./BasePage');

class GamersEssentialsPage extends BasePage {
    constructor() {
        super();
        this.oculusIcon = by.css('[aria-label="Oculus"]');
        this.oculusResults = by.css('[data-component-type="s-result-info-bar"] .a-text-bold');
    }
}

module.exports = new GamersEssentialsPage();