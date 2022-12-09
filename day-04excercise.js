// 1. Create a function that can create a triangle pattern according to the height we provide like the
// following :
// 01
// 02 03
// 04 05 06
// 07 08 09 10
// Parameters : height → triangle height
const triangle = (height) => {                // triangle merupakan fungsi tetap setelah melalui const. height merupakan parameter dari fungsi triangle.
    let result = "";                          // result merupakan string kosong untuk menampung value variable dari fungsi triangle
    let temp = 0;                             // temp berguna untuk menyimpan nomor yang akan di print
    for (let i = 0; i < height; i++) {        // loop height hingga sekian kali (sesuai value height)
      for (let j = 0; j <= i; j++) {          // loop hingga j = loop j = 0 -> current height
        temp++;                               // menambah temp sebelum result 
        if (temp > 9) {                       // apabila result lebih besar dari 9, maka tidak akan ditambahkan "0" sebelum angka
          result += temp + " ";               // menambahkan spasi setelah angka
        } else {                              
          result += "0" + temp + " ";         // menambahkan "0" sebelum angka
        }
      }
      result += "\n";                         // menambahkan new line
    }
    return result;                            
  };
  console.log(triangle(4));
  
  // 2. Create a function that can loop the number of times according to the input we provide, and will
  // replace multiples of ú with "Fizz", multiples of ü with "Buzz", multiples of ú and ü with
  // "FizzBuzz".
  // Parameters : n → total looping
  function fizzBuzz(n) {                                              // definisikan fungsi fizzBuzz dengan variable n (n pada saat console log dapat diubah sesuka hati)
    let j = "";                                                       // j adalah empty string untuk menampung value yang dihasilkan setelah for loop (temp variable)
    for (let i = 0; i < n; ) {                                        // melakukan looping dari 0 -> n(input)
      j += (++i % 3 ? "" : "fizz") + (i % 5 ? "" : "buzz") || `${i}`; // menggunakan ternary operator dimana jika boolean bersifat true, value yang akan di output adalah
    }                                                                 // value di sisi kanan. dalam hal ini fizz/buzz. jika kedua boolean true maka akan ditampilkan fizzbuzz
    return j;                                                         // mengembalikan value j
  }
  
  console.log(fizzBuzz(16));
  
  // 3. Create a function to calculate Body Mass Index (BMI)
  // Formula : BMI = weight (kg) / (height (meter))²
  // Parameters : weight & height
  // Return values :
  // < 18.5 return “less weight”
  // 18.5 - 24.9 return “ideal”
  // 25.0 - 29.9 return “overweight”
  // 30.0 - 39.9 return “very overweight”
  // > 39.9 return “obesity”
  
  
  
  function calculateBMI(w,h) {                      // menentukan nama fungsi dan parameter fungsi
  let BMI = w / h ** 2;                             // definisikan rumus BMI yaitu w dibagi dengan h pangkat 2
  console.log(BMI);
    if (BMI > 39.9) {                               // menentukan kondisi dengan parameter tertentu dalam hal ini jika nilai dari BMI lebih besar dari 39.9, maka
      message = "obesity";                          // akan memberi output "obesity"
      console.log(message);                   
    } else if (BMI >= 30.0) {                       // apabila kriteria pada kondisi if tidak terpenuhi maka akan dilanjutkan dengan statement else if berikutnya
      message = "very overweight";                  // dst.
      console.log(message);                   
    } else if (BMI >= 25.0) {                  
      message = "overweight";                  
      console.log(message);
    } else if (BMI >= 18.5) {                  
      message = "ideal";                       
      console.log(message);
    } else if (BMI < 18.5) {                   
      message = "less weight";                 
      console.log(message);
    }
    return message;                                         // memanggil hasil dalam hal ini: message yang sudah sesuai dengan kriteria if/else-if statement.
  }
  let BMICalc = calculateBMI(90, 1.77);                     // definisikan fungsi calculateBMI sebagai BMICalc.
  console.log(`You are ${BMICalc}.`);
  // KOREKSI MASUKIN W & H SERTA RUMUS BMI KEDALAM RUMUS.
  
  // 4. Write a function to remove all odd numbers in an array and return a new array that contains
  // even numbers only
  
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; // definisikan array yang ingin dihilangkan bilangan ganjilnya.
  let remove = numbers.filter(function (num) {               // menentukan fungsi dengan built in method filter untuk menentukan bilangan ganjil dan bilangan genap
    return num % 2 === 0;                                    // jika value dapat dibagi dengan 2, maka bilangan tersebut akan dipanggil kembali dengan return
  });
  console.log(remove);
  
  // 5. Write a function to split a string and convert it into an array of words.
  // Example : “Hello World” → [“Hello”, “World”]
  
  const splitString =(str) => {                         // menggunakan arrow function
    let outputArr = [];                                 // menyiapkan array kosong untuk menampung string.
    let temp = "";                                      // menyiapkan variable untuk string (string kosong untuk diisi).
    for (var i = 0; i < str.length; i++) {              // melakukan looping untuk setiap index dari string yang diisi, mulai dari index ke-0. Loop nya bakal berjalan terus sampai akhir string.
      if (str[i] !== " ") {                             // jika karakter pada posisi index (i) adalah bukan spasi,
        temp += str[i];                                 // maka karakter dalam index i akan dimasukkan ke temp. temp itu adalah string kosong.
      } else {                                          // kalau karakter dalam posisi i adalah spasi, kita menggunakan built in method push untuk
        outputArr.push(temp);                           // menambahkan isi variable temp ke dalam array outputArr.
        temp = "";                                      // temp = "" akan mengubah gabungan index dalam string menjadi 1 index, cth: hallo ( index 1 = h, index 2 = a -> index 1 = hallo) 
      }
        if (i == str.length - 1)                        // jika i adalah huruf terakhir, maka akan di push dari temp ke outputArr. 
        outputArr.push(temp);
    }
    return outputArr;                                   // return output
  };
  const testString = "My head is spinning like crazy";  
  console.log(splitString(testString));