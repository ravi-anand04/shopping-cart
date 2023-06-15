productslist.map((product) => {
  var proHtml = `
    <div class="product">
      <img src="${product.image}" alt="${product.title}" class="product-image">
      <h3 class="product-title">${product.title}</h3>
      <p class="product-price">$${product.price}</p>
      <p class="product-description">${product.description}</p>
    </div>    
  `;
  productsContainer.innerHTML += proHtml;
});

productslist.map((e) => {
  var proHtml = `<div class="product">
    <img class='pimage' width="250px" height="350px" src=" ${e.image} "
    alt="">
    <p class='ptitle'>${e.title}</p>
    <div class="priceandaddtocart">
    <p class="pprice">${e.price} DH</p>
    <button class="addtocart" productid=${e.id}>add to cart icon</button>
    </div>
    </div>`;
  productsContainer.innerHTML += proHtml;
});

const carticon = document.querySelector(".carticon");

carticon.addEventListener("click", () => {
  document.getElementsByClassName("cartui").classList.add("cartopened");
});
