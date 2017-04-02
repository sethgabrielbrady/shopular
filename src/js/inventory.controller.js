(function() {
    'use strict';

    angular.module('shopular')
        .controller('InventoryController', InventoryController);

    let taxes = 0.0575;

    InventoryController.$inject = ['InventoryService'];

    function InventoryController(InventoryService) {

        let clickCount = 0;
        let vm = this;
        vm.taxes = taxes;
        vm.sortType = 'price';
        vm.sortReverse = false;
        vm.newItem = {};
        vm.inventory = InventoryService.getInventory();


        /**
         * Takes in the inventory object, subtracts the discount property value from the
         * price property value, adds that to the price prop value multiplied
         * by the the taxes variable.
         * @param  {Object} item [uses the inventory object]
         * @return {Number}      [returns a price adjusted for discounts and taxes
         */
        vm.priceAdj = function priceAdj(item) {
            return ((item.price - item.discount) * (vm.taxes + 1));
        };



        /**
         * Will change the word color to colour in the table
         * on the 'United Kingdom ' button click
         * @return {VOID}
         */
        vm.changeCountry = function changeCountry() {
            document.querySelector('.change').innerHTML = 'COLOUR';
        };


        /**
         *Will mulitply the inventory price value by 1.5 and change
         *'waste basket' to 'rubbish bin' on the button click. A counter
         *was included so that this could only be done once.
         * @return {VOID}
         */
        vm.changeTable = function changeTable() {
            angular.forEach(vm.inventory, function(item) {
                if (clickCount === 0) {
                    item.price = item.price * 1.5;
                    clickCount++;
                    console.log(item.price);
                  }

                if (item.name === 'waste basket') {
                    item.name = 'rubbish bin';
                    console.log(item.name);
                }
              });
        };


        /**
        **Points vm.addItem to fn that takes an object and passes it to
        * removeItems fn inside InventoryService. Afterwards it puts
        * an empty object inside vm.newItem
        * @param {Object} item  object that gets passed to removeItems
        * @return {Void}
        */
        vm.addItem = function addItem(item) {
            InventoryService.addItem(item);
            vm.newItem = {};
        };



        /**
         * Points vm.removeItems to a that takes an object and passes it to
         * removeItems fn inside InventoryService
         * @param  {Object} item object that gets passed to removeItems
         * @return {Void}
         */
        vm.removeItems = function removeItems(item) {
            InventoryService.removeItems(item);
        };




    }
}());
