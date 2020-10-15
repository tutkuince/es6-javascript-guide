let names = [
  "Alex",
  "Matthew",
  "Joe"
];

// and operation
let everyNames = names.every(function (name) {
   return name.length > 4;
});

// or operation
let someNames = names.some(function (name) {
   return name.length > 4;
});

console.log('everyNames:', everyNames);
console.log('someNames:', someNames);