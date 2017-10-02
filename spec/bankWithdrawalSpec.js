// describe("bankStatement", function() {
//   var account;
//   var statement;
//
//   beforeEach(function() {
//     account = {record: [ { date: '2012-01-10', credit: 1000, debit: ' ', balance: 1000 }, { date: '2012-01-13', credit: 2000, debit: ' ', balance: 3000 }, { date: '2012-01-14', credit: ' ', debit: 500, balance: 2500 } ]}
//
//     statement = new bankStatement(account);
//   });
//
//   it("should be in chronological order", function() {
//     expect(statement.sortByDate()).toEqual([ { date: '2012-01-14', credit: ' ', debit: 500, balance: 2500 },{ date: '2012-01-13', credit: 2000, debit: ' ', balance: 3000 }, { date: '2012-01-10', credit: 1000, debit: ' ', balance: 1000 },  ])
//   });
//
//   it("should print in the correct format", function() {
//     expect(statement.print()).toEqual("\ndate || credit || debit || balance\n14/01/2012 || || 500.00 || 2500.00\n13/01/2012 || 2000.00 || || 3000.00\n10/01/2012 || 1000.00 || || 1000.00");
//   });
//
// });
