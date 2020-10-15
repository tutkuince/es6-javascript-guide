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