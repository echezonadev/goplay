 
var wolio = document.getElementById("wolio");
var comot = document.getElementById("comot");
var gat = document.getElementById("gat");
var wiker = document.getElementById("wiker");
var alam = document.getElementById("alam");
var wiki = document.getElementById("wiki");
var wan = document.getElementById("wan");
var kilo = document.getElementById("kilo");
var getly = document.getElementById("getly");
var reme = document.getElementById("reme");
var secoo = document.getElementById("secoo");
var tirtys = document.getElementById("tirtys");

let upergo = document.getElementById("upergo");
let heads = document.getElementById("heads");

upergo.addEventListener("click", () => {
    heads.scrollIntoView()
})
getly.addEventListener("click", () => {
    gat.style.display = "none"
    comot.style.display = "flex"
    secoo.style.backgroundColor = "#b7b7b7"
    reme.style.backgroundColor = "black "
})

kilo.addEventListener("click", () => {
    alam.style.display = "none"
    gat.style.display = "flex"
    tirtys.style.backgroundColor = "#b7b7b7";
    secoo.style.backgroundColor = "black"
})

wan.addEventListener("click", () => {
    comot.style.display = "none";
    alam.style.display = "flex";
    reme.style.backgroundColor = "#b7b7b7";
    tirtys.style.backgroundColor = "black";
})

wiki.addEventListener("click", () => {
    alam.style.display = "none"
    comot.style.display = "flex "
    tirtys.style.backgroundColor = "#b7b7b7"
    reme.style.backgroundColor = "black"
})

wolio.addEventListener("click", () => {
    comot.style.display = "none"
    gat.style.display = "flex"
    comot.style.display = "none"
    reme.style.backgroundColor = "#b7b7b7"
    secoo.style.backgroundColor = "black"
})
wiker.addEventListener("click", () => {
    gat.style.display = "none"
    alam.style.display = "flex"
    tirtys.style.backgroundColor = "black "
    secoo.style.backgroundColor = " #b7b7b7"
});
