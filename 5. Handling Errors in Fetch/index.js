const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  const url = "https://api.github.com/users/coltjhfj";
  fetch(url)
  .then( result => {
    if(!result.ok) {
      throw Error(404);
    }
    return result.json()
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log("There is an "+err);
  });
});
