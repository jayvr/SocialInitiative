const logout = document.querySelector('#logout');
//console.log(logout);
logout.addEventListener("click", (e) => {
    auth.signOut().then(() => {
        console.log("logging out!!!");
    })
    
});