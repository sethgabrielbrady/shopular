(function() {
    'use strict';

    angular.module('shopular').factory('LoginService', LoginService);

    function LoginService() {
        console.log('Hello from login service');
        // localStorage.clear();//this will clear local storage
        let newLogin = {};

        let loginData = JSON.parse(localStorage.getItem('loginData')) || [];//MY LOCAL STAROGE DATA
        console.log(loginData);

        /**
         * Will pass the string data into the object
         * @param  {string} info text input string
         * @return {void}
         */
        function userLogin(info) {
            console.log(info);

            let time = Date.now();
            console.log(time);
            loginData.push({
                name: info.name,
                time: time
            });

            localStorage.setItem('loginData', angular.toJson(loginData));
        }

        /**
         * Simpply returns the object array in localStorage
         * @return {Object} localStorage object array
         */
        function getLogin() {
            return loginData;
        }

        return {
            userLogin: userLogin,
            getLogin: getLogin
        };



    }
}());
