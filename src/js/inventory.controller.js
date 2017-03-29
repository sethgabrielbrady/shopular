(function() {
    'use strict';

    angular.module('shopular')
        .controller('InventoryController', InventoryController);

    let taxes = 0.0575;

    /**
     * [Holds the inventory array and the priceAdj function ]
     */
    function InventoryController() {

        let clickCount = 0;
        let vm = this;
        vm.taxes = taxes;
        vm.sortType = 'price';
        vm.sortReverse = false;
        vm.newItem = {};

        vm.inventory = [
        { "id": 2957, "name": "widget", "price": 32, "quantity": 203, "color": "red", "discount": 31 },
        { "id": 89274, "name": "golf club", "price": 98, "quantity": 10, "color": "black", "discount": 0 },
        { "id": 64, "name": "iPhone", "price": 499, "quantity": 2, "color": "white", "discount": 0 },
        { "id": 87363, "name": "bonzai tree", "price": 76, "quantity": 2, "color": "green", "discount": 0 },
        { "id": 1736, "name": "towel", "price": 55, "quantity": 30, "color": "brown", "discount": 10 },
        { "id": 4836, "name": "dog bed", "price": 99, "quantity": 10, "color": "beige", "discount": 50 },
        { "id": 829, "name": "waste basket", "price": 15, "quantity": 40, "color": "silver", "discount": 0 },
        { "id": 46, "name": "guitar", "price": 899, "quantity": 0, "color": "blue", "discount": 150 },
        { "id": 17456, "name": "matcha tea", "price": 42, "quantity": 4, "color": "green", "discount": 11 },
        { "id": 3292, "name": "enlightenment", "price": 99999, "quantity": 1, "color": "red", "discount": 0 },
        { "id": 533, "name": "eggs", "price": 5, "quantity": 12, "color": "brown", "discount": 1 },
        { "id": 683, "name": "pillow", "price": 27, "quantity": 10, "color": "black", "discount": 12 }
        ];


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
         * @param {String|Number} item
         */
        vm.addItem = function addItem(item) {
            item.price = Number(item.price);
            item.discount = Number(item.discount);
            item.quantity = Number(item.quantity);

            if (typeof(item) !== 'object' || typeof(item.name) !== 'string' ||
                typeof(item.price) !== 'number' || typeof(item.discount) !== 'number' ||
                typeof(item.quantity) !== 'number' || !(item.quantity) ||
                !(item.price ) || !(item.discount) ){
                return;
            }

            vm.inventory.push({
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                discount: item.discount,
                color: item.color
            });
            vm.newItem;
        }

        /**
         * Grabs an array as an argument, looks for the index and if the
         * quantity is equal to 0, will allow for the deletion of the row
         * @param  {Array} item
         * @return {Voif}
         */
        vm.removeItem = function removeItem(item){
          if (item.quantity === 0){
            let index = vm.inventory.indexOf(item);
            console.log(index);
            vm.inventory.splice(index, 1);
          }

        }


    }
}());
