console.log("Hola mundo");
const productContainer = document.querySelector("#productContainer");

class Producto {
  constructor(id, name, price, image, items) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.items = 1;
  }
}

const product1 = new Producto(
  1,
  "Exotic Burger",
  40000,
  "/assets/img/products/Exotic-burger.jpg"
);

const product2 = new Producto(
  2,
  "Piggy Ultra",
  28000,
  "/assets/img/products/Piggy-Ultra.jpg"
);

const product3 = new Producto(
  3,
  "Burger Pigasus",
  37000,
  "/assets/img/products/ultimate-burger-pigasus.jpg"
);
// Array de productor para vender
let productList = [product1, product2, product3];
// Array de carrito
let shoppingCart = [];

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
  const producto = productList.find((producto) => product.id === id);
  const productoEnCarrito = shoppingCart.find((producto) => product.id === id);
  if (productoEnCarrito) {
    productoEnCarrito.items++;
  } else {
    shoppingCart.push(producto);
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
