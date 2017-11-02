'use strict';

(function(exports) {
	function BankAction(bankAccount) {
		this.account = bankAccount;
	}

	BankAction.prototype.proceed = function(action, amount, today) {
		this._determineAction(action, amount);
		var newBalance = this.account.addBalance(this.amount);
		var record = new FormatTransaction({ date: today, credit: this.credit, debit: this.debit, balance: newBalance }).produceRecord();
		this.account.addRecord(record);
	};

	BankAction.prototype._determineAction = function(action, amount){
		this.debit = this.credit = this.amount = amount;
		if (action == 'withdraw'){
			this._hasEnoughFunds(amount);
			this.credit = 0;
			this.amount = -amount;
		} else if (action == 'deposit'){
			this.debit = 0;
		} else { throw 'Invalid Action!'; }
	};

	BankAction.prototype._hasEnoughFunds = function(amount){
		if (amount > this.account.balance()) {
			throw 'Insufficient funds';
		} else { return true; }
	};

	exports.BankAction = BankAction;
})(this);
