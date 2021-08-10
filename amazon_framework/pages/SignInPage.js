const BasePage = require('./BasePage');

class SignInPage extends BasePage {
    constructor() {
        super();
        this.emailField = by.css('#ap_email');
        this.passwordField = by.css('#ap_password');
        this.continueButton = by.css('#continue');
        this.sigInButton = by.css('#signInSubmit');
        this.amazonLabel = by.css('[aria-label="Amazon"]');
    }
}

module.exports = new SignInPage();