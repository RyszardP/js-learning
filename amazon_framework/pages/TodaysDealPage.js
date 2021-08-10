const BasePage = require('./BasePage');

class TodaysDealPage extends BasePage {
    constructor() {
        super();
        this.sortByDropDownButton = by.css('.filterResultBar [data-action="a-dropdown-button"]');
        this.highToLowOption = by.css('[data-value*="BY_DISCOUNT_DESCENDING"]');
        this.sortUnder$25 = by.css('[data-value="-25"] a');
        this.discountField = by.css('.a-spacing-top-mini');
        this.productPrice = by.css('.priceBlock .dealPriceText');
        this.discountInURL = 'sortOrder:BY_DISCOUNT_DESCENDING';
        this.threeStarsAndMore = by.css('[class="a-icon a-icon-star a-star-3"]');
        this.discountTwentyFive = by.css('[data-value="25-50,50-70,70-"] a');
        this.customerReviewBar = by.xpath("//span[contains(text(),'Avg. Customer Review')][@class='a-icon-alt']");
        this.customerReviewStar= by.xpath("//div[@class='a-row reviewStars']//following-sibling::i");
        this.sortFrom$25To$50 = by.css('[data-value="25-50"] a');
        this.sortFrom$200AndAbove = by.css('[data-value="200-"] a');
        this.clearButton = by.css('[data-gbfilter-link*="clear"]'); 
        this.activeCheckbox = by.css("[data-gbfilter-checkbox*='ACTIVE']");
        this.upcomingCheckbox = by.css("[data-gbfilter-checkbox*='UPCOMING']"); 
        this.missedCheckbox = by.css("[data-gbfilter-checkbox*='MISSED']");
        this.upcomingField = by.xpath("//span[contains(text(),'Starts for you')]");
        this.computersAndAccessoriesCheckbox = by.xpath('//span[contains(text(),"Computers & Accessories")]');
        this.fourStarsAndUpButton = by.css('[aria-label="4 Stars & Up"]');
        this.computerAndAccesoriesResult = by.css('[class="a-link-normal summary"] > span');
        this.customerReviewStarValueFourFive = by.css('[class="a-icon a-icon-star a-star-4-5"]');
        this.customerReviewStarValueFour = by.css('span > [class="a-icon a-icon-star a-star-4"]');
        this.customerReviewStarValueFive = by.css('[class="a-icon a-icon-star a-star-5"]');
        this.amountOfProductsDisplayedOnPageMessage= by.css('#FilterItemView_all_summary  [class="a-row a-spacing-small filterItem"]');
        this.productWithoutStars = by.css('[aria-label^="Learn More"]');
        this.oneStarsAndUpButton = by.css('[aria-label="1 Stars & Up"]');
        this.oneStarsAndUpResultMessage = by.css('#FilterItemView_all_summary span:nth-of-type(4)');
    }
}

module.exports = new TodaysDealPage();