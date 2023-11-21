var date=new Date();
var hours = date.getHours();
var minutes =date.getMinutes();
var seconds =date.getSeconds();

document.getElementById("digitalclock").innerHTML= hours + ": " + minutes + ":" + seconds ;