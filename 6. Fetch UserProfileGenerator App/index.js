const url = "https://randomuser.me/api/";
const button = document.querySelector("#btn");
const image = document.querySelector("#avatar");
const fullname = document.querySelector("#fullname");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const city = document.querySelector("#city");

const setName = (name) => {
  const fName = name.first;
  const lName = name.last;
  const fullName = fName + " " + lName;
  return fullName;
}

const handleErrors = (result) => {
  if (!result.ok) {
    throw Error(404);
  }
  return result;
}

const parseJson = res => res.json();

const updateProfile = (data) => {
  const [result] = data.results;
  fullname.innerHTML = setName(result.name);
  image.src = result.picture.large;
  email.innerHTML = result.email;
  city.innerHTML = result.location.city;
  username.innerHTML = result.login.username;
}

const displayErrors = (err) => {
  console.log("There is an " + err);
}

button.addEventListener("click", () => {
  fetch(url)
    .then(handleErrors)
    .then(parseJson)
    .then(updateProfile)
    .catch(displayErrors);
});
