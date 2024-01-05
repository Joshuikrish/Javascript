const axios = require("axios");

let promise = new Promise((resolve, reject) => {
    axios.get(`https://jsonplaceholder.typicode.com/todos/-1`)
        .then(response => {
            resolve(response.data);
        })
        .catch(error => {
            reject(new Error(error));
        });
});

promise
    .then(result => console.log(result))
    .catch(error => console.log(error));