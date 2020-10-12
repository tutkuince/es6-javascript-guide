// The most common find operation is to an object that has a given property.
// Rather than writing out a full function everytime,
// it would be great if we have a shorthand syntax to find an object like this:
// findWhere(ladders, {height: '20 feet'});
// The object {ladders: '20 feet'} should be used as the search criteria -
// we would want to find a ladder whose 'height' property was '20 feet';

let ladders = [
    {id: 1, height: 20},
    {id: 3, height: 25}
];

function findWhere(array, criteria) {
    return array.find(function(element) {
        return element[Object.keys(criteria)[0]] === criteria[Object.keys(criteria)[0]];
    });
}

let ladder = findWhere(ladders, {height: 25});
