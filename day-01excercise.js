// 1. Area of Rectangle
let l = 10;
let w = 5;
const RecArea = l * w;
console.log(RecArea);

// 2. Perimeter of Rectangle
let length = 50;
let width = 100;
const perimeter = 2 * (width + length);
console.log(perimeter);

// 3. Diameter, Circumference and Area of a Circle
let radius = 4;
const diameter = 2 * radius;
const pi = 3.14;
const circumference = 2 * pi * radius;
const area = pi * radius ** 2;
console.log(diameter);
console.log(circumference);
console.log(area);

// 4. Find Angle in Triangles if 2 Angles are given
let x = 90;
let y = 60;
let angle = 180 - (x + y);
console.log(angle);

// 5. Differences between dates and days
let tanggal1 = new Date("2020-01-06");
let tanggal2 = new Date("2022-11-29");
let datedifference = Math.abs(tanggal2 - tanggal1);
let daydifference = Math.round(datedifference / (1000 * 3600 * 24));
console.log(datedifference);
console.log(
  `The difference between date 1 and date 2 are ${daydifference} days.`
);

// 6. Convert Days to Years, Months and Days
let day = 7200;
let year = Math.floor(day / 365);
let month = Math.floor((day % 365) / 30);
let date = Math.floor((day % 365) % 30);
console.log(year + " years" + ", " + month + " months and " + date + " days.");