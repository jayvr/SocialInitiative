let STATUS;
auth.onAuthStateChanged(user => {
    if (user) {
        STATUS = true;
        console.log("User Logged in!!!!");
    }
    else {
        STATUS = false;
        console.log("User Logged out!!!!");
    }
});