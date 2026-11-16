const API_KEY = "pub_d15911226e0d455b8b0c2cee32bafde6";
const url = "https://newsdata.io/api/1/latest?apikey=" + API_KEY + "&language=en";

const container = document.getElementById("news");

fetch(url)
  .then(response => response.json())
  .then(data => {
    container.innerHTML = "";
    data.results.forEach(article => {
      container.innerHTML += `
        <div class="news-card">
          <img src="${article.image_url || ''}" alt="news image">
          <h3>${article.title}</h3>
          <p>${article.description || ''}</p>
          <a href="${article.link}" target="_blank">Read more</a>
        </div>`;
    });
  })
  .catch(error => {
    console.error("Error:", error);
    container.innerHTML = "<p>Failed to load news.</p>";
  });