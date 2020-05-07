const button = document.querySelector("#btn");
const image = document.querySelector("#photo");

button.addEventListener("click", () => {
  const XHR = new XMLHttpRequest();
  XHR.onreadystatechange = () => {
    if(XHR.readyState === 4 && XHR.status === 200) {
      image.src =JSON.parse(XHR.responseText).message;
    }
  }
  XHR.open("GET","https://dog.ceo/api/breeds/image/random");
  XHR.send()
});
