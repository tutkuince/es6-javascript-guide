let images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
];
let areas = [];

images.forEach(function (image) {
   areas.push(image.height * image.width);
});

areas.forEach(function (area) {
    console.log(area);
})