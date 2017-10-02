"use strict";

(function(exports) {
  function bankAccount(balance = 0) {
    this._balance = balance;
    this.record = [];
    this.recordStructure = { date: "", credit: "", debit: "", balance: 0 };
  }

  bankAccount.prototype.balance = function() {
    return this._balance;
  };

  bankAccount.prototype.addBalance = function(balance) {
    return this._balance = this._balance + balance;
  };

  exports.bankAccount = bankAccount;
})(this);
