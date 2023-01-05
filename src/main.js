console.log("Hola mundo");
const productContainer = document.querySelector("#productContainer");
const btnCarList = document.querySelector("#btnCarList");
const containerCar = document.querySelector("#containerCar");

class Producto {
  constructor(id, name, price, image, items) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.items = items;
  }
}

const product1 = new Producto(
  1,
  "Exotic Burger",
  40000,
  "/assets/img/products/Exotic-burger.jpg",
  1
);

const product2 = new Producto(
  2,
  "Piggy Ultra",
  28000,
  "/assets/img/products/Piggy-Ultra.jpg",
  1
);

const product3 = new Producto(
  3,
  "Burger Pigasus",
  37000,
  "/assets/img/products/ultimate-burger-pigasus.jpg",
  1
);
// Array de productor para vender
let productList = [product1, product2, product3];
// Array de carrito
let shoppingCart = [];

function renderProducts() {
  productList.forEach((product) => {
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
                class="text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center0"
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
  });
}
renderProducts();

// Agregar carrito
const addToShoppingCar = (id) => {
  const product = productList.find((product) => product.id === id);
  const productoEnCarrito = shoppingCart.find((product) => product.id === id);
  if (productoEnCarrito) {
    productoEnCarrito.items++;
  } else {
    shoppingCart.push(product);
  }
  mostrarCarrito();
};
// / Mostrar el carrito de compras

const contenedorCarrito = document.getElementById("contenedorCarrito");
const showCar = document.getElementById("showCar");

showCar.addEventListener("click", () => {
  containerCar.classList.toggle("hidden");
  mostrarCarrito();
});

const mostrarCarrito = () => {
  contenedorCarrito.innerHTML = "";
  shoppingCart.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("flow-root");
    card.innerHTML = `
                <ul class="-my-6 divide-y divide-gray-200" role="list">
                <li class="flex py-6">
                      <div
                        class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                      >
                        <img
                          src=${product.image}
                          alt="Cangreburger."
                          class="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div class="ml-4 flex flex-1 flex-col">
                        <div>
                          <div
                            class="flex justify-between text-base font-medium text-gray-900"
                          >
                            <h3>
                              <p>${product.name}</p>
                            </h3>
                            <p class="ml-4">${product.price}</p>
                          </div>
                          <div
                            class="flex justify-between text-base font-medium text-gray-900"
                          >
                          <p class="ml-4">Cantidad: ${product.items}</p>
                          </div>
                        </div>
                        <div
                          class="flex flex-1 items-end justify-between text-sm"
                        >
                          <div class="flex">
                            <button
                              type="button"
                              class="font-medium text-red-600 hover:text-red-700"
                            id="btnRemove${product.id}">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                </ul>
        `;
    contenedorCarrito.appendChild(card);
    //Eliminar productos del carrito:
    const btnRemove = document.querySelector(`#btnRemove${product.id}`);
    btnRemove.addEventListener("click", () => {
      removeFromCar(product.id);
    });
  });
};

//Función que elimina el producto del carrito:

const removeFromCar = (id) => {
  const producto = shoppingCart.find((product) => product.id === id);
  const indice = shoppingCart.indexOf(producto);
  shoppingCart.splice(indice, 1);
  mostrarCarrito();
};
