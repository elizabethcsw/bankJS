'use strict';

(function(exports) {
	function transaction(options) {
		this._date = options.date;
		this._credit = options.credit;
		this._debit = options.debit;
		this._balance = options.balance;
	}

	transaction.prototype.format = function() {
		return this._balance;
	};

	transaction.prototype.addBalance = function(balance) {
		return this._balance = this._balance + balance;
	};

	exports.transaction = transaction ;
})(this);
