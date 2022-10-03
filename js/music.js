function thems( ) {
    let disnab=document.getElementById("disnab") 
let dis=document.getElementById("navss");
let diser=document.getElementById("stand");
diser.addEventListener("click",()=>{
    disnab.style.display="block"
})

 dis.addEventListener("click" ,()=>{
     disnab.style.display="none"
 }) 
  
}
thems()