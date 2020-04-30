
const uname = document.querySelector('#u-name');
const uemail = document.querySelector('#email');
const pwd = document.querySelector('#password');
const sgn_btn = document.querySelector('#sign-up');
//console.log(sgn_btn)
sgn_btn.addEventListener("click", (e) => {
    const email = uemail.value;
    const password = pwd.value;
    const name = uname.value;

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        cred.user.updateProfile({
            displayName: name
        }).then(() => {
            console.log(cred.user);
        })
    })

    db.collection("users").add({
        name: name,
        email: email,
    })

    // window.location.href = "dashboard.html";
});

