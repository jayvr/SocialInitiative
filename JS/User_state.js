auth.onAuthStateChanged(user => {
    if (user) {
    const STATUS = True;
    }
    else {
        console.log("user logged out!!!")
    }
});