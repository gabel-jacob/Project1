function renderCart() {
  const cart = getCart();
  const container = document.querySelector(".cart-items");

  container.innerHTML = "";

  cart.forEach((productId, index) => {
    const product = products[productId];

    container.innerHTML += `
      <div class="cart-item">
        <img src="${product.image}" class="cart-img">
        <div>
          <h3>${product.name}</h3>
          <p>$${product.price}</p>
        </div>
        <button onclick="removeFromCart(${index})">
          Remove
        </button>
      </div>
    `;
  });
}

document.addEventListener("DOMContentLoaded", renderCart);
