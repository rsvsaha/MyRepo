var ctr=0;
function SENSOR_READ(){

document.getElementById("SENSOR1").value=ctr;
document.getElementById("SENSOR2").value=ctr;
document.getElementById("SENSOR3").value=ctr;
document.getElementById("SENSOR4").value=ctr;
setTimeout(SENSOR_READ,1000);
ctr=ctr+1;
}
