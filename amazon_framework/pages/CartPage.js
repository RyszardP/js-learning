const BasePage = require('./BasePage');
class CartPage extends BasePage {
    constructor() {
        super();
        this.productTitleInTheCart = by.css('.sc-product-title');
        this.saveForLater = by.css('[value="Save for later"]');
        this.subtotalCost = by.css('#sc-subtotal-amount-activecart span');
        this.compareWithSimilar = by.css('comparison-lite-modal');
        this.cartItemCount= by.css('nav-cart-1');
        this.cartItemCountId= by.id('nav-cart-count');
        this.quantityDropdown = by.css('[data-a-class="quantity"]');
        this.quantity3 = by.css('#dropdown1_3');
        this.subtotalString = by.css('#sc-subtotal-label-buybox');
        this.thisIsAGiftCheckbox = by.css('[data-name="Active Items"] [type="checkbox"]');
        this.thisOrderContainsAGift = by.css('#sc-buy-box-gift-checkbox');
        this.savedForLater = by.css('#sc-saved-cart-list-caption-text');
        this.emptyMessage = by.css('.sc-cart-header h1[class="a-spacing-mini a-spacing-top-base"]');
        this.productDeleteLink = by.css('[value="Delete"]');
        this.compareWithSimilarItemsLink = by.css('[value="Compare with similar items"]');
        this.compareWithSimilarItemsBody = by.css('[style*="visibility: visible"] h1');
        this.closecompareWithSimilarItemButton = by.css('[style*="visibility: visible"] [aria-label="Close"]');
        this.itemPrice = by.css('.sc-product-price');
    }
}

module.exports = new CartPage();