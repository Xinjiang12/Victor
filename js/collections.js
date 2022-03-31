for (let i = 0; i < db.length; i++) {
  let div = document.createElement('a');
  div.innerHTML = `
    <div class="img-container">
      <img src="images/${db[i].id}.png" alt="${db[i].name}">
    </div>
    <div class="content">
      <span class="name">${db[i].name}</span>
      <span class="price">${db[i].price} kr</span>
    </div>
  `;
  div.classList.add('product');
  div.href = "/product.html?id=" + db[i].id;
  document.querySelector('.container').appendChild(div);
}
