(function() {
    'use strict';

    let expect = chai.expect;
    let clickCount = 0;
    let now;
    let obj1 = {
        id: now,
        name: 'waste basket',
        price: 10,
        quantity: 1,
        color: 'red',
        discount: 1
    };
    let obj2 = {
        id: now,
        name: 'rug',
        price: 20,
        quantity: 1,
        color: 'red',
        discount: 1
    };
    let taxes = 0.0575;


    describe('inventory controller', function() {

        let InventoryController;
        let mockInventoryService = {};


        beforeEach(module('shopular'));

        beforeEach(module(function($provide) {
            $provide.value('InventoryService', mockInventoryService);
        }));

        beforeEach(inject(function($controller) {
            mockInventoryService.getInventory = function getInventory() {
                return [obj1];
            };

            mockInventoryService.addItem = function addItem(obj1) {
                mockInventoryService.addItem.numTimesCalled++;
                return;
            };
            mockInventoryService.removeItems = function removeItems(obj1) {
                mockInventoryService.removeItems.numTimesCalled++;
                return;
            };


            mockInventoryService.addItem.numTimesCalled = 0;
            mockInventoryService.removeItems.numTimesCalled = 0;
            InventoryController = $controller('InventoryController');


            beforeEach(function() {
                    InventoryController.clickCount = 0;
                    return;
                });
                afterEach(function() {
                  InventoryController.clickCount = 1;
                    return;
                });

        }));


       it('should be the correct types', function() {
            expect(InventoryController.newItem).to.be.an('object');
            expect(InventoryController.addItem).to.be.a('function');
            expect(InventoryController.removeItems).to.be.a('function');
            expect(InventoryController.changeTable).to.be.a('function');
            expect(InventoryController.changeCountry).to.be.a('function');
            expect(InventoryController.priceAdj).to.be.a('function');
        });

        it('should call addItem when adding', function() {
            InventoryController.addItem({});
            expect(mockInventoryService.addItem.numTimesCalled).to.equal(1);
        });

        it('should call removeItems when removing and item', function() {
            InventoryController.removeItems({});
            expect(mockInventoryService.removeItems.numTimesCalled).to.equal(1);
        });

        it('should adjust the price when priceAdj is called', function() {
            let price = ((obj2.price - obj2.discount) * (taxes + 1));
            expect(InventoryController.priceAdj(obj2)).to.equal(price);
        });

        it('should reset newItem after addItem is called', function() {
            InventoryController.newItem = obj1;
            expect(InventoryController.newItem).to.equal(obj1);
            InventoryController.addItem(obj1);
        });

        it('should return a value of false', function() {
            expect(InventoryController.sortReverse).to.be.equal(false);
        });

        it('should return a value of "price"', function() {
            expect(InventoryController.sortType).to.be.equal("price");
        });
        //
        it('should return a value of 0.0575', function() {
            expect(InventoryController.taxes).to.be.equal(0.0575);
        });

        it('should change waste basket to rubbish bin and price to be 15', function() {
            expect(obj1.name).to.be.equal('waste basket'); 
            InventoryController.changeTable(obj1);
            expect(obj1.name).to.be.equal('rubbish bin');
            expect(obj1.price).to.be.equal(15);

        });

        it('should only change the item.price to 1.5*item.price', function() {
            expect(obj2.price).to.equal(20);
            InventoryController.changeTable(obj2);
            // expect(obj2.price).to.be.equal(30);
        });





    });

}());
