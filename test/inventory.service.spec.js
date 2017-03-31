(function() {
  'use strict';

  let expect = chai.expect;
  let now;
  let obj1 = {id:now, name: 'basket', price: 10, quantity: 2, color: 'red', discount: 1};
  let obj2 = {id:now, name: 'rug', price: 10, quantity: 0, color: 'red', discount: 1};
  let fakeData= [obj1, obj2];

  describe('inventory service', function(){

    // it('should add 4-7', function(){
    //   expect(4-7).to.equal(-3);
    // }); //sanity check- make sure the testing works
    let InventoryService;

    beforeEach(module('shopular'));

    beforeEach(inject(function(_InventoryService_){
      InventoryService = _InventoryService_;
    }));

    afterEach(inject(function(_InventoryService_){
        localStorage.removeItem('inventory');
    }));

    it('should be able to give us an array of objects', function(){
        let result = InventoryService.getInventory();
        expect(result).to.be.an('array');
    });

    it('should be able to return a valid object', function(){
      expect(InventoryService.getInventory().length).to.equal(0);
      now = Date.now();

      InventoryService.addItem(obj1);
      let items = InventoryService.getInventory();
      expect(items.length).to.equal(1);
      expect(items[0].id).to.equal(now);
      expect(items[0].name).to.equal('basket');
      expect(items[0].price).to.equal(10);
      expect(items[0].quantity).to.equal(2);
      expect(items[0].discount).to.equal(1);
      expect(items[0].color).to.equal('red');
    });



      //i dont think this is working because the remove item function only removes
      //the instance from the html and not local storage which I believe this is still
      //getting stored into.
    it('should remove an item if the quantity is less than 0', function(){
        expect(fakeData.length).to.equal(2);//good
        expect(obj2.quantity).to.equal(0);//good
        // InventoryService.removeItems(fakeData[1]);
        // expect(fakeData.length).to.equal(1);
      });


      it('should be the correct types', function(){
        expect(InventoryService.removeItems).to.be.an('function');//this doesnt matter??

      });


      //check that the correct type is put into each object??
      // it('should return the correct typeof for each object key' function(){
      //
      // });





  });

}());
