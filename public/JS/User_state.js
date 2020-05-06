loginBtn = document.querySelector(".login")
navList = document.querySelector("#nav-list")
const mk = document.querySelector(".make")

let STATUS

function makeProfile() {
    console.log("creating profile")
    profileDiv = document.createElement("li")
    profileDiv.setAttribute("class", "profile")
    profileLink = document.createElement("a")
    profileLink.setAttribute("href", "#")
    profileLink.textContent = "Profile"
    profileDiv.appendChild(profileLink)
    navList.appendChild(profileDiv)
}
function makeProfileContainer(uname, hide = '') {
    profileContainer = document.createElement("ul")
    profileContainer.setAttribute("class", "profile-container " + hide)

    profileDiv = document.createElement("li")
    profileDiv.setAttribute("class", "user-profile")
    profileLink = document.createElement("a")
    profileLink.setAttribute("href", "profile.html")
    profileLink.textContent = uname
    profileDiv.appendChild(profileLink)

    enrolledDiv = document.createElement("li")
    enrolledDiv.setAttribute("class", "enrolled")
    enrolledLink = document.createElement("a")
    enrolledLink.setAttribute("href", "enrolled.html")
    enrolledLink.textContent = "enrolled"
    enrolledDiv.appendChild(enrolledLink)

    createdDiv = document.createElement("li")
    createdDiv.setAttribute("class", "created")
    createdLink = document.createElement("a")
    createdLink.setAttribute("href", "created.html")
    createdLink.textContent = "created"
    createdDiv.appendChild(createdLink)

    logoutDiv = document.createElement("li")
    logoutDiv.setAttribute("class", "logout")
    logoutLink = document.createElement("a")
    logoutLink.setAttribute("href", "index.html")
    logoutLink.textContent = "logout"
    logoutDiv.appendChild(logoutLink)

    profileContainer.appendChild(profileDiv)
    profileContainer.appendChild(enrolledDiv)
    profileContainer.appendChild(createdLink)
    profileContainer.appendChild(logoutDiv)

    navList.appendChild(profileContainer)

}


// toggle make when user logged in
auth.onAuthStateChanged(user => {
    if (user) {
        STATUS = true
        mk.classList.remove("hidden")
        console.log("User Logged in!!!!")

        loginBtn.classList.add("hidden")

        makeProfile()

        makeProfileContainer(user.displayName, "hidden")

        profile = document.querySelector(".profile")

        profileContain = document.querySelector(".profile-container")

        profile.addEventListener("click", () => {
            profile.classList.add("hidden")
            profileContain.classList.remove("hidden")
        })

        logoutBtn = document.querySelector(".logout")
        logoutBtn.addEventListener("click", () => {
            console.log("logging out!!!")

            // logging out of account
            auth.signOut().then(() => {
                console.log("See ya again")
            })
        })
    }
    else {
        STATUS = false
        mk.classList.add("hidden")
        console.log("User Logged out!!!!")
        loginBtn.classList.remove("hidden")
    }
});
