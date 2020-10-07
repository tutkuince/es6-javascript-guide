// Create a function called 'reject'.
// Reject should work in the opposite way of 'filter' - if a function returns 'true',
// the item should not be included in the new array

let numbers = [10, 20, 30];
let lessThanFifteen = reject(numbers, function (number) {
   return number > 15;
});

function reject(array, iteratorFunction) {
    return array.filter(function (a) {
       return !iteratorFunction(a);
    });
}

console.log(lessThanFifteen);