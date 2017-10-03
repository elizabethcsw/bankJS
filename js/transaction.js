'use strict';

(function(exports) {
	function transaction(options) {
		this._date = options.date
		this._credit = options.credit
		this._debit = options.debit
		this.record = [];
		this.recordStructure = { date: '', credit: '', debit: '', balance: 0 };
	}

	transaction.prototype.balance = function() {
		return this._balance;
	};

	transaction.prototype.addBalance = function(balance) {
		return this._balance = this._balance + balance;
	};

	exports.transaction = transaction ;
})(this);
