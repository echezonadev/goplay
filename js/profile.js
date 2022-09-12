

let follow=document.getElementById("follow");

follow.addEventListener("click" ,()=>{
    follow.innerText="Following" 
})  
let oned=document.getElementById("oned");
let sec=document.getElementById("sec");
oned.addEventListener("click",()=>{
    sec.style.display = sec.style.display === "block"? "none": "block"  
})