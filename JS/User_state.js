let loged_user;
auth.onAuthStateChanged(user => {
    if (user) {
    const STATUS = true;
    console.log("User Logged in!!!!");
    loged_user = user;
    }
    else {
        const STATUS = false;
        console.log("User Logged out!!!!");
    }
});