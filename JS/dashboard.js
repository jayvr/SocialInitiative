auth.onAuthStateChanged(user => {
    if (user) {
    console.log("User logged in : ",user);
    }
    else {
        console.log("user logged out!!!")
    }
});

const nav = document.querySelector("#nav")

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}