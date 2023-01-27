const cartIcon = document.querySelector("#cartIcon");
const cartBar = document.querySelector("#cartBar");
const closeCart = document.querySelector("#closeCart");

const cartProducts = document.querySelector("#cartProducts");

cartIcon.addEventListener("click", function () {
  if (cartBar.style.right === "0%") {
    cartBar.style.right = "-100%";
  } else {
    cartBar.style.right = "0%";
  }
});
closeCart.addEventListener("click", function () {
  cartBar.style.right = "-100%";
});

const product = [
  {
    id: 0,
    image: "/src/products/test.JPG",
    title: "Brown Jacket",
    price: 25,
  },
  {
    id: 1,
    image: "/src/products/product-2.webp",
    title: "Maroon Jacket",
    price: 20,
  },
  {
    id: 2,
    image: "/src/products/product-3.webp",
    title: "Olive Jacket",
    price: 20,
  },
  {
    id: 3,
    image: "/src/products/product-4.webp",
    title: "Navi-Blue Jacket",
    price: 20,
  },
  {
    id: 4,
    image: "/src/products/product-5.webp",
    title: "White Shirt",
    price: 15,
  },
  {
    id: 5,
    image: "/src/products/product-6.webp",
    title: "Black Bomber",
    price: 22,
  },
  {
    id: 6,
    image: "/src/products/product-7.webp",
    title: "Navi-blue Hoodie",
    price: 18,
  },
  {
    id: 7,
    image: "/src/products/product-8.webp",
    title: "Black Pant",
    price: 15,
  },
];

const lists = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
let i = 0;
document.getElementById("products-grid").innerHTML = lists
  .map((item) => {
    var { image, title, price } = item;
    return `      <div class="">
        <img
          src=${image}
          class="h-100 shadow-md rounded-md hover:scale-105 duration-500"
        />
        <h1 class="font-semibold mt-4 cursor-default">${title}</h1>
        <!--  -->
        <div class="flex justify-between">
          <span class="font-semibold cursor-default">$${price}</span>
          <button id="cartBtn" onclick = "addtocart(${i++})">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              ></path>
            </svg>
          </button>
        </div>
      </div>`;
  })
  .join("");
// const cartBtn = document.querySelector("#cartBtn");
// cartBtn.addEventListener("click", function () {
//   console.log("clicked");
// });
var cart = [];
function addtocart(a) {
  cart.push({ ...product[a] });
  document.getElementById("empty").innerText = "";
  displayCart();
  productCounter();
}
function displayCart() {
  let sum = 0;
  let j = 0;
  if (cart.length == 0) {
    cartProducts.innerHTML = `<h1 class="text-center mt-4">Your Cart is Empty.</h1>`;
    document.getElementById("priceTag").innerText = "$" + 0;
  } else {
    cartProducts.innerHTML = cart
      .map((item) => {
        var { image, title, price } = item;
        sum = sum + price;
        return `
      <div id="product" class="grid grid-cols-4 items-center gap-1  mt-8">
      <img
        class="object-contain shadow-md rounded-sm"
        src=${image}
        alt=""
        srcset=""
      />

      <div class="col-span-2 pl-5">
        <p class="uppercase">${title}</p>
        <p class="font-semibold">$${price}</p>
        <span>Qty:</span>
        <span class="w-10 border-solid text-center">1</span>
      
      </div>
      <!-- trash -->

      <button class="pl-10 text-red-500" onclick = "removefromcart(${j++})">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 hover:scale-105 duration-300"
          id="trash"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
    </div>
    `;
      })

      .join("");

    document.getElementById("priceTag").innerText = "$" + sum;
  }
}
function removefromcart(a) {
  cart.splice(a, 1);
  displayCart();
  productCounter();
}
function productCounter() {
  document.getElementById("cartNumber").innerText = cart.length;
}
document.getElementById("buyBtn").addEventListener("click", function () {
  if (cart.length == 0) {
    alert("⚠️⚠️Your Cart is Empty⚠️⚠️");
  } else {
    alert("🎉🎉Your Order is Placed🎉🎉");
  }
});
