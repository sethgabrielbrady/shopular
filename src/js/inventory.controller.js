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
                }

            })
        }

        /**
         * Add a new object to the inventory array. Will convert a string to a
         * number for price, discount, and quantity inputs
         * @param {Object} item
         * @return {VOID}
         */

        vm.addItem = function addItem(item) {
            item.price = Number(item.price);
            item.discount = Number(item.discount);
            item.quantity = Number(item.quantity);

            if (typeof(item) !== 'object' || typeof(item.name) !== 'string' ||
                typeof(item.price) !== 'number' || typeof(item.discount) !== 'number' ||
                typeof(item.quantity) !== 'number' || !(item.quantity) ||
                !(item.price ) || !(item.discount) || typeof(item.color) !== 'string' ){
                return;
            }

            let id = Date.now();

            vm.inventory.push({
                id: id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                discount: item.discount,
                color: item.color
            });
            vm.newItem = {};
            // invenCtrl.newItem.$setUntouched();
        }

        /**
         * Grabs an array as an argument, looks for the index and if the
         * quantity is equal to 0, will allow for the deletion of the row
         * @param  {Array} item
         * @return {Void}
         */
        vm.removeItem = function removeItem(item){
          if (item.quantity === 0){
            let index = vm.inventory.indexOf(item);
            vm.inventory.splice(index, 1);
          }

        }


    }
}());
