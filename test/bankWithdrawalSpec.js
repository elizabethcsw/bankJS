describe('bankWithdrawal', function() {
	var account;
	var withdrawal;

	beforeEach(function() {
		account = {
			record: [],
			balance: function(){ return 1000},
			addRecord: function(){},
			addBalance: function(){},
		};
		withdrawal = new bankWithdrawal(account);

	});

	it('throws an error when there is insufficient funds to be withdrawn', function() {
		expect(function() {
			withdrawal.hasEnoughFunds(3000);
		}).toThrow('Insufficient funds');
	});

	it('returns true when there is sufficient funds to be withdrawn', function() {
		expect(withdrawal.hasEnoughFunds(500)).toEqual(true);
	});

	it('can withdraw money from the account', function() {
		withdrawal.hasEnoughFunds = jasmine.createSpy('hasEnoughFunds() spy').and.returnValue(false);

		withdrawal.proceed(2000, '2012-01-13');
		expect(withdrawal.record).toEqual({ date: '2012-01-13', credit: '', debit: 2000, balance: 1000 });
	});

});
