console.log('products starter');

const url = 'https://course-api.com/javascript-store-products';

const productsDOM = document.querySelector('.products-center');

const fetchProducts = async () => {
  productsDOM.innerHTML = '<div class="loading"></div>';
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(`Do hätts en Fehler: ${error}`);
    productsDOM.innerHTML = '<p class="error">There was an error</p>';
  }
};

const displayProducts = (list) => {
  console.log(list);
  const products = list
    .map((product) => {
      const { id } = product;
      const { name: title, price } = product.fields;
      const { url: image } = product.fields.image[0];
      const formatPrice = price / 100;
      return `<a href="product.html?id=${id}" class="single-product">
    <img src="${image}" alt="${title}" class="single-product-img img">
    <footer>
      <h5 class="name">${title}</h5>
      <span class="price">CHF ${formatPrice}</span>
    </footer>
  </a>`;
    })
    .join('');
  productsDOM.innerHTML = `<div class="products-container">
  ${products}</div>`;
};

const start = async () => {
  const productList = await fetchProducts();
  displayProducts(productList);
};

start();
