let products = [
    {name: 'cucumber', type: 'vegetable'},
    {name: 'banana', type: 'fruit'},
    {name: 'celery', type: 'vegetable'},
    {name: 'orange', type: 'fruit'},
];

let filteredProducts = [];

for (let i = 0; i < products.length; i++) {
    if (products[i].type === 'fruit') {
        filteredProducts.push(products[i]);
    }
}

console.log(filteredProducts);

products.filter(function (product) {
    return product.type === 'vegetable';
});