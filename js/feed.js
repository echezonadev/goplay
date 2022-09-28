let stuck=document.getElementById("stuck");
let slayer=document.getElementById("slayer")
let stuked=document.getElementById("stucked")
let voiced=document.getElementById("voiced") 
let voicer=document.getElementById("voicer") 
let loker=document.getElementById("lokers");  
let vider=document.getElementById("vider");   
let upergo=document.getElementById("upergo");   
let intos=document.getElementById("intos");   
upergo.addEventListener("click",()=>{
  intos.scrollIntoView()
})
stuck.addEventListener("click" ,()=>{
    slayer.style.transition="1s"
    slayer.style.height="310px";     
    stuck.style.display="none"
    stuked.style.display="block"
    voiced.style.display="none"
})

stuked.addEventListener("click",()=>{  
    slayer.style.height="0px"; 
    slayer.style.width="100%"; 
    stuck.style.display="block"
    stuked.style.display="none"
    voiced.style.display="none" 
})   

loker.addEventListener("click",()=>{ 
  vider.style.backgroundColor="white"
  vider.style.border="solid 2px #dbdbdb"
  vider.style.color="black"
  vider.style.transition="1s"
  loker.style.backgroundColor="black"
  loker.style.color="white"  
  voiced.style.display="none"
  voicer.style.display="block"
}) 
vider.addEventListener("click",()=>{
  vider.style.backgroundColor="black"
  vider.style.color="white"
  loker.style.transition="1s" 
  loker.style.color="black"
  loker.style.backgroundColor="white"  
  voicer.style.display="none"
  voiced.style.display="block"
})  