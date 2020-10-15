let computers = [
    {name: 'Apple', ram: 16},
    {name: 'Compaq', ram: 4},
    {name: 'Asus', ram: 32},
];

let allComputersCanRunPrograms = true;
let onlySomeComputersCanRunProgram = false;

for (let i = 0; i < computers.length; i++) {

    let computer = computers[i];

    if (computer.ram < 16) {
        allComputersCanRunPrograms = false;
    } else {
        onlySomeComputersCanRunProgram = true;
    }
}

console.log('allComputersCanRunPrograms:', allComputersCanRunPrograms);
console.log('onlySomeComputersCanRunProgram:',onlySomeComputersCanRunProgram);

// and operation
let everyComputers = computers.every(function (computer) {
    return computer.ram > 16;
});

// or operation
let someComputers = computers.some(function (computer) {
   return  computer.ram > 16;
});

console.log('everyComputers:', everyComputers);
console.log('someComputers:', someComputers);