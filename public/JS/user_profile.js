auth.onAuthStateChanged(user => {
    if (user) {
        console.log("User Logged in!!!!")
        const u = db.collection("users").where("email","==",user.email)
        u.get().then(snap => {
            console.log(snap)
        })
        
        

            
    }
    else {
        console.log("User Logged out!!!!")
    }
});
const itm_lst = document.querySelector(".item-list")

function enrollList(doc) {
    const li = document.createElement("div")
    const dv = document.createElement("div")
    const title = document.createElement("span")
    const author = document.createElement("span")
    const desc = document.createElement("div")


    li.setAttribute("doc-id", doc.id)
    li.setAttribute("class", "list")

    title.textContent = doc.data().title
    title.setAttribute("class", "list-title")

    desc.textContent = doc.data().description
    desc.setAttribute("class", "list-desc")

    author.textContent = "-" + doc.data().author_name
    author.setAttribute("class", "list-author")

    dv.setAttribute("class", "ttl-usr")
    dv.appendChild(title)
    dv.appendChild(author)
    li.appendChild(dv)
    li.appendChild(desc)

    itm_lst.appendChild(li)
}
