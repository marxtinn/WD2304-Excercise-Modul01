// 1. Check if an object is equal to another

let car1 = {
  brand: "Mercedes",
  model: "S Class",
  company: "Volkswagen",
};
let car2 = {
  brand: "Porsche",
  model: "911 GT3 RS",
  company: "Porsche",
  //   price: "314k USD",
};
const compare = function () {
  const keys_car1 = Object.keys(car1).sort().toString();
  const keys_car2 = Object.keys(car2).sort().toString();
  if (keys_car1 != keys_car2) {
    return false;
  } else {
    return true;
  }
};
console.log(compare(car1, car2));

// 2. Create a function to get the intersection of 2 objects

let obj1 = {
  a: 1,
  c: 3,
  d: 4,
};

let obj2 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

const intersection = function (ob1, ob2) {
  var newObj = {};

  for (let i in ob1) {
    console.log(ob1);

    if (ob1[i] == ob2[i]) {
      newObj[i] = ob1[i];
    }
    console.log(newObj);
  }
  return newObj;
};
console.log(intersection(obj1, obj2));

// Clean Code
const findDupli = (objA, objB) => {
  let intr = {};
  for (const key in objA) {
    if (objA[key] === objB[key]) {
      console.log(intr);
      // Method 1
      // intr = { ...intr, [key]: objB[key] };
      // Method 2
      intr[key] = objA[key];
    }
  }
  return intr;
};
console.log(intersection({ a: 1, c: 3, d: 4 }, { a: 1, b: 2, c: 3, d: 4 }));

// 3. Create a function to merge two array of student data and remove duplicate data

var arr1 = [
  {
    name: "Student 1",
    email: "student1@mail.com",
  },
  { name: "Student 2", email: "student2@mail.com" },
];
var arr2 = [
  {
    name: "Student 2",
    email: "student2@mail.com",
  },
  { name: "Student 3", email: "student3@mail.com" },
];
function mergeRemove(arr1, arr2) {
  // menggabungkan 2 array of object
  let arr3 = [...arr1, ...arr2];
  console.log(arr3);
  // menggunakan method filter untuk menghilangkan value duplikat
  return arr3.filter(
    (v, i, a) => a.findIndex((v2) => v2.name === v.name) === i // v = value, i = index, a = array, v2 = value dari array ke 2, menggunakan findIndex
  );
}
console.log(mergeRemove(arr1, arr2));

// 4. Create a function that can accept input as an array of objects
// and switch all values into properties and properties into values

const human = [
  { name: "David", age: 20 },
  { name: "Bob", age: 35 },
];

console.log(human);
const swap = function (array) {
  let output = [];

  for (let i = 0; i < human.length; i++) {
    let temp = {};
    for (var keys in array[i]) {
      keys;
      console.log(array[i][keys]);
      let newProp = array[i][keys];
      temp[newProp] = keys;
      console.log(temp);
    }
    output.push(temp);
  }
  return output;
};
console.log(swap(human));

// 5. Create a function to find a factorial number using recursion
/* 
Recursion adalah fungsi yang memanggil diri sendiri terus menerus.
Untuk menghentikan pemanggilan fungsi, harus diberikan kondisi.
*/

function getFactorial(a) {
  // jika number input = 0:
  if (a == 0) {
    return 1;
  } else {
    return a * getFactorial(a - 1);
  }
}
console.log(getFactorial(4));
