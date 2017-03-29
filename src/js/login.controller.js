(function() {
    'use strict';


    angular.module('shopular').controller('LoginController', LoginController);

    LoginController.$inject = ['LoginService'];
    let vm = this;

    function LoginController(LoginService) {

        vm.loginData = LoginService.getLogin();
        vm.newLogin = {};

        vm.login = function login(info) {
            LoginService.login(info);
            vm.newLogin = {};
        };




    }
}());
