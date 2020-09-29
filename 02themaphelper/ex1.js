let images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
];

let heights = images.map(function (height) {
   return height.height;
});

console.log(heights);