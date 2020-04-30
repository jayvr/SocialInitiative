let loged_user;
let STATUS;
auth.onAuthStateChanged(user => {
    if (user) {
    STATUS = true;
    console.log("User Logged in!!!!");
    loged_user = user;
    }
    else {
        const STATUS = false;
        console.log("User Logged out!!!!");
    }
});