const itm_lst = document.querySelector(".item-list")

const user = db.collection("users")
const act = db.collection("activity")

// list an activity detail in document
function addList(doc) {
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

    // enroll button only if user is logged in
    if (STATUS) {
        const btn = document.createElement("input")
        btn.setAttribute("type", "button")
        btn.setAttribute("value", "Enroll")
        li.appendChild(btn)
    }

    itm_lst.appendChild(li)
}

// getting activities from firestore
act.get().then(snap => {
    console.log("fetching activities..")
    snap.docs.forEach(doc => {
        addList(doc)
    })
    console.log("done..")
})

