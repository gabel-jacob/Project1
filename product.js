const products = {

  item1: {
    name: "6mm Acrylic Case for Gameboy/GBA/Virtual Boy Box",
    price: 25,
    image: "pictures/DRWBYtv.jpeg",
    description: "Protective acrylic display case."
  },

  item2: {
    name: "6mm Acrylic Case for 3DS/N3DS/DS Lite System",
    price: 20,
    image: "pictures/FqSCOvL.jpeg",
    description: "Retro handheld protection."
  },

  item3: {
    name: "3mm Acrylic Case for Pokemon 20th Anniversary Box",
    price: 10,
    image: "pictures/QLnZAoA.jpeg",
    description: "Collector display case."
  },

  item4: {
    name: "PETG N64 Cartridge Protectors with Etching",
    price: 1,
    image: "pictures/VNhvvaN.jpeg",
    description: "Custom cartridge protection."
  },

  item5: {
    name: "3mm Acrylic Case for 3DS XL/N3DS XL Box",
    price: 20,
    image: "pictures/p995ibU.jpeg",
    description: "XL box protector."
  },

  item6: {
    name: "3mm Acrylic Case for Gamecube/WII/WIIU/XBOX/PS3/DVD",
    price: 15,
    image: "pictures/zBYUKh5.jpeg",
    description: "Universal media protector."
  }
};const products = {
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
function loadShop() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  Object.entries(products).forEach(([id, product]) => {

    const card = document.createElement("a");
    card.href = `item.html?id=${id}`;
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
    `;

    grid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", loadShop);
};
}

document.addEventListener("DOMContentLoaded", loadProduct);
