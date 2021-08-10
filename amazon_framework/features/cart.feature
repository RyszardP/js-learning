Feature: Test Cart features

  Background: Go to homepage
    Given The user go to "https://www.amazon.com/"

  @EPMFARMATS-14547
  @loggedUserAddProductToTheCart
  @cart
  Scenario: Verify that not logged user can add single product to the Cart
    When I select any product on homepage
    And I get title of the product
    And I add product to the Cart
    When I go to the Cart page
    Then I see 1 selected product on the Cart icon at the top container
    Then I see selected product in the list on the Cart page

  @EPMFARMATS-14558
  @saveForLaterProductDisappear
  @cart
  Scenario: Verify that after selecting "Save for later" function item disappear from the Cart
    When I log in
    When I select any product on homepage
    When I add anon product to the Cart
    When I go to the Cart page
    When I click Save for later for product in the Cart
    Then I check if the Cart is empty

  @EPMFARMATS-14554
  @changeQuantityOfProduct
  @cart
  Scenario: Verify that quantity of product items can be changed on the Cart page
    When I select any product on homepage
    And I add product to the Cart
    When I go to the Cart page
    And I change quantity of items from 1 to 3
    Then I see 3 items of selected product are in the list on the Cart page

  @EPMFARMATS-14568
  @thisIsAGift
  @cart
  Scenario: Verify that "This is a gift" checkbox is selected
    When I select any product on homepage
    And I add product to the Cart
    When I go to the Cart page
    Then I check that "This is a gift" checkbox is unchecked
    And I select "This is a gift" checkbox for the product
    Then I see that "This is a gift" and "This order contains a gift" checkboxes are selected

  @EPMFARMATS-14570
  @saveForLaterProductMoved
  @cart
  Scenario: Verify that product from the Cart was moved to "Saved for later" section
    When I select any product on homepage
    And I add product to the Cart
    When I go to the Cart page
    And I click Save for later for product in the Cart
    Then I see 1 product in "Save for later" section

  @EPMFARMATS-14550
  @addMultipleProducts
  @cart
  Scenario: Verify that user can add multiple products to the Cart
    When I enter "grey elephant" in search input
    When I select first item
    When I add product to the Cart
    When I enter "pink elephant" in search input
    When I select first item
    And I add product to the Cart
    When I go to the Cart page
    Then I see 2 products in the list on the Cart page

  @EPMFARMATS-14548
  @canCompareWithSimilar
  @cart
  Scenario: Verify that user can add single item to the Cart and compare it with similar items
    When I select any product on homepage
    And I add product to the Cart
    When I go to the Cart page
    Then I see 1 selected product on the Cart icon at the top container
    And I click "Compare with similar items"
    Then I check if "Compare with similar items" board is opened
    When I close "Compare with similar items" board

  @EPMFARMATS-14555
  @canDeleteitemFromCart
  @cart
  Scenario: Verify that user can delete product from the Cart
    When I select any product on homepage
    And I add product to the Cart
    When I go to the Cart page
    Then I see 1 selected product on the Cart icon at the top container
    When I delete product from Cart
    Then I see 0 selected product on the Cart icon at the top container

  @EPMFARMATS-14569
  @compareWithSimilar
  @cart
  Scenario: Verify that user can add item from "Compare with similar items" list
    When I select any random product on the homepage
    When I add the random product to the Cart
    When I click Cart
    When I click "Compare with similar items" on page
    Then I see item from "Compare with similar items" board in the Cart

  @EPMFARMATS-14557
  @totalCostInCard
  @cart
  Scenario: Verify that total cost of selected multiple products is correct
    When I enter "flamingo" in search input
    When I select first item
    When I add product to the Cart
    Then I see that amount of products on the Cart at the top container is 1
    When I enter "parrot" in search input
    When I select first item
    When I add product to the Cart
    When I click Cart
    Then Verify that automatically calculated total price is equal to summ of products price