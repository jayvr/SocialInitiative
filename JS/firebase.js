const itm_lst = document.querySelector("#item-list")
// const itm_lst = document.querySelector("#item-list")

let user = db.collection("users")
let act = db.collection("activity")

function addList(doc) {
    let li = document.createElement("li")
    let title = document.createElement("span")
    let desc = document.createElement("span")
    let time = document.createElement("span")
    let author = document.createElement("span")

    li.setAttribute("doc-id", doc.id)
    title.textContent = doc.data().title
    desc.textContent = doc.data().description
    time.textContent = doc.data().time
    // author.textContent = doc.data().author

    // author.textContent = user.doc(doc.data().author).name

    li.appendChild(title);
    li.appendChild(desc);
    // li.appendChild(author);
    li.appendChild(time);

    itm_lst.appendChild(li);

}

act.get().then(snap => {
    snap.docs.forEach(doc => {
        addList(doc)
    })
})

