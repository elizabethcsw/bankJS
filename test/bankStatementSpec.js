describe('bankStatement', function() {
	var account;
	var statement;

	beforeEach(function() {
		account = {record: [
			{ date: '10/01/2012', credit: '1000.00', debit: '', balance: '1000.00' },
			{ date: '13/01/2012', credit: '2000.00', debit: '', balance: '3000.00' },
			{ date: '14/01/2012', credit: '', debit: '500.00', balance: '2500.00' }
		]};

		statement = new bankStatement(account.record);
	});

	it('should be in chronological order', function() {
		expect(statement.sortByDate()).toEqual([
			{ date: '14/01/2012', credit: '', debit: '500.00', balance: '2500.00' },
			{ date: '13/01/2012', credit: '2000.00', debit: '', balance: '3000.00' },
			{ date: '10/01/2012', credit: '1000.00', debit: '', balance: '1000.00' }]);
	});

	it('should print in the correct format', function() {
		expect(statement.print()).toEqual(
			'\ndate || credit || debit || balance' +
			'\n14/01/2012 ||  || 500.00 || 2500.00' +
			'\n13/01/2012 || 2000.00 ||  || 3000.00' +
			'\n10/01/2012 || 1000.00 ||  || 1000.00' );
	});

});
