// day-03excercise.js

//EXERCISE 3

// 1. Display multipication table of a given integer, ex: 9 x 1, 9 x 2, ..., 9 x 10.
// let number = 5;
// for (let i = 1; i <= 10; i++ ) {
//     const result = i * number;
//     console.log(`${number} * ${i} = ${result}`)
// }

// 2. Check whether a string is a palindrome or not
// let word = 'headshot';
// let reverseString = word.split("").reverse().join("");
// if (word === reverseString){
//     console.log('the word ' + word + ' is a palindrome');
// } else {
//     console.log('the word ' + word + ' is not a palindrome');
// };

// 3. Convert centimeter to kilometer.
// let cm = 1000;
// const km = cm / 100000;
// console.log(cm + " cm = " + km + " km");

// 4. Format number as currency (IDR).
// const rupiah = new Intl.NumberFormat('id-IN', {
//         style : "currency",
//         currency : "IDR"
// });
// console.log(rupiah.format(25000));

// 5. Remove the first occurrence of a given “search string” from a string.
// let sentence = "kuda";
// const remove = sentence.replace('u', '');
// console.log(remove);

// 6. Captilize the first letter of each word in a string.
// let sentence = "lock & lock my favourite color thermo bottle.";
// let word = sentence.split(" ");
// console.log(word);
// console.log(word.length);
//     for (var i = 0; i < word.length; i++)  {
//         console.log(word[i],word[i][0],i)
//         word [i] = word [i][0].toUpperCase() + word[i].slice(1);
//     }
// console.log(word.join(" "));

// 7. Reverse a string.
// let word = "valorant";
// let reverseString = word.split("").reverse().join("");
// console.log(word + ' = ' + reverseString);

// other method

// let word = "valorant";
// let temp = "";
// for ( let i = 0; i < word.length; i++) {
//     console.log(word[word.length - 1 - i]);
//     temp += word[word.length - 1 - i];
// }
// console.log(word);

//result yang ditampilkan:
// 0, 56789,1,56789

// contoh lain
let result = "";
for (let i = 0; i < 5; i++) {
  for (let a = 0; a < 5; a++) {
    // if (a == 3) {
    //     result += "ini index ke 2"
    //     result += ", "
    //     break;
    // }

    if ((i = a)) {
      result += `index i dan a adalah ${i}`;
      result += ", ";
    }
  }
  result += i + ", ";
}
console.log(result);
