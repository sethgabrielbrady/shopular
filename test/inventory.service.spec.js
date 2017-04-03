(function() {
    'use strict';

    let expect = chai.expect;
    let now;
    let obj1 = {
        id: now,
        name: 'basket',
        price: 10,
        quantity: 1,
        color: 'red',
        discount: 1
    };
    let obj2 = {
        id: now,
        name: 'rug',
        price: 10,
        quantity: 1,
        color: 'red',
        discount: 1
    };
    let obj3 = {
        id: now,
        name: 'ball',
        price: 10,
        quantity: 1,
        color: 'black',
        discount: 1
    };
    let fakeData = [];

    describe('inventory service', function() {

        let InventoryService;

        beforeEach(module('shopular'));

        beforeEach(inject(function(_InventoryService_) {
            InventoryService = _InventoryService_;
        }));

        afterEach(inject(function(_InventoryService_) {
            localStorage.removeItem('inventory');
        }));

        it('should be the correct types', function() {
            expect(InventoryService.removeItems).to.be.a('function'); //this doesnt matter??
            expect(InventoryService.getInventory).to.be.a('function');
            expect(InventoryService.addItem).to.be.a('function');
        });

        it('should be able to give us an array of objects', function() {
            let result = InventoryService.getInventory();
            expect(result).to.be.an('array');
        });

        it('should be able to return a valid object key', function() {
            expect(InventoryService.getInventory().length).to.equal(0);
            now = Date.now();
            InventoryService.addItem(obj1);
            let items = InventoryService.getInventory();
            expect(items[0].id).to.equal(now);
            expect(items[0].name).to.equal('basket');
            expect(items[0].price).to.equal(10);
            expect(items[0].quantity).to.equal(1);
            expect(items[0].discount).to.equal(1);
            expect(items[0].color).to.equal('red');
        });


        it('should add an item to the array', function() {
            InventoryService.addItem(obj1);
            InventoryService.addItem(obj2);
            let invent = InventoryService.getInventory();
            expect(invent.length).to.equal(2);
        });



        it('should remove an item from the array', function() {
            InventoryService.addItem(obj3);
            InventoryService.addItem(obj2);
            let invent = InventoryService.getInventory();
            expect(invent.length).to.equal(2);
            obj3.quantity = 0;
            expect(invent.length).to.equal(2);
            InventoryService.removeItems(obj3);
            expect(invent.length).to.equal(1);
        });








    });

}());
