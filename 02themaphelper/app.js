let numbers = [1, 2, 3];
let doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2);
}

console.log(doubledNumbers)

let doubled = numbers.map(function (number) {
    return number * 2;
});

console.log(doubled);