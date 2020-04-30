auth.onAuthStateChanged(user => {
    if (user) {
        const STATUS = true;
    }
    else {
        console.log("user logged out!!!")
    }
});