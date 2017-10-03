describe('bankStatement', function() {
	var account;
	var statement;

	beforeEach(function() {
		account = {record: [ { date: '10/01/2012', credit: '1000.00', debit: '', balance: '1000.00' }, { date: '13/01/2012', credit: '2000.00', debit: '', balance: '3000.00' }, { date: '14/01/2012', credit: '', debit: '500.00', balance: '2500.00' } ]};

		statement = new bankStatement(account);
	});

	it('should be in chronological order', function() {
		expect(statement.sortByDate()).toEqual([
			{ date: '14/01/2012', credit: '', debit: '500.00', balance: '2500.00' },
			{ date: '13/01/2012', credit: '2000.00', debit: '', balance: '3000.00' },
			{ date: '10/01/2012', credit: '1000.00', debit: '', balance: '1000.00' }]);
	});

	it('should print in the correct format', function() {
		expect(statement.print()).toEqual('\ndate || credit || debit || balance\n14/01/2012 ||  || 500.00 || 2500.00\n13/01/2012 || 2000.00 ||  || 3000.00\n10/01/2012 || 1000.00 ||  || 1000.00');
	});

});

//
// this.bankAccount.record.sort(function(a,b){
// 	return parseInt(b.date.split('/')[2]) - parseInt(a.date.split('/')[2]
// )})
//
// return this.bankAccount.record.sort(function(a,b){
// 	a = a.date.split('/');
// 	b = b.date.split('/');
// 	function sortNum(index){
// 		return parseInt(b[index]) - parseInt(a[index])
// 	};
//
// 	if (a[1] == b[1]) {
// 		sortNum(0);
// 	} else if (a[2] == b[2]) {
// 		sortNum(1);
// 	} else if  ( a[2] > b[2] ) {
// 		return -1
// 	} else if (a[2] < b[2] ){
// 		return 1 }
// })
//

// orange.sort(function(a,b){
// 	a = a.date.split('/');
// 	b = b.date.split('/');
// 	if (a[1] == b[1]) {
// 		return parseInt(b[0]) - parseInt(a[0])
// 	} else if (a[2] == b[2]) {
// 		return parseInt(b[1]) - parseInt(a[1])
// 	} else if  ( a[2] > b[2] ) {
// 		return -1
// 	} else if (a[2] < b[2] ){
// 		return 1 }
// })
//
// orange.sort(function(a,b){
// 	a = a.split('/');
// 	b = b.split('/');
// 	function sortNum(index){
// 		return parseInt(b[index]) - parseInt(a[index])
// 	};
//
// 	if (a[1] == b[1]) {
// 		sortNum(0);
// 	} else if (a[2] == b[2]) {
// 		sortNum(1);
// 	} else if  ( a[2] > b[2] ) {
// 		return -1
// 	} else if (a[2] < b[2] ){
// 		return 1 }
// })
