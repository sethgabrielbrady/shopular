(function() {
  'use strict';

  let expect = chai.expect;

  describe('inventory service', function(){

    // it('should add 4-7', function(){
    //   expect(4-7).to.equal(-3);
    // }); //sanity check- make sure the testing works
    let InventoryService;

    beforeEach(module('shopular'));

    beforeEach(inject(function(_InventoryService_){
      InventoryService = _InventoryService_;
    }));

    it('should be able to give us an array of objects', function(){
        let result = InventoryService.getInventory();
        expect(result).to.be.an('array');
    });

    it('should be able to return a valid object', function(){
      expect(InventoryService.getInventory().length).to.equal(0);
      let id = Date.now();
      InventoryService.addItem({
        id: id,
        name: 'basket',
        price: 23,
        quantity: 23,
        discount:23,
        color:'red'
      });
      let items = InventoryService.getInventory();
      expect(items.length).to.equal(1);
      expect(items[0].id).to.equal(id);
      expect(items[0].name).to.equal('basket');
      expect(items[0].price).to.equal(23);
      expect(items[0].quantity).to.equal(23);
      expect(items[0].discount).to.equal(23);
      expect(items[0].color).to.equal('red');
    });


    //TODO
    //tests to run
    // price adj is correct
    // country gets changed
    // items are removed
    // 
    //

  });

}());
