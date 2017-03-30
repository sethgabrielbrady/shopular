(function() {
    'use strict';


    angular.module('shopular').controller('LoginController', LoginController);

    LoginController.$inject = ['LoginService'];


    function LoginController(LoginService) {
        let vm = this;

        vm.loginData = LoginService.getLogin();//get user



        vm.newLogin = {};

        vm.userLogin = function userLogin(info) {//add user

            console.log('Hello from userLogin controller');

            LoginService.userLogin(info);
            vm.newLogin = {};
        };

        // vm.getLogin = function getLogin(){
        // let name = LoginService.getLogin();
        //     return name.name;
        // };

    }
}());
