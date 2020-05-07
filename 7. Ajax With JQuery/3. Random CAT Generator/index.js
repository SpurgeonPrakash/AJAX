const url = "http://aws.random.cat/meow";

$("#catGenerator").click(()=>{
  $.getJSON(url)
  .done(data => {
    $("#cat").attr("src",data.file);
  })
  .fail(()=>{
    alert("Failed getJSON Call!!");
  });
});
