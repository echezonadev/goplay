let video=document.getElementById("video");
let vid=document.getElementById("vid"); 
let down=document.getElementById("down");
let deo=document.getElementById("deo");
let song=document.getElementById("song");
let son=document.getElementById("son");
let deos=document.getElementById("deos");
let downs=document.getElementById("downs");

video.addEventListener("click",()=>{
    video.style.backgroundColor="black";
    vid.style.color="white";
    video.style.border="none";
    down.style.display="none";
    deo.style.display="block";
    song.style.backgroundColor="white";
    song.style.color="black";
    downs.style.display="none";
    deos.style.display="block"
})

song.addEventListener("click",()=>{
    song.style.backgroundColor="black";
    song.style.color="white";
    vid.style.color="black";
    video.style.backgroundColor="white";
    deo.style.display="none";
    down.style.display="block";
    deos.style.display="none";
    downs.style.display="block"
})