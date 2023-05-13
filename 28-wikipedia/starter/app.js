const url =
  'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';

const formDOM = document.querySelector('.form');
const inputDOM = document.querySelector('.form-input');
const resultDOM = document.querySelector('.results');

const fetchPages = async (searchInput) => {
  resultDOM.innerHTML = '<div class="loading"</div>';
  try {
    const data = await fetch(url + searchInput);
    const raw = await data.json();
    const results = raw.query.search;
    if (results.length < 1) {
      resultDOM.innerHTML = '<div class="error">No results</div>';
      return;
    }
    renderResults(results);
  } catch (error) {
    resultDOM.innerHTML = '<div class="error">There was an error ...</div>';
  }
};

formDOM.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = inputDOM.value;
  console.log(value);
  if (!value) {
    resultDOM.innerHTML =
      '<div class="error">Please enter valid search term</div>';
    return;
  }
  fetchPages(value);
});

const renderResults = (list) => {
  const results = list
    .map((element) => {
      return `<a href="http://en.wikipedia.org/?curid=${element.pageid}">
      <h4>${element.title}</h4>
      <p>${element.snippet}</p>
    </a>`;
    })
    .join('');
  const renderedResults = `<div class="articles">${results}</div>`;
  resultDOM.innerHTML = renderedResults;
};
