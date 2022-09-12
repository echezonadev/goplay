
let drop=document.getElementById("drop"); 
let droper=document.getElementById("dropshow");
let allos=document.getElementById("allos");
let song=document.getElementById("song");
let yank=document.getElementById("yank");
let son=document.getElementById("son");
let sons=document.getElementById("sons");

var vid=document.getElementById("vid");   
var yankvid=document.getElementById("yankvid");  
vid.addEventListener("click",()=>{
       yankvid.style.display="block"
       allos.style.display="none"
})
let adside=document.getElementById("adside");
let richman=document.getElementById("richman");
 

richman.addEventListener("click",()=>{
    adside.style.display="none"
})
sons.addEventListener("click",()=>{
    yankvid.style.display="none"
    allos.style.display="block"
})
son.addEventListener("click",()=>{
    yank.style.display="none"
    allos.style.display="block"
})

song.addEventListener("click",()=>{
   allos.style.display="none"
   yank.style.display="block"
})

let drops=document.getElementById("dropin"); 
let dropesr=document.getElementById("dropshower");

dropesr.addEventListener("click",()=>{
    drops.style.display = drops.style.display === "block"? "none": "block"  
})
droper.addEventListener("click",()=>{
    drop.style.display = drop.style.display === "block"? "none": "block"  
}); 