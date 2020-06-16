//Parašyti algoritmą, kuris kiekvieno žodžio pirmąją raidę atvaizduotų didžiąją:
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize (words) {
    let result = [];
    let splitWords = words.split(" ");

    splitWords.forEach(function(word){
         result.push(word[0].toUpperCase() + word.substring(1).toLowerCase());
    });

    return result.join(" ");
}

// let result = [];
// function sujungti (word) {
//     result.push(word[0].toUpperCase() + word.substring(1).toLowerCase());
// }

// function capitalize (words) {
//     result = [];
//     let splitWords = words.split(" "); 

//     splitWords.forEach(sujungti);

//     return result.join(" ");
// }
console.log(capitalize('a short sentence'));
console.log(capitalize('a lazy fox'));
console.log(capitalize('look, it is working!'));

