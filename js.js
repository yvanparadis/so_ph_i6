
    const url = 'https://jsonplaceholder.typicode.com/posts';

    // Fetch data from the website
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const list = document.getElementById('data-list');
        // Display the first 5 results
        data.slice(0, 5).forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `Title: ${item.title}`;
          list.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error.message);
      });
