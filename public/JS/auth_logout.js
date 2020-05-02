const logout = document.querySelector('#logout')

logout.addEventListener("click", (e) => {
    console.log("logging out!!!")

    // logging out of account
    auth.signOut().then(() => {
        window.location.href = "index.html"
    })
})