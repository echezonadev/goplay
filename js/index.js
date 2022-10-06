

function indea10() {
    let infor = document.getElementById("infor");
    let loseinfor = document.getElementById("losinfor");
    let about = document.getElementById("about");
    let adside = document.getElementById("adside");
    let richman = document.getElementById("richman");
    let sidetwo = document.getElementById("sidetwo");
    let sideone = document.getElementById("sideone");
    let innert = document.getElementById("innert");
    let imageside = document.getElementById("imageside");
    let hidrit = document.getElementById("hidrit");
    let go = document.getElementById("go");
    let navright = document.getElementById("navright");
    let navclick = document.getElementById("navclick");
    let navclose = document.getElementById("navclose");
    let mobileone = document.getElementById("mobileone");
    let topdown = document.getElementById("topdown");
    let topcon = document.getElementById("topcon");
    let mobiletwo = document.getElementById("mobiletwo");
    let playup = document.getElementById("playup");
    let mohed = document.getElementById("mohed");
    let topagain = document.getElementById("topagain");
    let joy = document.getElementById("joy");
    let life = document.getElementById("life");

    setInterval(() => {
        joy.style.display = "none"
        life.style.display = "block"
    }, 3000);

    setInterval(() => {
        joy.style.display = "block"
        life.style.display = "none"
    }, 6000);

    topagain.addEventListener("click", () => {
        topdown.style.height = "0px"
        topagain.style.display = "none"
        topcon.style.display = "block"
    })
    topcon.addEventListener("click", () => {
        topdown.style.height = "300px"
        topdown.style.transition = "1s"
        topagain.style.display = "block"
        topcon.style.display = "none"
    })
    playup.addEventListener("click", () => {
        mohed.scrollIntoView(
        )
    })
    setInterval(() => {
        mobileone.style.overflow = "hidden"
        mobileone.style.transition = "1s"
        mobileone.style.height = "0px"
        mobileone.style.width = "0px"
        mobiletwo.style.display = "flex"
        mobiletwo.style.transition = "1s"
        mobiletwo.style.height = "180px"
        mobiletwo.style.width = "100%"
    }, 11000);
    setInterval(() => {
        mobileone.style.overflow = "hidden"
        mobileone.style.transition = "1s"
        mobileone.style.height = "360px"
        mobileone.style.width = "100%"
        mobiletwo.style.display = "none"
        mobiletwo.style.transition = "1s"
        mobiletwo.style.height = "0px"
        mobiletwo.style.width = "0px%"
    }, 22000);
    navclose.addEventListener("click", () => {
        navright.style.width = "0%"
        navright.style.transition = "1s"
    })
    navclick.addEventListener("click", () => {
        navright.style.width = "100%"
        navright.style.transition = "1s"
    })
    setInterval(() => {
        sideone.style.width = "0px"
        sidetwo.style.width = "100%"
        sidetwo.style.transition = "1s"
        sideone.style.transition = "1s"
        imageside.style.display = "none"
        hidrit.style.display = "flex"
        go.style.display = "none"
    }, 15000);
    setInterval(() => {
        sidetwo.style.width = "0%"
        sideone.style.width = "100%"
        sideone.style.transition = "1s"
        sidetwo.style.transition = "1s"
        hidrit.style.display = "none"
        go.style.display = "block"
        imageside.style.display = "flex"
    }, 30000);
    let inde = document.getElementById("inde");
    setInterval(() => {
        inde.style.display = "none"
    }, 3000);

    richman.addEventListener("click", () => {
        adside.style.display = "none"
    })

    about.addEventListener("click", () => {
        loseinfor.style.display = "flex"
    })

    infor.addEventListener("click", () => {
        loseinfor.style.display = "none"
    })
}
indea10()
function navsidet() {
    let disnab = document.getElementById("disnab")
    let dis = document.getElementById("navss");
    let diser = document.getElementById("stand");
    diser.addEventListener("click", () => {
        disnab.style.display = "block"
    })
    dis.addEventListener("click", () => {
        disnab.style.display = "none"
    })
}
navsidet()