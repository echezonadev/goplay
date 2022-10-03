function adst() {
    let youadser = document.getElementById("youadser")
    youadser.style.width = "0%"
    youadser.style.transition = "1s"
} 
setTimeout(() => { 
  youadser.style.width = "100%" 
    youadser.style.transition = "1s"
}, 8000); 
    setTimeout(() => { 
    youadser.style.width = "0%" 
    youadser.style.transition = "1s"
}, 16000);
let goone = document.getElementById("goone")
let gotwo = document.getElementById("gotwo")
let pink = document.getElementById("pink")
setInterval(() => {
    goone.style.width = "0%"
    goone.style.transition = "1s"
    gotwo.style.width = "100%"
    gotwo.style.transition = "1s"
}, 5000);
setInterval(() => {
    goone.style.width = "100%"
    goone.style.transition = "1s"
    gotwo.style.width = "0%"
    gotwo.style.transition = "1s"
}, 10000); 