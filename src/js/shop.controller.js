(function() {
    'use strict';

    angular.module('shopular')
        .controller('ShopController', ShopController);

    let taxes = 0.0575;

    /**
     * [Holds the inventory array and the priceAdj function ]
     */
    function ShopController() {

      let vm = this;


        vm.inventory = [{
                "id": 2957,
                "name": "widget",
                "price": 32,
                "quantity": 203,
                "color": "red",
                "discount": 31
            },
            {
                "id": 89274,
                "name": "golf club",
                "price": 98,
                "quantity": 10,
                "color": "black",
                "discount": 0
            },
            {
                "id": 64,
                "name": "iPhone",
                "price": 499,
                "quantity": 2,
                "color": "white",
                "discount": 0
            },
            {
                "id": 87363,
                "name": "bonzai tree",
                "price": 76,
                "quantity": 2,
                "color": "green",
                "discount": 0
            },
            {
                "id": 1736,
                "name": "towel",
                "price": 55,
                "quantity": 30,
                "color": "brown",
                "discount": 10
            },
            {
                "id": 4836,
                "name": "dog bed",
                "price": 99,
                "quantity": 10,
                "color": "beige",
                "discount": 50
            },
            {
                "id": 829,
                "name": "waste basket",
                "price": 15,
                "quantity": 40,
                "color": "silver",
                "discount": 0
            },
            {
                "id": 46,
                "name": "guitar",
                "price": 899,
                "quantity": 0,
                "color": "blue",
                "discount": 150
            },
            {
                "id": 17456,
                "name": "matcha tea",
                "price": 42,
                "quantity": 4,
                "color": "green",
                "discount": 11
            },
            {
                "id": 3292,
                "name": "enlightenment",
                "price": 99999,
                "quantity": 1,
                "color": "red",
                "discount": 0
            },
            {
                "id": 533,
                "name": "eggs",
                "price": 5,
                "quantity": 12,
                "color": "brown",
                "discount": 1
            },
            {
                "id": 683,
                "name": "pillow",
                "price": 27,
                "quantity": 10,
                "color": "black",
                "discount": 12
            }
        ];


        vm.taxes = taxes;

        /**
         * takes in the inventory object, subtracts the discount property value from the
         * price property value, add that to the price prop value multiplied
         * by the the taxes variable.
         * @param  {Object} item [uses the inventory object]
         * @return {Number}      [returns a price adjusted for discounts and taxes
         */
        vm.priceAdj = function priceAdj(item) {

            return ((item.price * this.taxes) - item.discount + item.price);

        };

        /**
         * Will change the word color to colour on the button click
         * @return {VOID}
         */
        vm.changeCountry = function changeCountry() {
            document.querySelector('.change').innerHTML = 'COLOUR';
        };

        let clickCount = 0;

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



    } //belongs to ShopController




}());
