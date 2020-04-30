const itm_lst = document.querySelector("#item-list")

let user = db.collection("users")
let act = db.collection("activity")

function addList(doc) {
    let li = document.createElement("li")
    let name = document.createElement("span")
    let email = document.createElement("span")
    let phone = document.createElement("span")

    li.setAttribute("doc-id", doc.id)
    name.textContent = doc.data().name
    email.textContent = doc.data().email
    phone.textContent = doc.data().phone

    li.appendChild(name);
    li.appendChild(email);
    li.appendChild(phone);

    itm_lst.appendChild(li);

}

user.get().then(snap => {
    snap.docs.forEach(doc => {
        addList(doc)
    })
})

