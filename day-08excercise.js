// Excercise 1

class Employee {
  // deklarasi class 'Employee' sebagai class induk untuk karyawan full-time dan part-time
  constructor(jam) {
    // constructor adalah metode untuk membuat dan menginisialisasi objek dalam sebuah class
    // parameter untuk class employee adalah jam
    this.jamPerHari = jam;
    // deklarasi 'jamPerHari' sebagai property dalam class 'Employee'
  }
}

class FulltimeEmployee extends Employee {
  // deklarasi class 'FulltimeEmployee' sebagai class baru dengan inheritance dari class induk 'Employee'
  constructor(jam) {
    // menggunakan constructor turunan dari class 'Employee'
    super(jam);
    // memanggil constructor dari class induk ('Employee') untuk akses property class induk
    this.gajiPerJam = 100000;
    // deklarasi 'gajiPerJam' sebagai property dalam class 'FulltimeEmployee'
  }

  calculateSalary() {
    // method calculateSalary digunakan untuk menghitung gaji total per hari, termasuk lembur jika ada
    let jamLembur = this.jamPerHari - 6;
    // deklarasi 'jamLembur' adalah jam kerja per hari dikurangi 6
    let totalSalary = 0;
    // reassign gaji total : (gaji jam kerja normal x jam kerja normal) + (gaji jam kerja lembur x jam kerja lembur)
    if (jamLembur > 0) {
      // jika jam kerja lembur lebih dari 0,
      jamLembur = Math.abs(6 - this.jamPerHari);
      // reassign 'jamLembur' untuk menghitung jam lembur karyawan (cek requirement pada soal)
      // 'Math.abs' untuk mengubah value selisih jam lembur karyawan dengan jam kerja normal (6 jam sesuai soal)
      totalSalary = this.gajiPerJam * 6 + jamLembur * 75000;
      // reassign totalSalary
      // gaji total = gaji jam kerja normal (@100.000 per jam) + gaji jam lembur (@75.000 per jam)
    } else {
      totalSalary = this.gajiPerJam * this.jamPerHari;
    }
    return totalSalary;
    // mengembalikan nilai gaji total karyawan Fulltime
  }
  addWorkHour(jam) {
    this.jamPerHari = jam;
  }
}

class ParttimeEmployee extends Employee {
  // deklarasi class 'ParttimeEmployee' sebagai class baru dengan inheritance dari class induk 'Employee'
  constructor(jam) {
    // menggunakan constructor turunan dari class 'Employee'
    super(jam);
    // memanggil constructor dari class induk ('Employee') untuk akses property class induk
    this.gajiPerJam = 50000;
    // deklarasi 'gajiPerJam' sebagai property dalam class 'ParttimeEmployee'
  }

  calculateSalary() {
    // method calculateSalary digunakan untuk menghitung gaji total per hari, termasuk lembur jika ada
    let jamLembur = this.jamPerHari - 6;
    // deklarasi 'jamLembur' adalah jam kerja per hari dikurangi 6
    let totalSalary = 0;
    // reassign gaji total : (gaji jam kerja normal x jam kerja normal) + (gaji jam kerja lembur x jam kerja lembur)
    if (jamLembur > 0) {
      // jika jam kerja lembur lebih dari 0,
      jamLembur = Math.abs(6 - this.jamPerHari);
      // reassign 'jamLembur' untuk menghitung jam lembur karyawan (cek requirement pada soal)
      // 'Math.abs' untuk mengubah value selisih jam lembur karyawan dengan jam kerja normal (6 jam sesuai soal)
      totalSalary = this.gajiPerJam * 6 + jamLembur * 30000;
      // reassign totalSalary
      // gaji total = gaji jam kerja normal (@100.000 per jam) + gaji jam lembur (@75.000 per jam)
    } else {
      totalSalary = this.gajiPerJam * this.jamPerHari;
    }
    return totalSalary;
    // mengembalikan nilai gaji total karyawan Fulltime
  }
  addWorkHour(jam) {
    this.jamPerHari = jam;
  }
}

let fulltimeEmployee = new FulltimeEmployee();
fulltimeEmployee.addWorkHour(7);
// deklarasi object fulltimeEmployee dari class FulltimeEmployee
console.log(
  fulltimeEmployee.calculateSalary().toLocaleString("id", {
    style: "currency",
    currency: "IDR",
  })
);
// mencetak hasil dari calculateSalary dengan format rupiah

let parttimeEmployee = new ParttimeEmployee();
parttimeEmployee.addWorkHour(6);
// deklarasi object fulltimeEmployee dari class ParttimeEmployee
console.log(
  parttimeEmployee.calculateSalary().toLocaleString("id", {
    style: "currency",
    currency: "IDR",
  })
);
// mencetak hasil dari calculateSalary dengan format rupiah

// Excercise 2

class Player {
  // deklarasi class 'Player'
  constructor(nama) {
    // constructor adalah metode untuk membuat dan menginisialisasi objek dalam sebuah class
    // parameter untuk class 'Player' adalah nama
    this.nama = nama;
    // deklarasi 'nama' sebagai property dalam class 'Player'
    this.health = 100;
    // deklarasi 'health' sebagai property dalam class 'Player' dengan 100 sebagai value default (lihat soal)
    this.power = 10;
    // deklarasi 'power' sebagai property dalam class 'Player' dengan 10 sebagai value default (lihat soal)
  }
  hit(damage) {
    // method 'hit' digunakan untuk mengurangi health dari player/pemain
    this.health -= damage;
    // deklarasi pekerjaan yang dilakukan apabila method 'hit' dipanggil
  }
  useItem(item) {
    // method 'useItem' digunakan untuk memberi item kepada player/pemain
    this.health += item.health;
    // nilai health ditambah dengan nilai power dari item yang diberikan kepada player/pemain
    this.power += item.power;
    // nilai power ditambah dengan nilai power dari item yang diberikan kepada player/pemain
  }
  showStatus() {
    // method 'showStatus' digunakan untuk mencetak status player/pemain
    console.log(
      `${this.nama} (Health => ${this.health}, Power => ${this.power})`
    );
    // console.log sebagai perintah yang akan dijalankan ketika method 'showStatus' dipanggil
  }
  getNama() {
    // method 'getNama' digunakan untuk memanggil nama dari player/pemain
    return this.nama;
    // perintah dimana method getNama akan mengakses & mengembalikan nama dari player/pemain
  }
  getHealth() {
    // method 'getHealth' digunakan untuk memanggil health dari player/pemain
    return this.health;
    // perintah dimana method getHealth akan mengakses & mengembalikan health dari player/pemain
  }
  getPower() {
    // method 'getPower' digunakan untuk memanggil power dari player/pemain
    return this.power;
    // perintah dimana method getPower akan mengakses & mengembalikan power dari player/pemain
  }
}

class ShootingGame {
  // deklarasi class 'ShootingGame'
  constructor(player1, player2) {
    // constructor adalah metode untuk membuat dan menginisialisasi objek dalam sebuah class
    // parameter untuk class 'ShootingGame' adalah player1 & player2
    this.player1 = player1;
    // deklarasi 'player1' sebagai property dalam class 'ShootingGame'
    this.player2 = player2;
    // deklarasi 'player2' sebagai property dalam class 'ShootingGame'
  }
  getRandomItem() {
    // method 'getRandomItem' digunakan untuk memberikan item random kepada player, yaitu
    // health: 0 atau 10 dan power 0 atau 10)
    let health = 0;
    // deklarasi nilai health dalam bentuk number
    let power = 0;
    // deklarasi nilai power dalam bentuk number
    let x = Math.random();
    // deklarasi nilai x dengan angka random dari 0-1
    if (x >= 0.5) {
      health = 10;
    } else {
      power = 10;
    }
    // -> 50-50 chance untuk mendapatkan item random health 10 atau power 10
    return {
      health: health,
      power: power,
      // mengembalikan nilai health dan power sesuai nilai random x
    };
  }
  start() {
    // method 'start' digunakan untuk menjalankan Shooting Game
    while (this.player1.getHealth() >= 0 && this.player2.getHealth() >= 0) {
      // menggunakan while loop karena mengetahui kondisi batasan secara pasti
      this.player1.useItem(this.getRandomItem());
      this.player2.useItem(this.getRandomItem());
      // 'this.getRandomItem' digunakan sebagai parameter untuk menjalankan method 'useItem'
      // menjalankan method 'useItem' dengan value yang didapatkan dari method 'getRandomItem'
      this.player1.showStatus();
      // menjalankan method 'showStatus' untuk property 'this.player1'
      this.player2.showStatus();
      // menjalankan method 'showStatus' untuk property 'this.player2'
      this.player1.hit(this.player2.getPower());
      this.player2.hit(this.player1.getPower());
      // 'this.player2.getPower()' digunakan sebagai parameter untuk menjalankan method 'hit'
      // menjalankan method 'hit' dengan value yang didapatkan dari method 'this.player2.getPower()'
    }
    // while loop akan berjalan sampai health salah satu player = 0
    if (this.player1.getHealth() <= 0) {
      console.log(`${this.player2.getNama()} is the winner.`);
    } else {
      console.log(`${this.player1.getNama()} is the winner.`);
    }
    // Jika salah satu pemain kehabisan health, maka method 'start' akan mencetak pemenang dari game ini
  }
}

let game = new ShootingGame(new Player("XLR8"), new Player("TenZ"));
// deklarasi game, nama player1, nama player2
game.start();
// menjalankan game menggunakan method 'start()'

// console.log showStatus dan start diganti pakai return
