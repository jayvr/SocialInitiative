const itm_lst = document.querySelector("#item-list")

let user = db.collection("users")
let act = db.collection("activity")

// list an activity detail in document
function addList(doc) {
    let li = document.createElement("li")
    let title = document.createElement("div")
    let desc = document.createElement("span")
    let author = document.createElement("span")

    li.setAttribute("doc-id", doc.id)
    title.textContent = doc.data().title
    desc.textContent = doc.data().description
    author.textContent = doc.data().author_name


    li.appendChild(title);
    li.appendChild(desc);
    li.appendChild(author);

    if (STATUS) {
        btn = document.createElement("input")
        btn.setAttribute("type", "button")
        btn.setAttribute("value", "Enroll")
        li.appendChild(btn)
    }

    itm_lst.appendChild(li);

}

// getting activities from firestore
act.get().then(snap => {
    snap.docs.forEach(doc => {
        addList(doc)
    })
})

