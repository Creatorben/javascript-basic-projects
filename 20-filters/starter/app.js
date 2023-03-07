let filteredProducts = [...products];

const productsContainer = document.querySelectorAll('.products-container')[1];

displayProducts = () => {
  if (filteredProducts.length < 1) {
    return (productsContainer.innerHTML = `No results for this search...`);
  }
  productsContainer.innerHTML = filteredProducts
    .map((product) => {
      return `<article class="product">
  <img src="${product.image}" alt="${product.title}" class="product-img img">
  <footer>
    <h5 class="product-name">${product.title}</h5>
    <span class="product-price">${product.price}</span>
  </footer>
</article>`;
    })
    .join('');
};

displayProducts();

const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('keyup', () => {
  const inputValue = searchInput.value;
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  displayProducts();
});

const companies = document.querySelector('.companies');

displayButtons = () => {
  // const uniqueCompanies = new Set();
  // const allCompanies = products.map((entry) =>
  //   uniqueCompanies.add(entry.company)
  // );
  const uniqueCompanies = [
    'all',
    ...new Set(products.map((product) => product.company)),
  ];
  console.log(uniqueCompanies);
  companies.innerHTML = uniqueCompanies
    .map((company) => {
      return `<button class="company-btn" data-id="${company}">${company}</button>`;
    })
    .join('');
};

displayButtons();

companies.addEventListener('click', (e) => {
  const el = e.target;
  if (el.classList.contains('company-btn')) {
    if (el.dataset.id === 'all') {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter((product) => {
        return product.company === el.dataset.id;
      });
    }
    searchInput.value = '';
    displayProducts();
  }
});
