(function() {
    'use strict';

    angular.module('shopular').factory('LoginService', LoginService);

    function LoginService() {

        let loginData = JSON.parse(localStorage.getItem('loginData')) || []; //MY LOCAL STAROGE DATA
        console.log(typeof(loginData));

        /**
         * Will pass the string data into the object
         * @param  {String} info text input string
         * @return {Void}
         */
        function userLogin(info) {
            let time = Date.now();
            loginData.push({
                name: info.name,
                time: time
            });
            localStorage.setItem('loginData', angular.toJson(loginData));
        }

        /**
         * Simply returns the object array in localStorage
         * @return {Object} localStorage object array
         */
        function getLogin() {
            return loginData;
        }

        /**
         * Removes the last user object from the loginData array. This is called
         * inside the html after a new user has be entered
         * @param  {Object} user The last user object inside the loginData array
         * @return {Void}
         */

        function removeUser(user) {
            let index = loginData.indexOf(user);
            loginData.splice(index, 1);
        }

        return {
            userLogin: userLogin,
            getLogin: getLogin,
            removeUser: removeUser
        };

    }

}());
