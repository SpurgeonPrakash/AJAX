const button = document.querySelector("#btn");
const span = document.querySelector("#price");
const currency = "USD";
const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

button.addEventListener("click", () => {
  const XHR = new XMLHttpRequest();

  XHR.onreadystatechange = () => {
    if(XHR.readyState === 4 && XHR.status === 200) {
      const data = JSON.parse(XHR.responseText);
      span.innerHTML = data.bpi[currency].rate + " "+ currency;
    }
  }

  XHR.open("GET",url);
  XHR.send();
});
