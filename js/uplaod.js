let video = document.getElementById("video");
let vid = document.getElementById("vid");
let down = document.getElementById("down");
let deo = document.getElementById("deo");
let song = document.getElementById("song");
let son = document.getElementById("son");
let deos = document.getElementById("deos");
let downs = document.getElementById("downs");
let lod = document.getElementById("loadings");
let lode = document.getElementById("uploa");
let wat = document.getElementById("wat");
let lods = document.getElementById("loadinge");
let lodes = document.getElementById("uploas");
let wats = document.getElementById("wats");
let mus = document.getElementById("musname");
let tiout = document.getElementById("tiout");
let tiouter = document.getElementById("tiouter");
let secondersrs = document.getElementById("secondersrs");
let lastlaster = document.getElementById("lastlaster");
wats.addEventListener("click", () => {
    lods.style.display = "block"
    lodes.style.display = "none" 
        tiouter.style.display="block" 
    setInterval(() => { 
        tiouter.style.display="none" 
        lodes.style.display="block"
        lods.style.display="none"
    },3000);
})
function loads() {
    wat.addEventListener("click", () => {
        lode.style.display = "none";
        setInterval(() => {
            tiouter.style.display = "none"
        }, 3000);
        tiouter.style.display = "block"
        lod.style.display = "block"
        setInterval(() => {
            lod.style.display = "none"
            lode.style.display="block"
        }, 3000);
    })
}
loads()

video.addEventListener("click", () => {
    video.style.backgroundColor = "black";
    vid.style.color = "white";
    video.style.border = "none";
    down.style.display = "none";
    deo.style.display = "block";
    song.style.backgroundColor = "white";
    song.style.border = "#dddddd solid 2px"
    song.style.color = "black";
    downs.style.display = "none";
    deos.style.display = "block"
})

song.addEventListener("click", () => {
    song.style.backgroundColor = "black";
    song.style.color = "white";
    vid.style.color = "black";
    video.style.border = "#dddddd solid 2px"
    video.style.backgroundColor = "white";
    deo.style.display = "none";
    down.style.display = "block";
    deos.style.display = "none";
    downs.style.display = "block"
})