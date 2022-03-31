let cart = JSON.parse(localStorage.cart);

for (let i = 0; i < cart.length; i++) {
  for (let j = 0; j < db.length; j++) {
    if (db[j].id == cart[i]) {
      const item = db[j];
      let div = document.createElement('div');
      div.innerHTML = `
        <div class="content">
          <img src="/images/${item.id}.png" alt="${item.name}" class="image">
          <div class="text-content">
            <span class="name">${item.name}</span>
            <span class="price">${item.price} kr</span>
          </div>
        </div>
        <button class="remove" data="${item.id}">Remove</button>
      `;
      div.classList.add('product');
      document.querySelector('.container').appendChild(div);
    }
  }
}

let removeButtons = document.querySelectorAll('.remove');

for (let i = 0; i < removeButtons.length; i++) {
  const removeButton = removeButtons[i];
  removeButton.addEventListener("click", (event) => {
    let id = event.target.attributes.data.value;
    cart.splice(cart.indexOf(id), 1);
    localStorage.setItem("cart", JSON.stringify(cart));

    removeButton.closest(".product").remove();
  })
}

