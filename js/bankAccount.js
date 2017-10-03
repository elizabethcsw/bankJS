'use strict';

(function(exports) {
	function bankAccount() {
		this._balance = 0;
		this.record = [];
	}

	bankAccount.prototype.balance = function() {
		return this._balance;
	};

	bankAccount.prototype.addBalance = function(balance) {
		return this._balance = this._balance + balance;
	};

	bankAccount.prototype.addRecord = function(record) {
		this.record.push(record);
	};

	exports.bankAccount = bankAccount;
})(this);
