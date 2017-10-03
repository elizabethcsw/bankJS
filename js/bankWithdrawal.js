'use strict';

(function(exports) {
	function bankWithdrawal(bankAccount) {
		this.bankAccount = bankAccount;
		this.record = '';
	}

	bankWithdrawal.prototype.hasEnoughFunds = function(amount){
		if (amount > this.bankAccount.balance()) {
			throw 'Insufficient funds';
		} else {
			return true;
		}
	};

	bankWithdrawal.prototype.proceed = function(amount, today) {
		this.hasEnoughFunds(amount);
		this.bankAccount.addBalance(-amount);
		this.record = new transaction({ date: today, credit: '', debit: amount, balance: '' }).produceDebitRecord();
		this.record.balance = this.bankAccount.balance();
		this.bankAccount.addRecord(this.record);
	};

	exports.bankWithdrawal = bankWithdrawal;
})(this);
