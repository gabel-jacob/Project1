const products = {
  item1: {
    name: "Item 1",
    price: 25,
    image: "pictures/DRWBYtv.jpeg",
    description: "Minimal design piece."
  },

  item2: {
    name: "Item 2",
    price: 10,
    image: "pictures/FqSCOvL.jpeg",
    description: "Retro inspired product."
  },
  item3: {
    name: "Item 3",
    price: 25,
    image: "pictures/QLnZAoA.jpeg",
    description: "Minimal design piece."
  },

  item4: {
    name: "Item 4",
    price: 20,
    image: "pictures/VNhvvaN.jpeg",
    description: "Retro inspired product."
  },
  item5: {
    name: "Item 5",
    price: 25,
    image: "pictures/p995ibU.jpeg",
    description: "Minimal design piece."
  },

  item6: {
    name: "Item 6",
    price: 20,
    image: "pictures/zBYUKh5.jpeg",
    description: "Retro inspired product."
  }

};
function loadProduct() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const product = products[id];
  if (!product) return;

  document.getElementById("product-img").src = product.image;
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-price").textContent =
    "$" + product.price;
  document.getElementById("product-desc").textContent =
    product.description;
}

document.addEventListener("DOMContentLoaded", loadProduct);
