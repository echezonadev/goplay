let show=document.getElementById("show");
let puts=document.getElementById("puts");
let now=document.getElementById("now");  
now.addEventListener("click",()=>{
    let ano="anonymous=  " 
    show.innerHTML=ano+puts.value; 
        puts.value=null;
        show.style.padding="10px";
        show.style.fontSize="12px" ; 
});


