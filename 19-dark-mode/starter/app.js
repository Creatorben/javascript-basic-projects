const toggleBtn = document.querySelector('.btn');
const articlesContainer = document.querySelector('.articles');

toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme');
});

const articlesData = articles
  .map((article) => {
    const { title, date, length, snippet } = article;
    //   format date
    const formatDate = moment(date).format('MMMM Do, YYYY');

    return `<article class="post">
    <h2>${article.title}</h2>
    <div class="post-info">
      <span>${formatDate}</span>
      <span>${article.length} min read</span>
    </div>
    ${article.snippet}
  </article>`;
  })
  .join('');

console.log(articlesData);

articlesContainer.innerHTML = articlesData;
