let users = [
    {name: 'Jill'},
    {name: 'Alex'},
    {name: 'Bill'},
];

let user;

for (let i = 0; i < users.length; i++) {
    if (users[i].name === 'Alex') {
        user = users[i];
    }
}

console.log(user);