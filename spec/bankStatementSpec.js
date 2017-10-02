
// const bankAccount = require("../src/bankAccount").bankAccount;

describe("bankAccount", function() {
  var account;
  var statement;

  beforeEach(function() {
    account = new bankAccount();
    account.deposit(1000, '10/01/2012');
    account.deposit(3000, '02/10/2012');
    account.withdraw(500, '14/01/2012');
    statement = new bankStatement(account);
  });

  it("should have 0 balance to start with", function() {
    expect(statement.print()).toEqual("\ndate       || credit  || debit  || balance\n14/01/2012 ||         || 500.00 || 2500.00\n13/01/2012 || 2000.00 ||        || 3000.00\n10/01/2012 || 1000.00 ||        || 1000.00");
  });

  // it("cannot withdraw money if there is insufficient funds", function() {
  //   expect(function() {
  //     account.withdraw(5, '02/10/2017');
  //     }).toThrow("Insufficient funds")
  // });


  // date       || credit  || debit  || balance
  // 14/01/2012 ||         || 500.00 || 2500.00
  // 13/01/2012 || 2000.00 ||        || 3000.00
  // 10/01/2012 || 1000.00 ||        || 1000.00

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
