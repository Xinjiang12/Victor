
let id = (new URL(document.location)).searchParams.get('id');


for (let i = 0; i < db.length; i++) {
  if (db[i].id == id) {
    let div = document.createElement('div');
    div.innerHTML = `
      <div class="img-container">
        <img src="images/${db[i].id}.png" alt="${db[i].name}">
      </div>
      <div class="content">
        <span class="name">${db[i].name}</span>
        <span class="price">${db[i].price} kr</span>
        <button class="addToCart" onclick="addToCart('${db[i].id}')">ADD TO CART</button>
      </div>
    `;
    div.classList.add('product');
    document.querySelector('.container').appendChild(div);
  }
}

function addToCart(id) {
  if (!localStorage.cart) {
    localStorage.setItem("cart", "[]");
  }
  
  let cart = JSON.parse(localStorage.cart);
  
  for (let i = 0; i < cart.length; i++) {
    if (cart[i] == id) return;
  }

  cart.push(id);
  localStorage.setItem('cart', JSON.stringify(cart));
}
