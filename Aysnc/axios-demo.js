const axios = require('axios');

/* axios.get('https://api.github.com/users/mapbox')
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  }); */

axios.all([
  axios.get('https://api.github.com/users/mapbox'),
  axios.get('https://api.github.com/users/phantomjs')
])
.then((response) => {
  console.log(response[0].data.created_at);
  console.log(response[1].data.created_at);
})

/* fetch('https://api.github.com/users/phantomjs')
.then((response) => {
  console.log(typeof response);
}); */

/* axios.all([
  axios.get('https://api.github.com/users/mapbox'),
  axios.get('https://api.github.com/users/phantomjs')
])
.then(axios.spread((user1, user2) => {
  console.log('user1:' + user1.data.created_at);
  console.log('user2:' + user2.data.created_at);
})) */

// declare a response interceptor
axios.interceptors.response.use((response) => {
  // do something with the response data
  console.log('Response was received');

  return response.data.created_at;
}, error => {
  // handle the response error
  return Promise.reject(error);
});

// sent a GET request
axios.get('https://api.github.com/users/mapbox')
  .then(response => {
    console.log(response);
  });