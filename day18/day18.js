// Bài 1: Tính tiền taxi

var price; // giá trên từng km
var distance = 200; // quãng đường đi
var discount; // giảm giá khi đi hơn 120km

if (distance <= 0) {
  price = 0;
  console.log("Vui lòng nhập lại");
} else if (distance <= 1 && distance > 0) {
  price = 15000;
} else if (distance > 5) {
  price = 11000;
} else {
  price = 13500;
}

if (distance <= 120) {
  discount = 0;
} else {
  discount = 10;
}

var priceTaxi = distance * price - (distance * price * discount) / 100; // số tiền taxi phải trả

console.log(`Quãng đường đi: ${distance}`);
console.log(`Giá từng km: ${price}`);
console.log(`Giá tổng quãng đường đi: ${priceTaxi} `);

document.write(`<h2>Bài 1: Tính tiền taxi: </h2>`);
document.write(`<p>Giá tổng quãng đường đi: ${priceTaxi}</p>`);

// Bài 2: Tính tiền điện
var input = 500; // số điện tiêu thụ hàng tháng
var price; // giá bán điện

if (input <= 0) {
  price = 0;
  console.log("Vui lòng nhập lại");
} else if (0 < input && input < 51) {
  price = 1.678;
} else if (51 <= input && input < 101) {
  price = 1.734;
} else if (101 <= input && input < 201) {
  price = 2.014;
} else if (201 <= input && input < 301) {
  price = 2.536;
} else if (301 <= input && input < 401) {
  price = 2.834;
} else {
  price = 2.927;
}

var output = input * price; // số tiền tiêu thụ hàng tháng
console.log(input);
console.log(price);
console.log(output);

document.write(`<h2>Bài 2: Tính tiền điện: </h2>`);
document.write(`<p>Số điện tiêu thụ: ${input}</p>`);
document.write(`<p>Số tiền phải trả: ${output}</p>`);

// Bài 3: Tính giá trị biểu thức
var n = 5;
var sum = 0;
if (n > 0 && n % 1 === 0) {
  for (i = 0; i <= n; i++) {
    sum += i * (i + 1);
  }
} else {
  console.log("Vui lòng nhập số nguyên");
}
console.log(`Tổng là: ${sum}`);

// screen
document.write(`<h2>Bài 3: Tính giá trị biểu thức: </h2>`);
document.write(`<p>Tổng là: ${sum} </p>`);

// Bài 4: Viết hàm kiểm tra số nguyên tố
var check = true;
var n = 5;

if (n % 1 !== 0 || n <= 1) {
  check = false;
} else {
  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      check = false;
      break;
    }
  }
}

console.log(check);

document.write(`<h2>Bài 4: Viết hàm kiểm tra số nguyên tố: </h2>`);
document.write(`<p>Số ${n} là số nguyên tố đúng không?</p>`);
document.write(`<p>Đáp án: ${check}</p>`);

// Bài 5: Vẽ tam giác số
// screen
document.write(`<h2>Bài 5: Vẽ tam giác số: </h2>`);
//console
var n = 5;
var number = 0;
for (var a = 1; a <= n; a++) {
  for (var b = 1; b <= a; b++) {
    number++;
    document.write(` ${number}`);
  }
  document.write(`<br/>`);
}

console.log(number);

// Bài 6: Vẽ bàn cờ vua

//screen
document.write(`<h2>Bài 6: Vẽ bàn cờ vua:</h2>`);

//console
var black;
var white;
document.write(`<section>`);

for (var row = 1; row <= 8; row++) {
  for (var col = 1; col <= 4; col++) {
    if (row % 2 === 0) {
      black = document.write(`<div class="black"></div>`);
      white = document.write(`<div class="white"></div>`);
    } else {
      white = document.write(`<div class="white"></div>`);
      black = document.write(`<div class="black"></div>`);
    }
  }
  document.write(`<br/>`);
}

document.write(`</section>`);

// Bài 7: Vẽ bảng cửu chương
//screen
document.write(`<h2>Bài 7: Vẽ bảng cửu chương:</h2>`);

//console
for (var x = 1; x <= 10; x++) {
  for (var y = 1; y <= 10; y++) {
    var result = x * y;
    document.write(`${x} x ${y} = ${result}; `);
  }
  document.write(`</br>`);
}

// Bài 8: Tính giá trị biểu thức không dùng vòng lặp
// screen
document.write(`<h2>Bài 8: Tính giá trị biểu thức không dùng vòng lặp:</h2>`);

//console
let total = 0;
function totalNumber(n) {
  total = total + 1 / n;
  n++;
  return;
}
totalNumber(2);
console.log(total);
