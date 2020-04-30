auth.onAuthStateChanged(user => {
    if (user) {
    const STATUS = true;
    console.log("User Logged in!!!!");
    const Loged_user = user;
    }
    else {
        const STATUS = false;
        console.log("User Logged out!!!!");
    }
});