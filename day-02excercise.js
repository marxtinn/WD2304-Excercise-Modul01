// 1. Convert Celcius to Fahrenheit. (Formula: °F = (9/5 x °C) + 32)
// let cel = 90;
// const fah =  9 / 5 * cel + 32;
// console.log(cel + " C = " +  fah + " F");

// let Fahrenheit = 194;
// const Celcius =  5 / 9 * (Fahrenheit - 32);
// console.log(Fahrenheit + " F = " +  Celcius + " C");

// 2. Check whether a number is odd or even.
// let number = 26;
// if (number % 2 == 0) {
//     console.log(number + " is an even" + " number");
//     } else {
//     console.log(number + " is an odd" + " number");
//     }

// 3. Check whether the number is a prime number or not.
// let bil = 4;
// let bool = true;
// for (let i = 2; i < bil; i++)   {
//     if (bil % i == 0)   {
//         bool = false;
//         break;
//     }
// }
// console.log(bool ? `${bil} is a prime number` : `${bil} is not a prime number`)

// 4. Find the sum of the numbers 1 to N, e.g.: 3 -> 1+2+3=6.  
// let num = 5;
// let sum = 0;
// let message = " ";
// for (let i = 1; i <= num; i++)  {
//     sum += i;
//     if (i != 1) {
//         message += '-> '
//     }
//     message += `${i} `;
//     console.log(i);
// }
// console.log(`sum of the numbers are ${message} = ${sum}`)

// 5. Find factorial of a number. (ex. !5 = 1*2*3*4*5 = 120)
// let num = 6;
// let fac = 1;
// for (i = 1; i <= num; i++ ) {
//     fac *= i;
// }
// console.log(`The factorial of ${num} is ${fac}.`)

// 6. Print the first N fibonacci numbers
const num = 8;
let a= 0, b = 1, next;
for (i = 1 ; i <= num ; i++) {
    console.log(a);
    next = a + b;
    a=b;
    b=next;
}