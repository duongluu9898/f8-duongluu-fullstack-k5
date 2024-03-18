var tableProducts = document.querySelector(".table-products");
var tableCart = document.querySelector(".table-cart");
var groupBtn = document.querySelector(".group-btn");
var message = document.querySelector(".message");
var tBody = tableCart.querySelector(".tbody");
var total = tableCart.querySelector(".total");
// console.log(tableProducts);
// console.log(tableCart);
// console.log(tBody);
// console.log(total);
// console.log(groupBtn);
// console.log(message);
tableProducts.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) {
    var trTag = e.target.closest("tr");
    var stt = trTag.children[0].innerHTML;
    var name = trTag.children[1].innerHTML;
    var price = trTag.children[2].innerHTML;
    var qnt = e.target.previousElementSibling.value;
    tableCart.style.display = "block";
    groupBtn.style.display = "block";
    message.style.display = "none";

    // console.log(stt);
    // console.log(trTag);
    // console.log(name);
    // console.log(price);
    // console.log(qnt);
    var cartAdd = document.createElement("tr");
    cartAdd.innerHTML = `
        <td>${stt}</td>
        <td>${name}</td>
        <td>${price}</td>
        <td>
        <input type="number" class="qnt" value="${qnt}">
        </td>
        <td class="priceItem">${price * qnt}</td>
        <td>
        <button class="del">Xóa</button>
        </td>
        `;

    tBody.insertBefore(cartAdd, total);

    var totalPrice = 0;
    var totalQnt = 0;
    var products = tBody.querySelectorAll("tr");
    // console.log(products);
    products.forEach(function (product) {
      var qnt = product.querySelector(".qnt").value;
      var priceItem = product.querySelector(".priceItem").innerText;
      //   console.log(qnt);
      //   console.log(priceItem);
      totalQnt += +qnt;
      totalPrice += +priceItem;
      //   console.log(totalQnt);
      //   console.log(totalPrice);
      var getTotalQnt = tBody.querySelector(".totalQnt");
      var getTotalPrice = tBody.querySelector(".totalPrice");
      //   console.log(getTotalQnt);
      //   console.log(getTotalPrice);
      getTotalQnt.innerHTML = totalQnt;
      getTotalPrice.innerHTML = totalPrice;
    });
  }
});

tableCart.addEventListener("click", function (e) {
  if (e.target.classList.contains("del")) {
    var trTag = e.target.closest("tr");
    trTag.remove();
  }
});

var updateBtn = document.querySelector(".update-btn");
var delBtn = document.querySelector(".del-btn");
console.log(updateBtn);
console.log(delBtn);
delBtn.addEventListener("click", function (e) {
  tableCart.remove();
  groupBtn.remove();
  message.style.display = "block";
});
