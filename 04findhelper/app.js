let users = [
    {name: 'Jill'},
    {name: 'Alex'},
    {name: 'Bill'},
    {name: 'Alex'}
];

let user;

for (let i = 0; i < users.length; i++) {
    if (users[i].name === 'Alex') {
        user = users[i];
    }
}

console.log(user);

user = users.find(function (user) {
   return user.name === 'Alex';
});
// returns first one.
console.log(user);