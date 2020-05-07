const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

fetch(url)
.then(result => {
  console.log(result);
  return result.json();
})
.then(data => {
  console.log(data);
})
.catch(err => {
  console.log(err);
});

// fetch(url, {
//     method: "POST",
//     body: JSON.stringify({
//       name: "blue",
//       login: "bluecat"
//     })
// })
// .then(result => result.json())
// .then(data => {
//   console.log(data);
// })
// .catch(err => {
//     console.log(err);
// });
