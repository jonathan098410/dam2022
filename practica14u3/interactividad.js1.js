function limpiarReguistro() {
document.getElementById("miForm").reset();
}

var NuMa = function(n1,n2,n3){
var nu1  = parsefloat(document.getElementById("nu1").value);
var nu2  = parsefloat(document.getElementById("nu2").value);
var nu3  = parsefloat(document.getElementById("nu3").value);
if (nu1<nu2) {
	return "el numero "+nu1+" es el menor";
}
else{
	if (nu2<nu3) {
	return "el numero "+nu2+" es el mayor";
}
else{
	return "el numero "+nu3" es el menor";
}
}
}
var pulga = function(n1){
var cm = parsefloat(document.getElementById("cm").value);
pg = cm * 0.393701;
     return cm+" centimetros son "+pg+" en pulgadas";
}
var yar = function(n1){
var mm  = parsefloat(document.getElementById("mm").value);
yd = mm*1.09361;
     return mm+" metros son "+yd+" en yardas";
}