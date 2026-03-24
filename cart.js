function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(productId) {
  const cart = getCart();
  cart.push(productId);
  saveCart(cart);
  updateCartCount();
}

function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
  updateCartCount();
}

function updateCartCount() {
  const el = document.querySelector(".cart-count");
  if (!el) return;
  el.textContent = getCart().length;
}

updateCartCount();
