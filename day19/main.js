//Bài 1: N số fibonaci
//screen
document.write(`<h2>Bài 1: N số fibonaci</h2>`);

//console log
var n1 = 0;
var n2 = 1;
var result = 0;

function showFibonaci(n) {
  if (n > 0) {
    console.log(result);
    result = n1 + n2;
    n1 = n2;
    n2 = result;
    showFibonaci(n - 1);
  }
}

console.log(showFibonaci(7));

//Bài 2: Đảo ngược số

function reverseNumber(s) {
  var o = "";
  for (var i = s.toString.length - 1; i >= 0; i--) {
    o += s[i];
    return o;
  }
}

console.log(reverseNumber(12345));
//Bài 3: Viết hàm chyển số thành chữ
