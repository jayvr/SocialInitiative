const itm_lst = document.querySelector(".item-list")

let user = db.collection("users")
let act = db.collection("activity")

// list an activity detail in document
function addList(doc) {
    let li = document.createElement("div")
    let dv = document.createElement("div")
    let title = document.createElement("span")
    let author = document.createElement("span")
    let desc = document.createElement("div")

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
    // li.appendChild(title);
    // li.appendChild(author);
    li.appendChild(dv);
    li.appendChild(desc);

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

