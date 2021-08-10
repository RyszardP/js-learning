Feature: Test Amazone Today's deal page

    Background: Go to homepage
        Given I Go to "https://www.amazon.com/"
        When I click to "Today's Deals" on top menu

    @EPMFARMATS-14542
    @sortByDiscountHighToLow
    @filtering
    Scenario: Sort By Discount High To Low
        When I Click drop down button Sort by
        When I Select Discount - High To Low
        Then Verify that Discount sorted High To Low

    @EPMFARMATS-14544
    @goodsPriceUnder$25
    @filtering
    Scenario: Page "Deals and Promotions" display goods price Under $"25"
        When I click on 'Under $25' on left sidebar
        Then Verify that goods price on page 'Today's Deals' is under "25"$

    @EPMFARMATS-14552
    @goodsPriceFrom$25To$50
    @filtering
    Scenario: Goods Price Sort By $25 to $50
        When I Click on "$25 to $50" on left sidebar
        Then Verify that page "Deals and Promotions" display goods price $25 to $50

    @EPMFARMATS-14551
    @goodsPriceFrom$200AndAbove
    @filtering
    Scenario: Goods Price Sort From $200 And Above
        When I Click on "$200 & Above" on left sidebar
        Then Verify that page "Deals and Promotions" display goods price from $200 and above

    @EPMFARMATS-14556
    @upcomingGoods
    @filtering
    Scenario: Page "Deals and Promotions" display Upcoming goods
        Then I Click on "Clear" on left sidebar and see that checkboxes below are unchecked
        When I Click on "Upcoming" on left sidebar
        Then Verify that page "Deals and Promotions" display Upcoming goods

    @EPMFARMATS-14546
    @computers&Accessories
    @filtering
        Scenario: Verify that page "Deals and Promotions" display goods Computers & Accessories
        And I click on check box "Computers & Accessories" on left sidebar
        Then I see only "Computers & Accessories" goods

    @EPMFARMATS-14545
    @4Stars&Up
    @filtering
    Scenario: Verify that page "Deals and Promotions" display goods Avg. Customer Review - 4 Stars & UP
        And I click on button avg. Customer Review "4 Stars & UP" on left sidebar
        Then I see that on the page displayed only goods with 4 stars & up

    @EPMFARMATS-14549
    @goodsPriceUnder$25AndUp3Stars
    @filtering
    Scenario: Verify that page Deals and Promotions display goods 3 Stars & UP AND Discount 25%
        When I Click Todays Deals
        When I Click on 3 Stars & UP on left sidebar
        When I Click on Discount 25% and more
        Then Verify that Discount 25% and more
        Then Verify that goods only with 3 Stars & UP

    @EPMFARMATS-14553
    @1Stars&Up
    @filtering
    Scenario: Verify that page "Deals and Promotions" display goods Avg. Customer Review - 4 Stars & UP
        And I click on button avg. Customer Review "1 Stars & UP" on left sidebar
        Then I see that page for products with "1 Stars & Up" message is opened