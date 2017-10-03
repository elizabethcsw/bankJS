describe('bankAction', function() {
	var account;
	var action;

	beforeEach(function() {
		account = {
			record: [],
			balance: function(){ return 1000},
			addRecord: function(){},
			addBalance: function(){},
		};
		action = new bankAction(account);
	});

	it('can withdraw money from the account', function() {
		action.proceed("withdraw", 200, '2012-01-13');
		expect(action.debit).toEqual(200);
	});

	it('can deposit money into the account', function() {
		action.proceed("deposit", 3000, '2012-01-13');
		expect(action.credit).toEqual(3000);
	});

	it('throws an error when there is an invalid action', function() {
		expect(function() {
			action.proceed("hello", 200, '2012-01-13');;
		}).toThrow("Invalid Action!");
	});

	it('throws an error when there is insufficient funds to be withdrawn', function() {
		expect(function() {
			action.proceed("withdraw", 20000, '2012-01-13');
		}).toThrow('Insufficient funds');
	});
});
