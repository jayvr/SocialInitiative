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
        btn.setAttribute("id", doc.id)
        btn.setAttribute("value", "Enroll")
        btn.setAttribute("onclick", "onEnroll(this)")
        li.appendChild(btn)
    }

    itm_lst.appendChild(li)
}

// getting activities from firestore
act.get().then(snap => {
    console.log("fetching activities..")
    snap.docs.forEach(doc => {
        console.log(doc.data())
        addList(doc)
    })
    console.log("done..")
})

//function behind the enroll button
function onEnroll(btn)
{
    auth.onAuthStateChanged(user => {
        console.log(btn.id);
        console.log(user.uid);
        enrl_doc = btn.id;
        if (user)
        {
           var userref = db.collection("users").doc(user.uid);
           userref.update({
               enrolled : firebase.firestore.FieldValue.arrayUnion(enrl_doc)
           });

        }
        else
        {
            console.log("Please login to Enter!!");
        }
    })
}

