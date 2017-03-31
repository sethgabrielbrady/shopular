(function() {
  'use strict';

let expect = chai.expect;
let now = Date.now();
let obj1 = {name:'Test',time: now};


describe ('login controller', function() {

  let LoginController;
  let mockLoginService = {};

  beforeEach(module('shopular'));

  beforeEach(module(function($provide) {
      $provide.value('LoginService', mockLoginService);
  }));

  beforeEach(inject(function($controller) {
      mockLoginService.userLogin = function userLogin() {
          return [obj1];
      };
    }));

    it('should be the correct types', function(){
    expect(LoginController.userLogin).to.be.a('function');
    expect(LoginController.removeUser).to.be.a('function');

  });


});

}());
