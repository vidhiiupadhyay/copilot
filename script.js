document.addEventListener("DOMContentLoaded", function() {
    fetch("http://localhost:8080/newsfeed")
        .then(response => response.json())
        .then(data => {
            const newsfeedContainer = document.getElementById('newsfeed');
            data.forEach(item => {
                const newsItem = document.createElement('div');
                newsItem.classList.add('news-item');
                newsItem.textContent = item;
                newsfeedContainer.appendChild(newsItem);
            });
        })
        .catch(error => console.error('Error fetching the newsfeed:', error));
});
