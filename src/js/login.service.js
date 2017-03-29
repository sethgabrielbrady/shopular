(function() {
    'use strict';

    angular.module('shopular').factory('LoginService', LoginService);

    function LoginService() {
        console.log('Hello from login service');

        let newLogin = {};

        let loginData = JSON.parse(localStorage.getItem('loginData')) || [];

        //this will be my login
        function login(info) {
          console.log(info);
            let time = Date.now();

            loginData.push({
                name: info.name,
                pass: info.pass,
                time: time
            });

            localStorage.setItem('loginData', angular.toJson(login));
        }

        function getLogin() {
            return loginData;
        }



        return {
            login: login,
            getLogin: getLogin
        };



    }
}());
