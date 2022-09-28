 let dow=document.getElementById("dowload"); 
  let userlays=document.getElementById("userlays"); 
  let userdown=document.getElementById("userdown"); 
  let userlayerx=document.getElementById("userlayerx"); 
  let loker=document.getElementById("lokers"); 
  let reder=document.getElementById("reder"); 
  let vider=document.getElementById("vider"); 
  let dowreder=document.getElementById("dowreder"); 
  let myInput=document.getElementById("myInput"); 

  loker.addEventListener("click",()=>{
    vider.style.backgroundColor="white"
    vider.style.border="solid 2px #dbdbdb"
    vider.style.color="black"
    vider.style.transition="1s"
    loker.style.backgroundColor="black"
    loker.style.color="white"
    reder.style.display="none" 
    dowreder.style.display="block"
  }) 
  vider.addEventListener("click",()=>{
    vider.style.backgroundColor="black"
    vider.style.color="white"
    loker.style.transition="1s" 
    loker.style.color="black"
    loker.style.backgroundColor="white"
    reder.style.display="block"
    dowreder.style.display="none" 
  })
  userlays.addEventListener("click",()=>{ 
      userdown.style.display="block"  
      userlays.style.display="none" 
      userlays.style.transition="1s"
      userlayerx.style.display="flex" 
  })
  userlayerx.addEventListener("click",()=>{
    userdown.style.display="none"; 
    userlayerx.style.display="none"
    userlays.style.display="flex"
  })
 dow.addEventListener('click',()=>{
    alert("Copy the link above and paste it in the input provided below to downlaod the Full HD video / mp3")
   console.log("Copy the link above and paste it in the input provided below to downlaod the Full HD video / mp3"); 
 }) 