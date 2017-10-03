'use strict';

(function(exports) {
	function bankStatement(bankAccount) {
		this.bankAccount = bankAccount;
		this._header = '\ndate || credit || debit || balance';
	}

	bankStatement.prototype.sortByDate = function() {
		return this.bankAccount.record.sort(function(a,b){
			a = a.date.split('/');
			b = b.date.split('/');
			if (a[1] == b[1]) {
				return parseInt(b[0]) - parseInt(a[0])
			} else if (a[2] == b[2]) {
				return parseInt(b[1]) - parseInt(a[1])
			} else if  ( a[2] > b[2] ) { return -1 }
				else if (a[2] < b[2] ){ return 1 }
		});
	};

	bankStatement.prototype.print = function() {
		var details = '';
		var sorted = this.sortByDate();
		sorted.forEach(function(hash){
			details+=( '\n' + hash.date + ' || ' + hash.credit + ' || ' + hash.debit + ' || ' + hash.balance);
		});
		return this._header + details;
	};

	exports.bankStatement = bankStatement;
})(this);
