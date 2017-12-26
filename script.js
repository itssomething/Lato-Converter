function getText(){
    var output = document.getElementById('input').value;
    document.getElementById('output').innerHTML = output;
}
function copyFunction() {
  var copyText = document.getElementById("output");
  copyText.select();
  document.execCommand("Copy");
  alert("Copied the text");
}
