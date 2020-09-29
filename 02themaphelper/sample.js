let cars = [
    {model: 'Buick', price: 'CHEAP'},
    {model: 'Camaro', price: 'EXPENSIVE'}
];

let prices = cars.map(function (car) {
   return car.price;
});

console.log(prices);