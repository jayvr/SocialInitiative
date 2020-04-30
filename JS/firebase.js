const itm_lst = document.querySelector("#item-list")
// const itm_lst = document.querySelector("#item-list")

let user = db.collection("users")
let act = db.collection("activity")

function addList(doc) {
    let li = document.createElement("li")
    let title = document.createElement("div")
    let desc = document.createElement("span")
    // let time = document.createElement("span")
    let author = document.createElement("span")

    li.setAttribute("doc-id", doc.id)
    title.textContent = doc.data().title
    desc.textContent = doc.data().description
    // time.textContent = doc.data().time
    let id = doc.data().author.id
    // author.textContent = id
    console.log(id)
    user.doc(id).get().then((dok) => {
        console.log(dok.data().name)
        author.textContent = dok.data().name

    })

    li.appendChild(title);
    li.appendChild(author);
    li.appendChild(desc);
    // li.appendChild(time);

    itm_lst.appendChild(li);

}

act.get().then(snap => {
    snap.docs.forEach(doc => {
        addList(doc)
    })
})

