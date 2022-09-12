let op = document.getElementById("po");
let downside = document.getElementById("downside");
let showert = document.getElementById("showert");
let hire = document.getElementById("hire");
let burn = document.getElementById("burn");
let lays = document.getElementById("lays");
let no = document.getElementById("no");

let burna = "downlaod";
burna += " burna";
console.log(burna);
hire.addEventListener("click", () => {
    if (op.value == burna) {
        showert.style.display = "block";
        burn.style.borderBottom = "solid red 2px"
        no.style.display = "none"

    }
    else {
        no.style.display = "block";
        lays.innerHTML = op.value
        showert.style.display = "none";


    }
}) 
op.addEventListener("click", () => {
    downside.style.display = "none";
});
