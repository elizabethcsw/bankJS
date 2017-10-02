'use strict';

describe("bankAccount", function() {
  var account;

  beforeEach(function() {
    account = new bankAccount();
  });

  it("should have 0 balance to start with", function() {
    expect(account.balance()).toEqual(0);
  });

  it("should be able to add money to its account", function() {
    account.addBalance(5);
    expect(account.balance()).toEqual(5);
  });

  it("should be able to subtract money from its account", function() {
    account.addBalance(5);
    account.addBalance(-1);
    expect(account.balance()).toEqual(4);
  });

});
