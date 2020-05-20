var a = 0;
var b = 0;
//debugger;
document.getElementById('btn').addEventListener("click", Hello)
//var c = a + b;
function Hello (c) {
a = document.getElementById('myA').value;
b = document.getElementById('myB').value;
//debugger;
//var c = a + b;
var c = parseInt(a,10) + parseInt(b,10);
if(!!c) alert(c);
}