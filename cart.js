/* -------------------------
   CART STORAGE HELPERS
------------------------- */

// get cart from localStorage
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// save cart
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}


/* -------------------------
   ADD TO CART
------------------------- */

function addToCart(product) {
  const cart = getCart();

  // check if item already exists
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  saveCart(cart);
  updateCartCount();
}


/* -------------------------
   CART COUNT (header icon)
------------------------- */

function updateCartCount() {
  const cart = getCart();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const counter = document.querySelector(".cart-count");
  if (counter) {
    counter.textContent = totalItems;
  }
}


/* -------------------------
   REMOVE ITEM
------------------------- */

function removeFromCart(id) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== id);
  saveCart(cart);
  updateCartCount();
}


/* -------------------------
   INIT ON PAGE LOAD
------------------------- */

document.addEventListener("DOMContentLoaded", updateCartCount);
