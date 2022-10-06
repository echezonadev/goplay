function nav11() {
    let navupshow = document.getElementById("navupshow");
    let mainnav = document.getElementById("mainnav");
    let navc = document.getElementById("navc");
    navc.addEventListener("click", () => {
        mainnav.style.display = "none"
    })
    navupshow.addEventListener("click", () => {
        mainnav.style.display = "block"
    })
}
nav11()