describe('Lego web page', function () {

    it('find "new" in page', function () {
        browser.get('https://www.lego.com/en-us/categories/new-sets-and-products?icmp=HP-SHQL-EG-NO-new-116', 3000);


        element(by.xpath('//*[@id="product-facet-productType-accordion-content"]/div/div/ul/li[1]/label/div/div/svg/polygon')).click();
        var space = element(by.xpath('//*[@id="blt9495a15aac0c2092"]/section/div/div/div[2][contains(text(),"NASA")]')).getText();
        //   var todoList = element.all(by.repeater('todo in todoList.todos'));
        //   expect(todoList.count()).toEqual(3);
        //   expect(todoList.get(2).getText()).toEqual('write first protractor test');
        expect(space).toEqual("NASA");

        //   expect(completedAmount.count()).toEqual(2);
    });

});