const BasePage = require('./BasePage');

class AmazonHomePage extends BasePage {
    constructor() {
        super();
        this.cartIcon = by.css('#nav-cart');
        this.cartCountIcon = by.css('#nav-cart-count');
        this.searchButton = by.css('#nav-search-submit-button');
        this.dropdownMenuButtonAll = by.css('#nav-search-dropdown-card');
        this.hamburgerMenuButtonAll = by.css('#nav-hamburger-menu');
        this.firstProductFromAmazonTopSellers = by.xpath('//span[text()="Amazon Top Sellers"]/../../..//li[3]'); 
        this.secondProductFromAmazonTopSellers = by.xpath('//span[text()="Amazon Top Sellers"]/../../..//li[2]');
        this.todaysDealButton = by.css('#nav-xshop a:nth-child(2)');
        this.sigInButton = by.css('#nav-link-accountList-nav-line-1');
        this.searchField = by.css('#twotabsearchtextbox');
        this.essentialsForGamersSlidebar = by.css('[data-a-transition-strategy="slideCircular"]');
        this.dontChangeLocalizationButton = by.css('[data-action-type="DISMISS"]');
        this.menuItemBaby = by.css('[value="search-alias=baby-products-intl-ship"]');
        this.departmentItemGifts = by.xpath('//span[text()="Gifts"]');
        this.computersFieldOnDropDownMenu = by.css('[value="search-alias=computers-intl-ship"]');
        this.getFitImage = by.css('[alt="Get fit at home"]');
    }
}

module.exports = new AmazonHomePage();