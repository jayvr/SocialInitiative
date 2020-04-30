auth.onAuthStateChanged(user => {
    if (user) {
        console.log("User logged in : ", user);
    }
    else {
        console.log("user logged out!!!");
    }
});
