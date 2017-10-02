'use strict';

describe("bankAccount", function() {
  var account;

  beforeEach(function() {
    account = new bankAccount();
  });

  it("should have 0 balance to start with", function() {
    expect(account.balance()).toEqual(0);
  });

  it("should be able to deposit money", function() {
    account.deposit(5, '01/10/2017');
    expect(account.balance()).toEqual(5);
  });

  it("should be able to withdraw money", function() {
    account.deposit(6, '02/10/2017');
    account.withdraw(5, '02/10/2017');
    expect(account.balance()).toEqual(1);
  });

  it("cannot withdraw money if there is insufficient funds", function() {
    expect(function() {
      account.withdraw(5, '02/10/2017');
      }).toThrow("Insufficient funds")
  });

  

  // it("should be able to decrease temp", function() {
  //   thermo.change(-5);
  //   expect(thermo.temp).toEqual(15);
  // });
  //
  // it("should throw an error when temp goes below 10C", function(){
  //   expect(function() {
  //     thermo.change(-11);
  //   }).toThrow("Minimum temp is 10C");
  // });
  //
  // it("should throw an error when temp goes above 25C by default", function(){
  //   expect(function() {
  //     thermo.change(11);
  //   }).toThrow("Maximum temp is 25C on powersafe mode");
  // });
  //
  // it("should throw an error when temp goes above 32C when powersafe is off", function(){
  //   expect(function() {
  //     thermo.powersafe = false;
  //     thermo.change(21);
  //   }).toThrow("Maximum temp is 32C when powersafe is off");
  // });
  //
  // it("temp can be reset", function(){
  //     thermo.change(-9);
  //     thermo.resetnow();
  //     expect(thermo.temp).toEqual(20);
  // });
  //
  // it("returns 'low-usage' if low temp", function(){
  //     thermo.change(-9);
  //     expect(thermo.currentUsage).toMatch('low-usage');
  // });
  //
  // it("returns 'medium-usage' if medium temp", function(){
  //     thermo.change(-2);
  //     expect(thermo.currentUsage).toMatch('medium-usage');
  // });
  //
  // it("returns 'high-usage' if high temp", function(){
  //     thermo.powersafe = false
  //     thermo.change(9);
  //     expect(thermo.currentUsage).toMatch('high-usage');
  // });
});
