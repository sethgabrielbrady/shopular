(function() {
    'use strict';

    angular.module('shopular').factory('InventoryService', InventoryService);

    function InventoryService() {
        console.log('here in Inventory service');

        let newItem = {};

        let inventory = [
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
         * Add a new object to the inventory array. Will convert a string to a
         * number for price, discount, and quantity inputs
         * @param {Object} item
         * @return {VOID}
         */
        function addItem(item) {
            item.price = Number(item.price);
            item.discount = Number(item.discount);
            item.quantity = Number(item.quantity);

            if (typeof(item) !== 'object' || typeof(item.name) !== 'string' ||
                typeof(item.price) !== 'number' || typeof(item.discount) !== 'number' ||
                typeof(item.quantity) !== 'number' || !(item.quantity) ||
                !(item.price) || !(item.discount) || typeof(item.color) !== 'string') {
                return;
            }

            let id = Date.now();

            inventory.push({
                id: id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                discount: item.discount,
                color: item.color
            });
            newItem = {};
            // invenCtrl.newItem.$setUntouched();
        }


        /**
         * Gets the  data objects from the inventory array
         * @return {Object} The inventory object
         */
        function getInventory() {
            return inventory;
        }



        /**
         * Grabs an array as an argument, looks for the index and if the
         * quantity is equal to 0, will allow for the deletion of the row
         * @param  {Array} item
         * @return {Void}
         */
        function removeItem(item) {
            if (item.quantity === 0) {
                let index = inventory.indexOf(item);
                inventory.splice(index, 1);
            }

        };





        return {
            getInventory: getInventory,
            addItem: addItem,
            removeItem: removeItem
        }
    }
}());
