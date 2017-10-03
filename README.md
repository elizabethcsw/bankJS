Bank!
============

A REPL application that mimics a simple ATM system.  

Tech stack:  Javascript, Jasmine for testing, ESLint as linter, and Karma and Istanbul for test coverage.

User Stories
---------
```
As a customer
So that I can have money to spend
I want to credit money to my account
```
```
As a customer
So that I can buy things
I want to debit money from my account
```
```
As a customer
So that I can see how much money I have
I want to see my account balance
```
```
As a customer
So that I can see my account history
I want to print a statement
```


Setup
-------
```
$ git clone https://github.com/elizabethcsw/bankJS.git
$ cd bankJS
$ npm install
```

How to Run
-------
Create an instance of each constructor object:
```
> account = new bankAccount();
> withdrawal = new bankWithdrawal(account);
> deposit = new bankDeposit(account);
> statement = new bankStatement(account);
```
Run the appropriate methods as needed:
```
> deposit.proceed(2000, '2012-01-13');
> withdrawal.proceed(1000, '2012-01-15');
> statement.print();
```

You should see:
```
date || credit || debit || balance
15/01/2012 || || 1000.00 || 1000.00
13/01/2012 || 2000.00 || || 2000.00
```


How to Test
---------
For testing, open SpecRunner.html with http://path/to/directory/SpecRunner.html
```
$ open SpecRunner.html
```
For test coverage, run npm test  and view the coverage report at http://path/to/directory/coverage/Chrome.../js/index.html
```
$ npm test
```
