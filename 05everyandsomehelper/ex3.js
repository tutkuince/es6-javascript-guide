// Given an array of users, return 'true' if every user has submitted a request form.
// Assign the result to the variable 'hasSubmitted'.

let users = [
    {id: 21, hasSubmitted: true},
    {id: 62, hasSubmitted: false},
    {id: 4, hasSubmitted: true},
];

let hasSubmitted = users.every(function (user) {
   return user.hasSubmitted;
});

console.log('hasSubmitted:', hasSubmitted);
