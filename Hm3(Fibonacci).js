// --- Fibonacci užduotis
// Išspausdinti n-tajį narį iš fibonacci serijos skaičių.
// Fibonacci skaičiai, tai skaičiai kurio narys yra ankstesnių dviejų narių suma.
// Sekos pavyzdys:
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// Example:
//   fib(4) === 3
//[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

// function fibonacci(num){
//     var a = 1, b = 0, temp;
  
//     while (num >= 0){
//       temp = a;
//       a = a + b;
//       b = temp;
//       num--;
//     }
  
//     return b;
//   }

//   function fib(n){
//     let arr = [0, 1];
//     for (let i = 2; i < n + 1; i++){
//       arr.push(arr[i - 2] + arr[i -1])
//     }
//    return arr[n]
//   }

  function fib(n) {
    if (n < 2){
      return n;
    }

    return fib(n - 1) + fib (n - 2);
  }
  console.log(fib(0));
  console.log(fib(1));
  console.log(fib(2));
  console.log(fib(3));
  console.log(fib(4));