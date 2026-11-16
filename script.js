const API_KEY = '6c70fc776982644296fd492d764fb574';
const url = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&max=10&apikey=${API_KEY}`;

const container = document.getElementById('news');

fetch(url)
  .then(response => response.json())
  .then(data => {
    container.innerHTML = '';
    data.articles.forEach(article => {
      container.innerHTML += `
        <div class="news-card">
          <img src="${article.image}" alt="news image">
          <h3>${article.title}</h3>
          <p>${article.description}</p>
          <a href="${article.url}" target="_blank">Read more</a>
        </div>`;
    });
  })
  .catch(error => {
    console.error('Error:', error);
    container.innerHTML = '<p>Failed to load news.</p>';
  });