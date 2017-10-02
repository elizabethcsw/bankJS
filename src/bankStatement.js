"use strict";

(function(exports) {
  function bankStatement(bankAccount) {
    this.bankAccount = bankAccount;

    this._balance = balance;
    this.record = []
    this.recordStructure = { date: '', credit: '', debit: '', balance: 0 };
  };


  bankAccount.prototype.print = function() {
    this.bankAccount.record.forEach(function(){


    })



    this.noteList.list.forEach(function(note){
      stringpart+=("<li><div><a href='#notes/" + note.id + "'>" + note.text.slice(0,20) + "</a></div></li>");
    // console.log("inside forEach: " + stringpart)
  });
  };



  exports.bankStatement = bankStatement;
})(this);
