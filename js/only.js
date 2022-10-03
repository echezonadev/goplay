function temall() {
    
let allos=document.getElementById("allos");
let sons=document.getElementById("sons");
let son=document.getElementById("son"); 
let song=document.getElementById("song");  
let onel=document.getElementById("onel");  
let oneled=document.getElementById("oneled");   
let secu=document.getElementById("secu");   
oneled.addEventListener("click",()=>{ 
    secu.style.display="none"
    oneled.style.display="none"
    onel.style.display="block"
})
onel.addEventListener("click",()=>{ 
    onel.style.display="none"
    secu.style.display="block"
    oneled.style.display="block"
})
song.addEventListener("click",()=>{
    allos.style.display="none"
    yank.style.display="block"
 })
 
sons.addEventListener("click",()=>{
    yankvid.style.display="none"
    allos.style.display="block"
})
son.addEventListener("click",()=>{
    yank.style.display="none"
    allos.style.display="block"
})
}
temall()