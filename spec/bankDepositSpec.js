describe("bankStatement", function() {
  var account;
  var deposit;

  beforeEach(function() {
    account = {record: [ { date: '2012-01-10', credit: 1000, debit: ' ', balance: 1000 }, { date: '2012-01-13', credit: 2000, debit: ' ', balance: 3000 }, { date: '2012-01-14', credit: ' ', debit: 500, balance: 2500 } ]}

    deposit = new bankDeposit(account);
  });

  it("can deposit money into the account", function() {
    account.addBalance = jasmine.createSpy("addBalance() spy")
    account.balance = jasmine.createSpy("balance spy").and.returnValue(2000);
    deposit.proceed(2000, '2012-01-13')
    expect(deposit.record).toEqual({ date: '2012-01-13', credit: 2000, debit: '', balance: 2000 })
  });

});
