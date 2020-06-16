// --- Anagramos užduotis
// Funkcijai paduodami du stringai ir tikrinama ar jie yra anagramos vienas kitam.
// Pirmas stringas yra anagrama kitam, jeigu sutampa naudojamos raidės
// ir simbolių skaičius betkuria tvarka. 
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams (word1, word2) {
    let normalWord1 = word1.split("").sort().join("").toLowerCase().replace(/[^\w]/g, "");
    let normalWord2 = word2.split("").sort().join("").toLowerCase().replace(/[^\w]/g, "");

    if (normalWord1 === normalWord2) {
        return true;
    }else {
        return false;
    }
}


  console.log(anagrams('rail safety', 'fairy tales'));
  console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
  console.log(anagrams('Hi there', 'Bye there'));





