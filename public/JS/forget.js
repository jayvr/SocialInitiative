forget_btn = document.querySelector("#forget_btn")
umail = document.querySelector("#email")

forget_btn.addEventListener("click", () => {
    var emailAddress = umail.value

    auth.sendPasswordResetEmail(emailAddress).then(function () {
        console.log("email sent")
        window.location.href = "login.html"
    }).catch(function (error) {
        console.log("error occur")
    });
})