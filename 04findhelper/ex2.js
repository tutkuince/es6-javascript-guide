// Find the user in the user's array who is an admin.
// Assign this user to the variable 'admin'.

let users = [
    {id: 1, admin: false},
    {id: 2, admin: false},
    {id: 3, admin: true},
];

let admin =  users.find(function (user) {
    return user.admin;
});

console.log(admin);