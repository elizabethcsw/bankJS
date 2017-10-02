describe('bankWithdrawal', function() {
	var account;
	var withdrawal;

	beforeEach(function() {
		account = {record: []};
		withdrawal = new bankWithdrawal(account);
	});

	it('throws an error when there is insufficient funds to be withdrawn', function() {
		account.balance = jasmine.createSpy('balance spy').and.returnValue(1000);
		expect(function() {
			withdrawal.checkPositive(3000);
		}).toThrow('Insufficient funds');
	});

	it('returns true when there is sufficient funds to be withdrawn', function() {
		account.balance = jasmine.createSpy('balance spy').and.returnValue(1000);
		expect(withdrawal.checkPositive(500)).toEqual(true);
	});

	it('can withdraw money from the account', function() {
		account.balance = jasmine.createSpy('balance spy').and.returnValue(1000);
		account.addBalance = jasmine.createSpy('addBalance() spy');
		withdrawal.checkPositive = jasmine.createSpy('checkPositive() spy').and.returnValue(false);

		withdrawal.proceed(2000, '2012-01-13');
		expect(withdrawal.record).toEqual({ date: '2012-01-13', credit: '', debit: 2000, balance: 1000 });
	});

	//  spyOn(foo, "setBar").and.throwError("quux");
	// spyOn(foo, "getBar").and.returnValue(745);

});
