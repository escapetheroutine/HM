//Yra paduodama į funkciją masyvas ir sveikas skaičius. Pagal sveiką skaičių turi būti skaidomi masyvo nariai į 
//atskirus masyvus ir tų masyvų narių skaičių turi sudaryti tiek kiek yra užrašyta sveikuoju skaičiumi:
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk (array, size) {
    let galutine = [];
    let tarpine = [];

    for (i = 0; i < array.length; i++) {
        let element = array[i];
        tarpine.push(element);

        if (tarpine.length == size) {
            galutine.push(tarpine);
            tarpine = [];
        }
    }

    if (tarpine.length !== 0) {
        galutine.push(tarpine);
    }

    return galutine;
}

console.log(chunk([1, 2, 3, 4], 2));
console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(chunk([1, 2, 3, 4, 5], 4));
console.log(chunk([1, 2, 3, 4, 5], 10));
