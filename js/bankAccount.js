'use strict';

(function(exports) {
	function BankAccount() {
		this._balance = 0;
		this.record = [];
	}

	BankAccount.prototype.balance = function() {
		return this._balance;
	};

	BankAccount.prototype.addBalance = function(balance) {
		return this._balance = this._balance + balance;
	};

	BankAccount.prototype.addRecord = function(record) {
		this.record.push(record);
	};

	exports.BankAccount = BankAccount;
})(this);
