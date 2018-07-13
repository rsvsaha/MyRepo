function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=getdata;
  xhttp.open("GET", "demo_get.asp?t=" + Math.random(), true);
  xhttp.send();
}
function getdata() {
    if (this.readyState == 4 && this.status == 200) 
    {
      document.getElementById("demo").innerHTML = this.responseText;
    }
};
