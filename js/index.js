let disnab=document.getElementById("disnab") 
let dis=document.getElementById("navss");
let diser=document.getElementById("stand");
let infor=document.getElementById("infor");
let loseinfor=document.getElementById("losinfor");
let about=document.getElementById("about");
let adside=document.getElementById("adside");
let richman=document.getElementById("richman"); 
let inde=document.getElementById("inde");
 setInterval(() => {
    inde.style.display="none"
 }, 3000);

richman.addEventListener("click",()=>{
    adside.style.display="none"
})

about.addEventListener("click",()=>{
    loseinfor.style.display="flex"
})

infor.addEventListener("click" ,()=>{
    loseinfor.style.display="none"
})
diser.addEventListener("click",()=>{
    disnab.style.display="block"
})

 dis.addEventListener("click" ,()=>{
     disnab.style.display="none"
 }) 