let numbers = [10, 20, 30];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

// 0 is initial value
sum = numbers.reduce(function (sum, number) {
   return sum + number;
}, 0);

console.log(sum);
