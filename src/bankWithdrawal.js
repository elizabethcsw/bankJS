// "use strict";
//
// (function(exports) {
//   function bankAccount(balance = 0) {
//     this._balance = balance;
//     this.record = [];
//     this.recordStructure = { date: "", credit: "", debit: "", balance: 0 };
//   }
//
//   bankAccount.prototype.balance = function() {
//     return this._balance;
//   };
//
  // bankAccount.prototype.addBalance = function(balance) {
  //   this._balance = this._balance + balance;
  // };
  //
  // bankAccount.prototype.deposit = function(amount, today) {
  //   this.addBalance(amount);
  //   this.record.push({ date: today, credit: amount, debit: " ", balance: "" });
  //   this.record[this.record.length - 1]["balance"] = this.balance;
  // };
  //
  // bankAccount.prototype.withdraw = function(amount, today) {
  //   if (amount > this._balance) {
  //     throw "Insufficient funds";
  //     return;
  //   }
  //   this.addBalance(-amount);
  //   this.record.push({ date: today, credit: " ", debit: amount, balance: "" });
  //   this.record[this.record.length - 1]["balance"] = this.balance;
  // };
  //
  // exports.bankAccount = bankAccount;
// })(this);
