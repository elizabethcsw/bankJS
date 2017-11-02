'use strict';

(function(exports) {
	function BankStatement(record) {
		this.record = record;
		this._header = '\ndate || credit || debit || balance';
	}

	BankStatement.prototype.print = function() {
		var details = '';
		this.sortByDate().forEach(function(hash){
			details += ( '\n' + hash.date + ' || ' + hash.credit + ' || ' + hash.debit + ' || ' + hash.balance);});
		return this._header + details;
	};

	BankStatement.prototype.sortByDate = function() {
		return this.record.sort(function(a,b){
			a = a.date.split('/');
			b = b.date.split('/');
			if (a[1] == b[1]) {
				return parseInt(b[0]) - parseInt(a[0]);
			} else if (a[2] == b[2]) {
				return parseInt(b[1]) - parseInt(a[1]);
			} else if  ( a[2] > b[2] ) { return -1; }
			else if (a[2] < b[2] ) { return 1; }
		});
	};

	exports.BankStatement = BankStatement;
})(this);
