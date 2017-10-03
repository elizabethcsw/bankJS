'use strict';

(function(exports) {
	function bankDeposit(bankAccount) {
		this.bankAccount = bankAccount;
		this.record = '';
	}

	bankDeposit.prototype.proceed = function(amount, today) {
		var newBalance = this.bankAccount.addBalance(amount);
		this.record = new transaction({ date: today, credit: amount, debit: '', balance: newBalance }).produceCreditRecord();
		this.bankAccount.addRecord(this.record);
	};

	exports.bankDeposit = bankDeposit;
})(this);
