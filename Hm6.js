// --- Directions
// parašyti programą kuri išspausdintu konsolėje skaičius
// nuo 1 iki n. Kas trečias būtų spausdinamas
// “fizz” kas penktas “buzz”. jei sutampa kad kas trečias ir kas penktas yra
// kartu (pvz. 15 žingsnis) spausdintų “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz (number) {
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        } else if (i % 3 === 0) {
           console.log("fizz");
        } else if (i % 5 === 0)  {
            console.log("buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(30);