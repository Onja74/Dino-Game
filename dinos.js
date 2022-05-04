document.addEventListener ("DOMContentLoaded", function (){
const dinos= document.getElementById("dinos");
const obst=  document.getElementById("obst");

document.addEventListener("keydown", function(evt) {
    
if (evt.key == " "){
    dinos.classList.add("jumping");
}
setTimeout (function(){

    dinos.classList.remove("jumping")}, 1000);
 })

}) 
