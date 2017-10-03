describe('transaction', function() {
	var account;
	var deposit;

	beforeEach(function() {
		creditHash = { date: '2012-01-13', credit: 2000, debit: '', balance: '' };
		debitHash = { date: '2012-01-13', credit: '', debit: 2000, balance: '' };
	});

	it('can produce a credit record', function() {
		transact = new inputTransaction(creditHash);
		expect(transact.produceRecord()).toEqual({ date: '13/01/2012', credit: '2000.00', debit: '', balance: '' });
	});

	it('can produce a debit record', function() {
		transact = new inputTransaction(debitHash);
		expect(transact.produceRecord()).toEqual({ date: '13/01/2012', credit: '', debit: '2000.00', balance: '' });
	});

});
