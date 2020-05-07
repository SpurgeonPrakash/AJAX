const url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

const para = document.querySelector("#quote");

//<------------------------------------XHR-------------------------------------->
const xhrButton = document.querySelector("#xhr");

xhrButton.addEventListener("click",() => {
  const XHR = new XMLHttpRequest();
  XHR.open("GET", url);
  XHR.onreadystatechange = () => {
    if(XHR.readyState === 4 && XHR.status === 200) {
      const [quote] = JSON.parse(XHR.responseText)
      para.innerHTML = quote;
    }
  }
  XHR.send();
});

//<------------------------------------fetch-------------------------------------->
const fetchButton = document.querySelector("#fetch");

const handleFetchErrors = (result) => {
  if(!result.ok) {
    throw new Error(404);
  }
  return result;
}

const parseJson = result => result.json();

const updateFetchContent = (res) => {
  const [quote] = res;
  para.innerHTML = quote;
}

const displayErrors = (err) => {
  console.log("Something Went Wrong! "+err);
}

fetchButton.addEventListener("click", () => {
  fetch(url)
  .then(handleFetchErrors)
  .then(parseJson)
  .then(updateFetchContent)
  .catch(displayErrors);
});

//<------------------------------------jQuery-------------------------------------->
const updateJQueryContent = (data) => {
  const [quote] = data;
  $("#quote").text(quote);
}

const handleJQueryErrors = () => {
  console.log("Something Went Wrong!");
}

$("#jquery").click(() => {
  $.getJSON(url)
  .done(updateJQueryContent)
  .fail(handleJQueryErrors)
});

//<------------------------------------Axios-------------------------------------->
const axiosButton = document.querySelector("#axios");

const updateAxiosContent = (data) => {
  const [quote] = data.data;
  para.innerHTML = quote;
}

const handleAxiosErrors = (err) => {
  if (err.response) {
    console.log("Problem With Response ", err.response.status);
  } else if (err.request) {
    console.log("Problem With Request!");
  } else {
    console.log('Error', err.message);
  }
}

axiosButton.addEventListener("click", () => {
  axios.get(url)
  .then(updateAxiosContent)
  .catch(handleAxiosErrors);
});
