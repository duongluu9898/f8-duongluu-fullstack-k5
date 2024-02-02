/*
- khai báo biến

var tenbien

+ tên biến chỉ được phép: chữ hoa, thường, dấu $, dấu gạch dưới, số
+ tên biến không được bắt đầu bằng số
+ đặt tên biến theo quy tắc camelCase
+ khi khai báo biến và không gán giá trị cho nó thì giá trị mặc định là underfine

- Hiển thị nội dung lên giao diện:
+ DOM
+ document.write()


*/

var username;
var customerEmail;
var user, name, password;
var user = "duong";
var username = `
<h1>My name is ${user}</h1>
<h2>fullstack1</h2>
<h2>fullstack2</h2>
<h2>fullstack3</h2>
`;

document.write(username);
console.log(username);
