console.log("Hola mundo");
const productContainer = document.querySelector("#productContainer");

let productList = [];
let shoppingCart = [];
productList.push({
  id: 1,
  name: "Exotic Burger",
  price: 40000,
  image: "/assets/img/products/Exotic-burger.jpg",
  items: 1,
});

productList.push({
  id: 2,
  name: "Piggy Ultra",
  price: 28000,
  image: "/assets/img/products/Piggy-Ultra.jpg",
  items: 1,
});
productList.push({
  id: 3,
  name: "Burger Pigasus",
  price: 37000,
  image: "/assets/img/products/ultimate-burger-pigasus.jpg",
  items: 1,
});

function renderProducts(arr) {
  for (product of productList) {
    const productCart = document.createElement("div");
    productCart.classList.add(
      "w-full",
      "max-w-sm",
      "bg-white",
      "rounded-lg",
      "shadow-md",
      "dark:bg-gray-800",
      "dark:border-gray-700"
    );

    productCart.innerHTML = `
    <div
          class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img
              class="p-8 rounded-t-lg"
              src="${product.image}"
              alt="product image"
              class="w-12"
              id=""
            />
          </a>
          <p>${product.id}</p>
          <div class="px-2 pb-2">
            <a href="#">
              <h5
                class="text-lg font-semibold tracking-tight text-gray-900 dark:text-white"
              >
                ${product.name}
              </h5>
            </a>

            <div class="flex items-center justify-between">
              <span class="text-3xl font-bold text-gray-900 dark:text-white"
                >$${product.price}</span
              >
              <button
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                id="btnComprar${product.id}"
                >Comprar
              </button>
            </div>
          </div>
        </div>
    `;
    productContainer.appendChild(productCart);
    const boton = document.getElementById(`btnComprar${product.id}`);

    boton.addEventListener("click", () => {
      addToShoppingCar(product.id);
    });
  }
}
renderProducts(productList);

// Agregar carrito
const addToShoppingCar = (id) => {
  console.log(product.id);
  const productInCar = shoppingCart.find((product) => product.id === id);
  if (productInCar) {
    productInCar.items++;
  } else {
    const producto = productList.find((product) => product.id === id);
    console.log(product.id);
    shoppingCart.push(product);
  }
};
// / Mostrar el carrito de compras

const contenedorCarrito = document.getElementById("contenedorCarrito");
const showCar = document.getElementById("showCar");

showCar.addEventListener("click", () => {
  mostrarCarrito();
});

const mostrarCarrito = () => {
  contenedorCarrito.innerHTML = "";
  shoppingCart.forEach((producto) => {
    const card = document.createElement("div");
    card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
    card.innerHTML = `
                <div class ='card'>
                    <img src='${product.image}' class='card-img-top imgProductos'>
                    <div class=''card-body>
                        <h5>$${product.name}</h5>
                        <p>${product.price}</p>
                        <p>${product.items}</p>
                        <button id='eliminar' class="btn colorBoton"> Eliminar producto </button>
                    </div>
                </div>
        `;
    contenedorCarrito.appendChild(card);
  });
};
