function SENSOR_VALUE(){
  cosnole.log("HELLO");
  document.getElementById("FRONT").innerHTML="FORWARD";
  var request=new XMLHttpRequest();
      request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
// Typical action to be performed when the document is ready:
        if(this.responseText!=null)
        {var mydata=this.responseText;
        var sensorvalue=mydata.split(",");
        document.getElementById("FRONT").innerHTML ="GAP:"+sensorvalue[0];
        document.getElementById("BACK").innerHTML ="GAP:"+sensorvalue[1];
        document.getElementById("LEFT").innerHTML ="GAP:"+sensorvalue[2];
        document.getElementById("RIGHT").innerHTML ="GAP:"+sensorvalue[3];
      }
      }
      };
      request.open("GET", "sensorval", true);
  request.send();
  setTimeout("SENSOR_VALUE()",100);
}
      
function FORWARD(){
document.getElementById("FRONT").innerHTML="FORWARD";
request.onreadystatechange = function() {
request.open("GET", "forward", true);
request.send();
}
}

function BACKWARD(){
document.getElementById("BACK").innerHTML="BACKWARD";
request.onreadystatechange = function() {
request.open("GET", "backward", true);
request.send();
}
}
function LEFT(){
document.getElementById("LEFT").innerHTML="LEFTWARD";
request.onreadystatechange = function() {
request.open("GET", "left", true);
request.send();
}
}
function RIGHT(){
document.getElementById("RIGHT").innerHTML="RIGHTWARD";
request.onreadystatechange = function() {
request.open("GET", "right", true);
request.send();
}
}