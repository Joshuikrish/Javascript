const fs = require('fs');
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
    fs.writeFileSync('data.json', JSON.stringify(data));
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });


  {
    fetch('https://no-such-server.blabla') // rejects
  .then(response => response.json())
  .catch(err => console.log(err)) // TypeError: failed to fetch (the text may vary)

  }