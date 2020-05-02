
const uname = document.querySelector('#u-name')
const uemail = document.querySelector('#email')
const pwd = document.querySelector('#password')
const sgn_btn = document.querySelector('#sign-up')

sgn_btn.addEventListener("click", (e) => {
    const email = uemail.value
    const password = pwd.value
    const name = uname.value

    // create user for auth
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        userID = cred.user.uid
        cred.user.updateProfile({
            displayName: name
        }).then(() => {
            console.log("signed in..")
        })
    }).then(() => {
        // add user into database
        db.collection("users").doc(userID).set({
            name: name,
            email: email,
        }).then(() => {
            window.location.href = "index.html"
        })
    })

});

