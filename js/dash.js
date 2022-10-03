function views() { 
    let viewalbum=document.getElementById("viewalbum");  
    let mainalbum=document.getElementById("mainalbum");  
    let goalbum=document.getElementById("goalbum");  
    goalbum.addEventListener("click",()=>{ 
        goalbum.style.display="none"
        viewalbum.style.display="block"
        mainalbum.style.height="0px"
        mainalbum.style.transition="1s"
        mainalbum.style.margin="auto" 
        mainalbum.style.padding="0px" 
        mainalbum.style.overflow="scroll" 
        mainalbum.style.border="none" 
    })
    viewalbum.addEventListener("click",()=>{
        goalbum.style.display="block"
        viewalbum.style.display="none"
        mainalbum.style.height="500px"
        mainalbum.style.transition="1s"
        mainalbum.style.margin="auto" 
        mainalbum.style.padding="4px" 
        mainalbum.style.overflow="scroll" 
        mainalbum.style.border="solid #e6e6e6 2px" 
    })
}
views();
function albumside() { 
    let album=document.getElementById("album"); 
    let albumdiv=document.getElementById("albumdiv"); 
    let mudicdiverf=document.getElementById("mudicdiverf"); 
    let muid=document.getElementById("muid"); 
    album.addEventListener("click",()=>{
        albumdiv.style.display="block"
        muid.style.display="none"
        mudicdiverf.style.backgroundColor="white" 
        mudicdiverf.style.border="solid #e6e6e6 2px" 
        mudicdiverf.style.color="black" 
        album.style.backgroundColor="black" 
        album.style.border="none" 
        album.style.color="white" 
    })   
    mudicdiverf.addEventListener("click",()=>{
        albumdiv.style.display="none"
        muid.style.display="block"
        mudicdiverf.style.backgroundColor="black" 
        mudicdiverf.style.border="none" 
        mudicdiverf.style.color="white" 
        album.style.backgroundColor="white" 
        album.style.border="solid #e6e6e6 2px " 
        album.style.color=" black" 
    })
}
albumside()

function dashbod() {
let drop=document.getElementById("drop"); 
let droper=document.getElementById("dropshow"); 
let song=document.getElementById("song");
let yank=document.getElementById("yank");
let son=document.getElementById("son"); 

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
 
let drops=document.getElementById("dropin"); 
let dropesr=document.getElementById("dropshower");

dropesr.addEventListener("click",()=>{
    drops.style.display = drops.style.display === "block"? "none": "block"  
})
droper.addEventListener("click",()=>{
    drop.style.display = drop.style.display === "block"? "none": "block"  
}); 
}
dashbod()