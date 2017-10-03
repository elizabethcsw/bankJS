'use strict';

(function(exports) {
	function transaction(options) {
		this._date = options.date;
		this._credit = options.credit;
		this._debit = options.debit;
		this._balance = options.balance;
	}

	transaction.prototype.produceCreditRecord = function() {
		return { date: this._format(this._date), credit: this._credit, debit: '', balance: '' };
	};

	transaction.prototype._format = function(d) {
		d = (new Date(d));
		return ('0' + d.getDate()).slice(-2)+'/'+('0'+(d.getMonth()+1)).slice(-2)+'/'+d.getFullYear();
	};

	exports.transaction = transaction ;
})(this);
