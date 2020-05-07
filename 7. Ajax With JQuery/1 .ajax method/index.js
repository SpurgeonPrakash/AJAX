const url = "https://baconipsum.com/api/?type=meat-and-filler";

const addPara = (data) => {
  const [baconData, ...bacon] = data;
  $("#para").text(baconData);
}

$("#btn").click(() => {
  $.ajax({
    method:"GET",
    url: url,
    dataType: "json"
  })
  .done(addPara)
  .fail(() => {
    alert("OH NO! FAILED!");
  });
});
