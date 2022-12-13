// Excercise 1
class Student {
  constructor(name, email, birth, score) {
    let date = new Date(birth);
    let dateNow = new Date();
    this.name = name;
    this.email = email;
    this.age = dateNow.getFullYear() - date.getFullYear();
    this.score = score;
  }
}

console.log(new Student("Edo", "edo@mail.com", "1997-04-25", 85));
let dbStudent = [
  new Student("Edo", "edo@mail.com", "1997-04-25", 85),
  new Student("Andrew", "andrw@mail.com", "1998-11-12", 85),
  new Student("Zafran", "zfrn@mail.com", "1992-02-01", 85),
  new Student("Budi", "bud@mail.com", "1996-11-11", 85),
];
console.log(dbStudent);
let calculateStudent = (arr) => {
  let scrTotal = 0,
    ageTotal = 0;
  let scores = [...arr.sort((a, b) => a.score - b.score)]; // Mengakses setiap data dalam array
  let ages = [...arr.sort((a, b) => a.age - b.age)];

  for (let i = 0; i < arr.length; i++) {
    scrTotal += arr[i].score;
    ageTotal += arr[i].age;
  }
  return {
    score: {
      highest: scores[scores.length - 1],
      lowest: scores[0],
      average: scrTotal / scores.length,
    },
    age: {
      highest: ages[arr.length - 1],
      lowest: ages[0],
      average: ageTotal / arr.length,
    },
  };
};
console.log(calculateStudent(dbStudent));

// Excercise 2
class Product {
  constructor(_name, _price) {
    this.name = _name;
    this.price = _price;
  }
}

let dbProduct = [new Product("Apel", 5000), new Product("Lemon", 10000)];

class Transaction {
  constructor() {
    this.cart = [];
  }

  addToCart = (product = "", qty = 1) => {
    this.cart.push({
      product: { ...product, qty },
      total: qty * product?.price,
    });
  };
  totalPayment = () => {
    let amount = 0;
    this.cart.forEach((val) => (amount += val.total));
    return amount;
  };

  checkout = () => {
    let print = "";
    this.cart.forEach((val, idx) => {
      print += `${idx + 1}. ${
        val.product.name
      }, ${val.product.price.toLocaleString("id", {
        style: "currency",
        currency: "IDR",
      })}, Qty: ${val.product.qty}, ${val.total.toLocaleString("id", {
        style: "currency",
        currency: "IDR",
      })}\n`;
    });
    print += `Total payment : ${this.totalPayment().toLocaleString("id", {
      style: "currency",
      currency: "IDR",
    })}`;

    this.cart = [];
    return print;
  };
}
let transaction = new Transaction();
console.log(dbProduct);
transaction.addToCart(dbProduct[0], 3);
transaction.addToCart(dbProduct[1], 1);
console.log(transaction.checkout());
