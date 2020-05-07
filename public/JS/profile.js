const itm_lst = document.querySelector(".item-list")

function userDetails(doc) {
    const li = document.createElement("div")
    const dv = document.createElement("div")
    const name = document.createElement("span")
    const email = document.createElement("span")
    const desc = document.createElement("div")


    li.setAttribute("doc-id", doc.id)
    li.setAttribute("class", "list")

    name.textContent = doc.data().name
    name.setAttribute("class", "list-title")

    
    email.textContent = "-" + doc.data().email
    email.setAttribute("class", "list-author")

    dv.setAttribute("class", "ttl-usr")
    dv.appendChild(name)
    dv.appendChild(email)
    li.appendChild(dv)
    li.appendChild(desc)

    itm_lst.appendChild(li)
}


auth.onAuthStateChanged(user => {
    if(user)
    {
        const uid = user.uid;
        var userref =  db.collection("users").doc(uid);
        console.log(uid);
        userref.get().then(function (doc) {
            if (doc.exists) {

                userDetails(doc);

            } 
            else {
                console.log("No such doc!!!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });

    }
    else
    {
        console.log("User logged out!!!")
    }
});