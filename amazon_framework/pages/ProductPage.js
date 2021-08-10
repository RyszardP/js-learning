const BasePage = require('./BasePage');

class ProductPage extends BasePage {
    constructor() {
        super();
        this.addToCartButton = by.id('add-to-cart-button');
        this.productTitle = by.css('#productTitle');
        this.cartButton = by.css('#nav-cart-count');
        this.appearedCartButton = by.css('#attach-sidesheet-view-cart-button > span > input');
        this.sizeId = by.css('#variation_size_name');
        this.sizeDropDown = by.css('#dropdown_selected_size_name');
        this.firstSizeInDropDown = by.css('#size_name_1');
        this.colorVariation = by.css('#variation_color_name');
        this.firstColorId = by.css('#color_name_0');
    }
}

module.exports = new ProductPage();