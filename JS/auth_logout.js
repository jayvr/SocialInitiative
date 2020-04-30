auth.onAuthStateChanged(user => {
    if (user) {
    console.log("User logged in : ",user);
    }
    else {
        console.log("user logged out!!!")
    }
});;

const logout = document.querySelector('#logout');
//console.log(logout);
logout.addEventListener("click", (e) => {
    auth.signOut().then(() => {
        console.log("logging out!!!");
        window.location.href = "index.html"
    })

});