(function() {
    'use strict';

    let expect = chai.expect;

    let now = 4;
    let obj1 = {id:now, name:'waste basket', price: 10, quantity: 1, color: 'red', discount: 1};
    let obj2 = {id:now, name: 'rug', price: 10, quantity: 1, color: 'red', discount: 1};
    let fakeData = [obj1, obj2];
    let taxes = 0.0575;


    describe('inventory controller', function() {

        let InventoryController;
        let mockInventoryService = {};

        beforeEach(module('shopular'));

        beforeEach(module(function($provide) {
            $provide.value('InventoryService', mockInventoryService);
        }));

        beforeEach(inject(function($controller) {
            mockInventoryService.getInventory = function inventory() {
                return [obj1];
            };

            mockInventoryService.addItem = function addItems(arg1) {
                mockInventoryService.addItem.numTimesCalled++;
                return;
            };
            mockInventoryService.removeItems = function removeItems(arg1) {
                mockInventoryService.removeItems.numTimesCalled++;
                return;
            };
            let clickCount = 0;
            mockInventoryService.addItem.numTimesCalled = 0;
            mockInventoryService.removeItems.numTimesCalled = 0;
            InventoryController = $controller('InventoryController');
        }));


//TESTS

        it('should be the correct types', function(){
          expect(InventoryController.newItem).to.be.an('object');
          expect(InventoryController.addItem).to.be.an('function');
          expect(InventoryController.removeItems).to.be.an('function');
          expect(InventoryController.changeTable).to.be.an('function');
          expect(InventoryController.changeCountry).to.be.an('function');
          expect(InventoryController.priceAdj).to.be.an('function');
        });

        it('should call addItem when adding', function(){
          InventoryController.addItem({});//calling additem within InventoryController
          expect(mockInventoryService.addItem.numTimesCalled).to.equal(1);
        });

        it('should call removeItems when removing and item', function(){
          InventoryController.removeItems({});//calling additem within InventoryController
          expect(mockInventoryService.removeItems.numTimesCalled).to.equal(1);
        });

        it('should adjust the price when priceAdj is called', function(){
          let price = ((obj2.price - obj2.discount) * (taxes + 1));
          expect(InventoryController.priceAdj(obj2)).to.equal(price);
        });

        it('should get the correct object data', function(){
          expect(obj1.name).to.equal('waste basket');
          expect(obj1.price).to.equal(10);
          //this doesnt really change the values. Only changes how the html see it
          // let price = (obj1.price * 1.5);
          //expect(InventoryController.changeTable(obj1.name)).to.equal('rubbish bin');
          // expect(InventoryController.changeTable(obj1.price)).to.equal(price);
        });

        



      });

}());
