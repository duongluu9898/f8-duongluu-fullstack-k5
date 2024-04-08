// F8.component("counter-app", {
//   data: () => ({
//     count: 0,
//     title: "Counter App",
//   }),

//   template: `
//   <h1>{{title}}</h1>
//   <h2>Đã đếm {{count}} lần</h2>
//   <button v-on:click="count--">-</button>
//   <button v-on:click="count++">+</button>
//   <button v-on: dbclick="title='Hello F8'">Change Title</button>
//   `,
// });

// F8.component("header-component", {
//   template: `<h1>HEADER</h1>`,
// });

customElements.define(
  "counter-app",
  class Counter extends HTMLElement {
    connectedCallback() {
      var templateHtml = `
        <h1>Counter App</h1>
        <h2>Đã đếm <span>0</span> lần</h2>
        <button v-on:click="count--" class="decrement">-</button>
        <button v-on:click="count++" class="increment">+</button>
        <button v-on: dbclick="title='Hello F8'">Change Title</button>
        `;

        

      var templateEl = document.createElement("template");
      templateEl.innerHTML = templateHtml;

      var shadow = this.attachShadow({ mode: "open" });

      var templateNode = templateEl.content.cloneNode(true);

      //   shadow.append(templateNode);

      document.body.append(templateNode);

      var count = document.querySelector("h2 span");
      console.log(count.innerText);

      var decrementBtn = document.querySelector(".decrement");
      var incrementBtn = document.querySelector(".increment");

      decrementBtn.addEventListener("click", function () {
        count.innerText--;
      });

      incrementBtn.addEventListener("click", function () {
        count.innerText++;
      });
      //   var decrementCount = templateNode.children[2].attributes["v-on:click"];
      //   console.log(decrementCount);
    }
  }
);
