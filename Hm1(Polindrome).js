///Polindrome//
// --- palindromo užduotis
// Duodamas stringas, funkcija turi gražinti true jeigu stringą apvertus jis išlieka toks pat
// arba false jeigu nesutampa.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function polindrome (str) {
    let reversedStr = str.split("").reverse().join("");

    if (reversedStr === str) {
        console.log(str + " " + "is polindrome");
        return true;
    } else {
        console.log(str + " " + "is not polindrome");
        return false;
    }
}

polindrome("abba");
polindrome("abcdefg");
polindrome("madam");

