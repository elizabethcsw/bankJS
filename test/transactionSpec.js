describe('transaction', function() {
	var account;
	var deposit;

	beforeEach(function() {
		hash = { date: '2012-01-13', credit: 2000, debit: '', balance: '' };
		transact = new transaction(hash);
	});

	it('can produce a credit record', function() {
		expect(transact.produceCreditRecord()).toEqual({ date: '13/01/2012', credit: 2000, debit: '', balance: '' });
	});

});
