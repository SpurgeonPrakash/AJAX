const url = "https://api.github.com/users/colt";

$("#getMethod").click(()=>{
  $.get(url)
  .done(data => {
    console.log(data);
  })
  .fail(()=>{
    alert("Failed GET Call!!");
  });
});

$("#postMethod").click(()=>{
  const data = {
    name: "Prakash",
    location:"India"
  };
  $.post("www.catsarecoolandsoaredogs.com",data)
  .done((data)=>{
    console.log(data);
  })
  .fail(()=>{
    alert("Failed POST Call!!");
  });
});


$("#getJSONMethod").click(()=>{
  $.getJSON(url)
  .done(data => {
    console.log(data);
  })
  .fail(()=>{
    alert("Failed getJSON Call!!");
  });
});
