const url = "https://opentdb.com/api.php?amount=1";

axios.get(url)
.then((res)=> {
  console.log(res);
  console.log(res.data);
})
.catch((err) => {
  console.log("Error! "+ err);
});
