let allProducts = products;

const productsContainer = document.querySelectorAll('.products-container')[1];

const productsData = allProducts
  .map((product) => {
    console.log(product);
    const { company, image, price, title } = product;

    return `<article class="product">
  <img src="${product.image}" alt="${product.title}" class="product-img img">
  <footer>
    <h5 class="product-name">${product.title}</h5>
    <span class="product-price">${product.price}</span>
  </footer>
</article>`;
  })
  .join('');

console.log(productsContainer);

productsContainer.innerHTML = productsData;
