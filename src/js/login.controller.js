(function() {
    'use strict';


    angular.module('shopular').controller('LoginController', LoginController);

    LoginController.$inject = ['LoginService'];


    function LoginController(LoginService) {
        let vm = this;

        vm.loginData = LoginService.getLogin();
        vm.newLogin = {};

        vm.login = function login(info) {
            console.log('Hello from controller');
            LoginService.login(info);
            vm.newLogin = {};
        };

    }
}());
