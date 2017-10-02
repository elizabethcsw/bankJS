describe("bankDeposit", function() {
  var account;
  var deposit;

  beforeEach(function() {
    account = {
      record: []
    }

    deposit = new bankDeposit(account);
  });

  it("can deposit money into the account", function() {
    account.addBalance = jasmine.createSpy("addBalance() spy")
    account.balance = jasmine.createSpy("balance spy").and.returnValue(2000);
    deposit.proceed(2000, '2012-01-13')
    expect(deposit.record).toEqual({ date: '2012-01-13', credit: 2000, debit: '', balance: 2000 })
  });

});
