(function() {
    'use strict';

    angular.module('shopular').factory('InventoryService', InventoryService);



    function InventoryService() {

        let newItem = {};
        let inventory = JSON.parse(localStorage.getItem('inventory')) || [];
        let removeData;
        console.log(inventory);
        /**
         * Add a new object to the inventory array. Will convert a string to a
         * number for price, discount, and quantity inputs. Adds to localStorage as
         * a string.
         * @param {Object} item
         * @return {VOID}
         */
        function addItem(item) {
            item.price = Number(item.price);//Do a NaN  and (less than 0) check on all of these
            item.discount = Number(item.discount);
            item.quantity = Number(item.quantity);

            if (typeof(item) !== 'object' || typeof(item.name) !== 'string' ||
                typeof(item.price) !== 'number' || typeof(item.discount) !== 'number' ||
                typeof(item.quantity) !== 'number' || !(item.quantity) ||
                !(item.price) || typeof(item.color) !== 'string') {
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
            localStorage.setItem('inventory', angular.toJson(inventory));
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
        function removeItems(item) {
          console.log('from remove item', item);
            if (item.quantity === 0) {
                let index = inventory.indexOf(item);
                inventory.splice(index, 1);
                localRemove();
              }
        }


        function localRemove(){
          //might put this in a function if I use it again
          //calls localstorage and stores it inside rmeove data
          removeData = localStorage.getItem('inventory', angular.toJson(inventory));
          //resets local storage to whatever inventory is currently at
          removeData = localStorage.setItem('inventory', angular.toJson(inventory));
        }



        return {
            localRemove: localRemove,
            getInventory: getInventory,
            addItem: addItem,
            removeItems: removeItems
        };
    }
}());
