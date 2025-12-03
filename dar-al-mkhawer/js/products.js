const products = [
  {
    name: "مخور ملكي مطرّز",
    price: "280 AED",
    tag: "الأكثر مبيعًا",
    img: "assets/w1.jpg"
  },
  {
    name: "مخور سيدة الخليج",
    price: "300 AED",
    tag: "فخم جدًا",
    img: "assets/w2.jpg"
  },
  {
    name: "مخور مناسبات حريري",
    price: "350 AED",
    tag: "موديل جديد",
    img: "assets/w3.jpg"
  }
];

const grid = document.getElementById("productsGrid");

products.forEach(p => {
  grid.innerHTML += `
    <article class="product-card">
      <div class="prod-img">
        <img src="${p.img}">
        <span class="prod-tag">${p.tag}</span>
      </div>

      <h3 class="prod-name">${p.name}</h3>
      <div class="prod-foot">
        <span class="prod-price">${p.price}</span>
        <button class="magic-btn" onclick="openWhatsApp()">اطلب الآن</button>
      </div>
    </article>
  `;
});