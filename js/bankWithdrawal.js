'use strict';

(function(exports) {
	function bankWithdrawal(bankAccount) {
		this.bankAccount = bankAccount;
		this.record = '';
	}

	bankWithdrawal.prototype.checkPositive = function(amount){
		if (amount > this.bankAccount.balance()) {
			throw 'Insufficient funds';
		} else {
			return true
		}
	};

	bankWithdrawal.prototype.proceed = function(amount, today) {
		this.checkPositive(amount);
		this.bankAccount.addBalance(-amount);
		this.record = { date: today, credit: '', debit: amount, balance: '' };
		this.record.balance = this.bankAccount.balance();
		this.bankAccount.record.push(this.record);
	};

	exports.bankWithdrawal = bankWithdrawal;
})(this);
