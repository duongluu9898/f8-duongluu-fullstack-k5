// BÀI 01
//console
var array = [4, 13, 3, 5, 7, 24, 25, 30];
var maxNumber = array[0];
var minNumber = array[0];
var indexMaxNumber = 0;
var indexMinNumber = 0;

for (var i = 0; i < array.length; i++) {
  if (maxNumber <= array[i]) {
    maxNumber = array[i];
    indexMaxNumber = i;
  }

  if (minNumber >= array[i]) {
    minNumber = array[i];
    indexMinNumber = i;
  }
}
// console.log(array);
// console.log(maxNumber);
// console.log(indexMaxNumber);
// console.log(minNumber);
// console.log(indexMinNumber);

//screen
document.write(`<h2>Bài 1:</h2>`);
document.write(`<p>Cho trước mảng số nguyên: ${array}</p>`);
document.write(`<p>Số lớn nhất là: ${maxNumber}</p>`);
document.write(`<p>Vị trí số lớn nhất trong mảng là: ${indexMaxNumber}</p>`);
document.write(`<p>Số nhỏ nhất là: ${minNumber}</p>`);
document.write(`<p>Vị trí số nhỏ nhất trong mảng là: ${indexMinNumber}</p>`);

// BÀI 02
//console
var array = [0, 1, 4, 5, 8, 9, 11, 13, 24, 30, 33];
var isPrime;
var countPrime;
var totalPrime;
var average;

for (var i = 0; i < array.length; i++) {
  if (array[i] % 1 !== 0 || array[i] <= 1) {
    // console.log("khong cos so nguye to");
  }
}

//screen
document.write(`<h2>Bài 2:</h2>`);
document.write(`<p>Cho trước mảng số nguyên: ${array}</p>`);

// BÀI 03
var array = [1, 2, 3, 5, 6, 1, 6];
var newArray = [];
var indexNumber = 0;
for (number of array) {
  indexNumber += 1;
  if (array.indexOf(number) === indexNumber - 1) {
    newArray[newArray.length] = number;
  }
  console.log(`vị trí các số có thể trùng ${array.indexOf(number)}`);
  console.log(`vị trí các số trong mảng ban đầu ${indexNumber - 1}`);
  console.log(number);

  //   console.log(array.indexOf(number));
}

console.log(array);
console.log(`Biến sau khi lọc là ${newArray}`);
//screen
document.write(`<h2>Bài tập 3:</h2>`);
document.write(`<p>Mảng ban đầu: ${array}</p>`);
document.write(`<p>Mảng sau khi lọc trùng là ${newArray}</p>`);
// BÀI 04
