Feature: Cheking searching and navigation on amazon.com

    Background: Go to homepage
        Given Go to "https://www.amazon.com/"

    @EPMFARMATS-14564
    @searchWithDifferentCases
    @search&Navigation
    Scenario Outline: Verify that user can search item using different cases
        When I enter "<string>" with using different cases to search field
        When I click on search button
        Then Should open page with "<string>" results

        Examples:
            | string  |
            | monitor |
            | MONITOR |
            | mOnItOr |

    @EPMFARMATS-14562
    @searchUsingImages
    @search&Navigation
    Scenario: Verify that user can search item using images in slidebar
        When I click on image "Essentials for Gamers" in slidebar
        When I click on image "Oculus"
        Then I see page with "oculus" results

    @EPMFARMATS-14543
    @searchUsingEng&Rus
    @search&Navigation
    Scenario Outline: Verify that user can search item using English and Russian language and using search button
        When I input "<string>" to search field using English and Russian language
        When I click on search button
        Then Should open page with "<string>" results

        Examples:
            | string    |
            | camera    |
            | phone     |
            | чайник    |
            | пароварка |

    @EPMFARMATS-14566
    @searchUsingCategoriesFromDropdownAll
    @search&Navigation
    Scenario: Verify that user can find item using categories from dropdown menu "All"
        When I click on dropdown button "All"
        When I click on menu item "Baby"
        When I click on search button
        When I click on department item "Gifts" on left side
        Then Page with results "Baby Gifts" is opened

    @EPMFARMATS-14567
    @searchCertainProduct
    @search&Navigation
    Scenario Outline: Verify that user can find certain product using search field
        When I input "<string>" of certain product
        When I click on search button
        Then "<string>" product is on the page

        Examples:
            | string                                                                              |
            | Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor, Black |

    @EPMFARMATS-14560
    @searchItemByClickingToItemMenu
    @search&Navigation
    Scenario: Verify that user can search item by clicking to item menu
        When I click on dropdown button "All"
        When I click on dropdown menu item "Computers"
        When I enter "mouse" in search input
        When I click on search button
        Then I see page with "mouse" results

    @EPMFARMATS-14563
    @searchItemUsingImagesOnCards
    @search&Navigation
    Scenario: Verify that user can search item using images on cards
        When I click on card "Get fit at home"
        When I click on menu item "Yoga"
        Then I see in page "Yoga Equipment"
