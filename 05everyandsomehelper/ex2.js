function Field(value) {
    this.value = value;
}

Field.prototype.validate = function () {
    return this.value.length > 0;
}

let username = new Field('2cool');
let password = new Field('my_password');
let birthdate = new Field('10/10/2010');

console.log(username.validate() && password.validate());

let fields = [username, password, birthdate];

let formIsValid = fields.every(function (field) {
   return field.validate();
});

if (formIsValid) {
    // allow user to submit!
} else {
    // show an error message
}