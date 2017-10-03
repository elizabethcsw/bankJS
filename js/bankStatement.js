'use strict';

(function(exports) {
	function bankStatement(bankAccount) {
		this.bankAccount = bankAccount;
		this._header = '\ndate || credit || debit || balance';
	}

	function format(d){
		d = (new Date(d));
		return ('0' + d.getDate()).slice(-2)+'/'+('0'+(d.getMonth()+1)).slice(-2)+'/'+d.getFullYear();
	}

	function float(n){
		if (n == 0 || n == ''){
			return '';}
		return ' ' + Number(n).toFixed(2);
	}

	bankStatement.prototype.sortByDate = function() {
		return this.bankAccount.record.sort(function(a,b){
			return new Date(b.date) - new Date(a.date);
		});
	};

	bankStatement.prototype.print = function() {
		var details = '';
		var sorted = this.sortByDate();
		sorted.forEach(function(hash){
			details+=( '\n' + format(hash['date']) + ' ||' + float(hash['credit']) + ' ||' + float(hash['debit']) + ' ||' + float(hash['balance']));
		});
		return this._header + details;
	};

	exports.bankStatement = bankStatement;
})(this);
