(function() {
    'use strict';


    angular.module('shopular').controller('LoginController', LoginController);

    LoginController.$inject = ['LoginService'];


    function LoginController(LoginService) {
        let vm = this;

        vm.loginData = LoginService.getLogin();//get user


        vm.newLogin = {};

        vm.userLogin = function userLogin(info) {//add user

            LoginService.userLogin(info);
            vm.newLogin = {};
        };

        // vm.getLogin = function getLogin(){
        // let name = LoginService.getLogin();
        //     return name.name;
        // };
        vm.removeUser = function removeUser(user){
          LoginService.removeUser(user);
          // localStorage.removeItem(item);
          };
    }
}());
