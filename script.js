document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchQuery = document.getElementById('search').value;
    window.open('https://www.google.com/search?q=' + encodeURIComponent(searchQuery), '_blank');
});
        