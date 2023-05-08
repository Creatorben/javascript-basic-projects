const product = document.querySelector('.product');

let params = new URLSearchParams(document.location.search);
const id = params.get('id');
const url = `https://course-api.com/javascript-store-single-product`;

console.log(url);

const productsDOM = document.querySelector('.product');

const fetchProducts = async () => {
  productsDOM.innerHTML = `<h4 class="product-loading">Loading...</h4>`;
  try {
    const resp = await fetch(`${url}?id=${id}`);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(`Do hätts en Fehler: ${error}`);
    productsDOM.innerHTML = '<p class="error">There was an error</p>';
  }
};

const displayProducts = (product) => {
  console.log(product);
  const {
    image,
    name: title,
    company,
    price,
    colors,
    description,
  } = product.fields;
  document.title = title.toUpperCase();

  // Colors
  const colorsArray = colors
    .map((color) => {
      return `<span class="product-color" style="background: ${color}"></span>`;
    })
    .join('');

  productsDOM.innerHTML = `<div class="product-wrapper">
  <img src="${image[0].url}" alt="${title}" class="img">
  <div class="product-info">
      <h3>${title}</h3>
      <h5>${company}</h5>
      <span>${price / 100}</span>
      <div class="colors">
          ${colorsArray}
      </div>
      <p>${description}</p>
      <button class="btn">Zum Warächorb</button>
  </div>
 
  </div>`;
};

const start = async () => {
  const productList = await fetchProducts();
  displayProducts(productList);
};

start();
