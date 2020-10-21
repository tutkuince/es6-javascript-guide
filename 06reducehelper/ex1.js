let primaryColors = [
    {color: 'red'},
    {color: 'yellow'},
    {color: 'blue'}
];

let colors = primaryColors.reduce(function (previous, primaryColor) {
    previous.push(primaryColor.color);
    return previous;
}, []);

console.log(colors);