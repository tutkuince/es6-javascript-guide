let paints = [
    {color: 'red'},
    {color: 'blue'},
    {color: 'yellow'},
];

function pluck(array, property) {
    return array.map(function (item) {
      return item[property];
    });
}

console.log(pluck(paints, 'color'));
