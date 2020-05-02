const email = document.querySelector("#email")
const password = document.querySelector("#password")
const login_btn = document.querySelector("#login_btn")

login_btn.addEventListener("click", (e) => {
    const em = email.value
    const pass = password.value

    console.log("logging in...")

    // login for user
    auth.signInWithEmailAndPassword(em, pass).then(cred => {
        window.location.href = "index.html"
    })
})