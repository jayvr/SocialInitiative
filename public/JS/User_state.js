const mk = document.querySelector(".make")
let STATUS

// toggle make when user logged in
auth.onAuthStateChanged(user => {
    if (user) {
        STATUS = true
        mk.classList.remove("hidden")
        console.log("User Logged in!!!!")
    }
    else {
        STATUS = false
        mk.classList.add("hidden")
        console.log("User Logged out!!!!")
    }
});
