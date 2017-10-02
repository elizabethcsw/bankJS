"use strict";

(function(exports) {
  function bankDeposit(bankAccount) {
    this.bankAccount = bankAccount;
    this.record = "";
  }

    bankDeposit.prototype.proceed = function(amount, today) {
      console.log("before addBalance" + this.bankAccount.balance())
      this.bankAccount.addBalance(amount);
      console.log("after addBalance" + this.bankAccount.balance())
      this.record = { date: today, credit: amount, debit: "", balance: "" };
      console.log("before .balance()" + this.bankAccount.balance())
      this.record.balance = this.bankAccount.balance();
      console.log("after .balance()" + this.bankAccount.balance())
      this.bankAccount.record.push(this.record)
    };

    exports.bankDeposit = bankDeposit;
})(this);

// account = new bankAccount()
// deposit = new bankDeposit(account)
// deposit.proceed(1000, '2012-01-13')
