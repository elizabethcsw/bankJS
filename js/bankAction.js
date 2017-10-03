'use strict';

(function(exports) {
	function bankAction(bankAccount) {
		this.account = bankAccount;
		this.record = '';
		this.credit = '';
		this.debit = '';
	}

	bankAction.prototype.proceed = function(action, amount, today) {
		this._determineAction(action, amount)
		var newBalance = this.account.addBalance(amount);
		this.record = new inputTransaction({ date: today, credit: this.credit, debit: this.debit, balance: newBalance }).produceRecord();
		this.account.addRecord(this.record);
	};

	bankAction.prototype._hasEnoughFunds = function(amount){
		if (amount > this.account.balance()) {
			throw 'Insufficient funds';
		} else { return true }
	};

	bankAction.prototype._determineAction = function(action, amount){
		if (action == "withdraw"){
			this._hasEnoughFunds(amount);
			this.debit = amount;
			-amount;
		} else if (action == "deposit"){
			this.credit = amount
		} else { throw "Invalid Action!" }
	};

	exports.bankAction = bankAction;
})(this);
