auth.onAuthStateChanged(user => {
    console.log(user);
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