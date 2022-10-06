 
function pefun() {  
let stuck=document.getElementById("stuck");
let slayer=document.getElementById("slayer")
let stuked=document.getElementById("stucked")
let voiced=document.getElementById("voiced") 
let voicer=document.getElementById("voicer") 
let loker=document.getElementById("lokers");  
let vider=document.getElementById("vider");   
let upergo=document.getElementById("upergo");   
let intos=document.getElementById("intos");   
let eed=document.getElementById("eed");  
let eeder=document.getElementById("eeder");  
let getart=document.getElementById("getart");   
let edet=document.getElementById("edet");      
eeder.addEventListener("click",()=>{ 
  let albumsidert=document.getElementById("albumsidert");
  voiced.style.display="none"
  voicer.style.display="none"
  albumsidert.style.width="100%" 
  albumsidert.style.display="block" 
  eeder.style.backgroundColor="black" 
  eeder.style.color="white"
  eeder.style.transition="1s"
  vider.style.backgroundColor="white"
  vider.style.color="black"
  eeder.style.border="none"  
  vider.style.border="solid 2px #dbdbdb"  
  vider.style.transition="1s"
  loker.style.color="black"
  loker.style.backgroundColor="white" 
  loker.style.border="solid 2px #dbdbdb"  
  loker.style.transition="1s"
})
function alBum33() {
  let albumsidert=document.getElementById("albumsidert");
  let eeder=document.getElementById("eeder");
  albumsidert.style.width="100%"
  albumsidert.style.transition="1s"
}
function clased() { 
  let albumsidert=document.getElementById("albumsidert");
  let eeder=document.getElementById("eeder");
  albumsidert.style.width="0%"
  albumsidert.style.transition="1s"
} 
upergo.addEventListener("click",()=>{
  goopert.scrollIntoView()
})
stuck.addEventListener("click" ,()=>{
    slayer.style.transition="1s"
    slayer.style.height="275px";     
    stuck.style.display="none"
    stuked.style.display="block" 
})

stuked.addEventListener("click",()=>{  
    slayer.style.height="0px"; 
    slayer.style.width="100%"; 
    stuck.style.display="block"
    stuked.style.display="none" 
})   

loker.addEventListener("click",()=>{  
  vider.style.backgroundColor="white"
  vider.style.border="solid 2px #dbdbdb"   
  loker.style.border="none"   
  vider.style.color="black"
  vider.style.transition="1s"
  loker.style.backgroundColor="black"
  loker.style.color="white"  
  voiced.style.display="none"
  albumsidert.style.display="none"
  voicer.style.display="block" 
  eeder.style.color="black"
  eeder.style.backgroundColor="white" 
  eeder.style.border="solid 2px #dbdbdb"  
  eeder.style.transition="1s"
}) 
vider.addEventListener("click",()=>{
  vider.style.border="none" 
  vider.style.backgroundColor="black"
  vider.style.color="white"
  loker.style.transition="1s" 
  loker.style.color="black"
  loker.style.backgroundColor="white"  
  voicer.style.display="none"
  voiced.style.display="block"
  albumsidert.style.display="none" 
  eeder.style.backgroundColor="white"
  eeder.style.color="black"
  eeder.style.border="solid 2px #dbdbdb"  
  loker.style.border="solid 2px #dbdbdb"  
})  
}
pefun()