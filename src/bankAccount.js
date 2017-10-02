"use strict";

(function(exports) {
  function bankAccount(balance = 0) {
    this._balance = balance;
    this.record = []
    this.recordStructure = { date: '', credit: '', debit: '', balance: 0 };
  };

  bankAccount.prototype.balance = function() {
    return this._balance
  };

  bankAccount.prototype.deposit = function(amount, today) {
    this._balance += amount;
    this.record.push({date:today, credit: amount, debit:"", balance:""});
    this.record[this.record.length-1]["balance"]=this._balance
  };

  bankAccount.prototype.withdraw = function(amount, today) {
    if(amount>this._balance){
      throw "Insufficient funds"
      return
    }
    this._balance -= amount;
    this.record.push({date:today, credit: "", debit:amount, balance:""});
    this.record[this.record.length-1]["balance"]=this._balance
  };

  exports.bankAccount = bankAccount;
})(this);

// date       || credit  || debit  || balance
// 14/01/2012 ||         || 500.00 || 2500.00
// 13/01/2012 || 2000.00 ||        || 3000.00
// 10/01/2012 || 1000.00 ||        || 1000.00
//
// d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear()

// var bankAccount = function (){
//   this.balance=0;
//   this.powersafe = true
//   this.change = function(num){
//     if(this.temp+num<10){
//       throw "Minimum temp is 10C"
//     }
//     else if(this.temp+num>25 && this.powersafe){
//       throw "Maximum temp is 25C on powersafe mode"
//     }
//     else if(this.temp+num>32){
//       throw "Maximum temp is 32C when powersafe is off"
//     }
//     else{this.temp=this.temp+num};
// };
//   this.resetnow = function(){
//     this.temp = 20;
//   };
//   this.currentUsage = function(){
//     switch(true){
//       case this.temp<18:
//         return "low-usage"
//         break;
//       case this.temp<25:
//         return "medium-usage"
//         break;
//       default:
//         return "high-usage"
//     };
//   };
// };
