'use strict';

(function(exports) {
	function FormatTransaction(options) {
		this._date = options.date;
		this._credit = options.credit;
		this._debit = options.debit;
		this._balance = options.balance;
	}

	FormatTransaction.prototype.produceRecord = function() {
		return {
			date: this._formatDate(this._date),
			credit: this._formatAmount(this._credit),
			debit: this._formatAmount(this._debit),
			balance: this._formatAmount(this._balance) };
	};

	FormatTransaction.prototype._formatDate = function(d) {
		d = (new Date(d));
		return ('0' + d.getDate()).slice(-2)+'/'+('0'+(d.getMonth()+1)).slice(-2)+'/'+d.getFullYear();
	};

	FormatTransaction.prototype._formatAmount = function(n) {
		if (n == 0 || n == ''){
			return '';}
		return '' + Number(n).toFixed(2);
	};

	exports.FormatTransaction = FormatTransaction ;
})(this);
