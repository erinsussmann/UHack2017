
function sendData(data){
$.ajax({
  url: "https://secretsanta-186421.appspot.com/pairup",
  type: "POST",
  data: JSON.stringify(data),
  contentType: "application/json"
}).done(function(result) {
console.log(result);
});
}