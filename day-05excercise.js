// Excercise 2

// 1. Write a function to get the lowest, highest and average value in the array (with and without sort function).

let data = [12, 23, 10, 5, 14, 35];

// with sort
function lowHighAvg(arr) {
  arr = arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr);
  newarr = [];
  low = arr[0];
  high = arr[0];
  sum = arr[0];
  avg = sum / arr.length;
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > high) {
      high = arr[i];
    }
    if (arr[i] < low) {
      low = arr[i];
    }
    sum = sum + arr[i];
    avg = sum / arr.length;
  }
  newarr.push([low[i], high[i], avg[i]]);
  return [low, high, avg];
}
console.log(lowHighAvg(data));

// without sort
function withoutSort(data) {
  min = Math.min(...data);
  max = Math.max(...data);
  average = sum / data.length;
  return [min, max, average];
}
console.log(withoutSort(data));

// 2. Write a function that takes an array of words and returns a string by concatenating the words in
// the array, separated by commas and - the last word - by an 'and'.

let words = ["circle", "square", "triangle", "hexagon"];
const addAnd = (words) => {
  output = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i] == words[words.length - 1]) {
      output += `and ${words[i]}`;
    } else if (words[i] == words[words.length - 2]) {
      output += `${words[i]} `;
    } else {
      output += `${words[i]}, `;
    }
  }
  return output;
};
console.log(addAnd(words));

// Efficient Method
let generate = (arr) => {
  return (
    arr.slice(0, arr.length - 1).join(", ") + ` and ${arr[arr.length - 1]}.`
  );
};
console.log(
  generate(["football", "basketball", "tennis ball", "ping-pong ball"])
);

// 4. Write a function to calculate each element in the same position from two arrays of integer.
// Assume both arrays are of the same length.
// Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

let arrA = [4, 5, 6, 7];
let arrB = [6, 5, 4];

const indexAddition = (arr1, arr2) => {
  ans = [];
  let length = arrA.length;
  if (arrA.length > arrB.length) {
    length = arrA.length - 1;
  } else {
    length = arrB.length - 1;
  }
  for (let i = 0; i < length; i++) {
    ans[i] = arrA[i] + arrB[i];

    if (arrA.length > arrB.length) {
      ans[length] = arrA[arrA.length - 1];
    } else {
      ans[length] = arrB[arrB.length - 1];
    }
  }
  return ans;
};
console.log(indexAddition());

// Ternary and more efficient method

let sumTwoArray = (arr1, arr2) => {
  let newArr = [];
  let length = arr1.length > arr2.length ? arr1.length : arr2.length;
  for (let i = 0; i < length; i++) {
    let numb1 = arr1[i] ? arr1[i] : 0;
    let numb2 = arr2[i] ? arr2[i] : 0;
    newArr.push(numb1 + numb2);
  }
  return newArr;
};
console.log(sumTwoArray([2, 3, 4], [7, 8, 9, 10]));

// 5. Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
let existing = [4, 22, 65, 73, 99, 3];
let x = [55, 35, 27, 1];

function clonePush(val, b) {
  for (i = 0; i < b.length; i++) {
    if (val === b[i]) {
      return "Value already exists.";
    }
  }
  b.push(val);
  return b;
}
console.log(clonePush(22, existing));
console.log(clonePush(22, x));
