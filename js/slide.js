var wolio=document.getElementById("wolio");
var comot=document.getElementById("comot");
var gat=document.getElementById("gat");
var wiker=document.getElementById("wiker");
var alam=document.getElementById("alam");
var wiki=document.getElementById("wiki");
var wan=document.getElementById("wan");
var kilo=document.getElementById("kilo");
var getly=document.getElementById("getly");  

let upergo=document.getElementById("upergo");
let heads=document.getElementById("heads");

upergo.addEventListener("click",()=>{
    heads.scrollIntoView()
})
getly.addEventListener("click",()=>{
    gat.style.display="none"
    comot.style.display="flex"
})

kilo.addEventListener("click",()=>{
    alam.style.display="none"
    gat.style.display="flex"
})

wan.addEventListener("click" ,()=>{
    comot.style.display="none"
    alam.style.display="flex"
})

wiki.addEventListener("click",()=>{
    alam.style.display="none"
    comot.style.display="flex "
})

wolio.addEventListener("click" ,()=>{
    comot.style.display="none"
    gat.style.display="flex" 
    comot.style.display="none"
})
wiker.addEventListener("click",()=>{
    gat.style.display="none"
    alam.style.display="flex"
});
