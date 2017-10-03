describe('bankDeposit', function() {
	var account;
	var deposit;

	beforeEach(function() {
		account = {
			record: [],
			balance: function(){ return 2000},
			addRecord: function(){},
			addBalance: function(){},
		};
		deposit = new bankDeposit(account);
	});

	it('can deposit money into the account', function() {
		deposit.proceed(3000, '2012-01-13');
		expect(deposit.record.credit).toEqual(3000);
	});

});
