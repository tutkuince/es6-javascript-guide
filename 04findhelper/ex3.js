// Find the account with a balance of 12 and assign it to the variable 'account'

let accounts = [
    {balance: -10},
    {balance: 12},
    {balance: 0},
];

let account = accounts.find(function (acc) {
   return acc.balance === 12;
});

console.log(account);