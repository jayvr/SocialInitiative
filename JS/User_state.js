auth.onAuthStateChanged(user => {
    if (user) {
    const STATUS = true;
    const Loged_user = user;
    }
    else {
        const STATUS = false;
    }
});