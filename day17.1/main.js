// Bài 1: Hoán vị 2 số:
var a = 0;
var b = 1;

a = a + b; //a = 0 + 1
b = a - b; //b = 1 - 1
a = a - b; //a = 1 - 0
console.log(a, b);

// Bài 2: Thực hiện phép toán

var result = 10 + 20 + 5 ** 10 / 2;
console.log(result);

// Bài 3: Tìm số lớn nhất

var a = 10;
var b = 12;
var c = 14;

var maxNumber = a;
if (maxNumber < b) {
  maxNumber = b;
}

if (maxNumber < c) {
  maxNumber = c;
}

console.log(`Số lớn nhất là ${maxNumber}`);

// Bài 4: Kiểm tra số cùng dấu
var a = -10;
var b = 10;
var result;

if (a * b !== 0) {
  if (a * b > 0) {
    result = "Hai số cùng dấu";
  } else {
    result = "Hai số khác dấu";
  }
}
console.log(result);

// Bài 5: Sắp xếp 3 số tăng dần

var a = 10;
var b = 6;
var c = 8;

var arrange;

if (a > b) {
  arrange = a;
  a = b;
  b = arrange;
}
if (a > c) {
  arrange = a;
  a = c;
  c = arrange;
}

if (b > c) {
  arrange = b;
  b = c;
  c = arrange;
}

console.log(a, b, c);
