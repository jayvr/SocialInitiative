auth.onAuthStateChanged(user => {
    if (user) {
    console.log("User logged in : ",user);
    }
    else {
        console.log("user logged out!!!")
    }
});

const uname = document.querySelector('#email');
const pwd = document.querySelector('#password');
const sgn_btn = document.querySelector('#sign-up');
//console.log(sgn_btn)
sgn_btn.addEventListener("click", (e) => {
    const email = uname.value;
    const password = pwd.value;
    // console.log(email,password);

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        window.location.href = "dashboard.html";
    })
});

