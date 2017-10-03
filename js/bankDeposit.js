'use strict';

(function(exports) {
	function bankDeposit(bankAccount) {
		this.bankAccount = bankAccount;
		this.record = '';
	}

	bankDeposit.prototype.proceed = function(amount, today) {
		this.bankAccount.addBalance(amount);
		this.record = { date: today, credit: amount, debit: '', balance: '' };
		this.record.balance = this.bankAccount.balance();
		this.bankAccount.addRecord(this.record);
	};

	exports.bankDeposit = bankDeposit;
})(this);
