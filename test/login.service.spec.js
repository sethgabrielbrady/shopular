(function() {
  'use strict';


  let expect = chai.expect;
  let now;
  let obj1 = {name:'Test',time: now};
  let obj2 = {name:'Test2',time: now};
  let fakeData = [];
  let name = 'Seth';

  describe('login service', function(){


    let LoginService;

    beforeEach(module('shopular'));

    beforeEach(inject(function(_LoginService_){
      LoginService = _LoginService_;
    }));

    afterEach(inject(function(_LoginService_){
        localStorage.removeItem('loginData');
    }));

    it('should return an array from getLogin', function(){
         expect(LoginService.getLogin()).to.be.an('array');
    });

    it('should be able to return a valid object key', function(){
      expect(LoginService.getLogin().length).to.equal(0);
      now = Date.now();
      LoginService.userLogin(obj1);
      let users = LoginService.getLogin();
      now = Date.now();
      expect(users[0].time).to.equal(now);
      expect(users[0].name).to.equal('Test');
    });

    it('should be the correct types', function(){
      expect(LoginService.removeUser).to.be.an('function');//this doesnt matter??
      });








  });


}());
