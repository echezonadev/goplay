function getdays() {
    let times = document.getElementById("times");
    let timer = document.getElementById("timeer");
    let timeer = document.getElementById("timer");
    let twenty = document.getElementById("twenty");
    let full = document.getElementById("full");
    let  lio = document.getElementById("lio");
    let  liop = document.getElementById("liop");
    const getDays = new Date();
    let lays = getDays.getDay();
    times.innerHTML = lays;
    sep = getDays.getMonth();
    timer.innerHTML = getDays.getDate();
    twenty.innerHTML = getDays.getFullYear();
    full.innerHTML = getDays.getHours();
    lio.innerHTML = getDays.getMinutes();
    liop.innerHTML = getDays.getSeconds();
    switch (sep) {
        case 0:
            timeer.innerHTML = "Jenuary"
            alert("Happy New Year")
            break;
        case 1:
            timeer.innerHTML = "February"
            break;
        case 2:
            timeer.innerHTML = "March"
            break;
        case 3:
            timeer.innerHTML = "April"
            break;
        case 4:
            timeer.innerHTML = "May"
            break;
        case 5:
            timeer.innerHTML = "June"
            break;
        case 6:
            timeer.innerHTML = "July"
            break;
        case 7:
            timeer.innerHTML = "August"
            break;
        case 8:
            timeer.innerHTML = "September" 
            break;
        case 9:
            timeer.innerHTML = "October"
            break;
        case 10:
            timeer.innerHTML = "November"
            break;
        case 11:
            timeer.innerHTML = "December"
            alert("Happy christmas")
            break;
    }
    switch (lays) {
        case 0:
            times.innerHTML = "Sunday";
            break;
        case 1:
            times.innerHTML = "Monday";
            break;
        case 2:
            times.innerHTML = "Tuesday";
            break;
        case 3:
            times.innerHTML = "Wednesday";
            break;
        case 4:
            times.innerHTML = "Thursday";
            break;
        case 5:
            times.innerHTML = "Friday";
            break;
        case 6:
            times.innerHTML = "Sartuday";
            break;

        default:
            times.innerHTML = "please update your time";
            break;
    }
}
getdays();  