(function() {
    'use strict';

    angular.module('shopular')
        .controller('InventoryController', InventoryController);

    let taxes = 0.0575;



    InventoryController.$inject=['InventoryService'];
    /**
     * [Holds the inventory array and the priceAdj function ]
     */
    function InventoryController(InventoryService) {

        let clickCount = 0;
        let vm = this;
        vm.taxes = taxes;
        vm.sortType = 'price';
        vm.sortReverse = false;
        vm.newItem = {};
        vm.inventory = InventoryService.getInventory();


        /**
         * takes in the inventory object, subtracts the discount property value from the
         * price property value, add that to the price prop value multiplied
         * by the the taxes variable.
         * @param  {Object} item [uses the inventory object]
         * @return {Number}      [returns a price adjusted for discounts and taxes
         */
        vm.priceAdj = function priceAdj(item) {
            return ((item.price - item.discount) * (vm.taxes + 1));
        };



        /**
         * Will change the word color to colour on the button click
         * @return {VOID}
         */
        vm.changeCountry = function changeCountry() {
            document.querySelector('.change').innerHTML = 'COLOUR';
        };




        /**
         *Will change mulitply the inventory price value by 1.5 and change
         *'waste basket' to 'rubbish bin' on the buttone click
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
         * Gets the addItem fn from InventoryService and points vm.addItem
         * to it
         * @param {Object} item Object passed to addItem
         */
        vm.addItem = function addItem(item) {
            InventoryService.addItem(item);
            vm.newItem = {};
            // invenCtrl.newItem.$setUntouched();
        };



        /**
         * Gets the removeItems fn from InventoryService and points vm.removeItems
         * @param  {Object} item [description]
         * @return {[type]}      [description]
         */
        vm.removeItems = function removeItems(item){
          InventoryService.removeItems(item);
          };




    }
}());
