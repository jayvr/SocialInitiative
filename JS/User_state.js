let STATUS;
auth.onAuthStateChanged(user => {
    if (user) {
        STATUS = true;
        console.log("User Logged in!!!!");
    }
    else {
        const STATUS = false;
        console.log("User Logged out!!!!");
    }
});