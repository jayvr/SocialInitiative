auth.onAuthStateChanged(user => {
    if (user) {
        console.log("User Logged in!!!!");
        const uid = user.uid;
        console.log(user.uid);
        var actref = db.collection("activity");
        var userref = db.collection("users").doc(uid);
        userref.get().then(function (doc) {
            if(doc.exists)
            {
                doc.data().enrolled.forEach(element => {
                    console.log(element);
                    actref.doc(element).get().then(function (page) {
                        if(page.exists)
                        {
                            enrollList(page);
                        }
                        else{
                            console.log("No act!!!");
                        }
                    })
                });
            }
            else{
                console.log("No such doc!!!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });        
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
