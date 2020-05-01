const title = document.querySelector("#title")
const desc = document.querySelector("#desc")
const makebtn = document.querySelector("#make-it")

let act = db.collection("activity")
let user = db.collection("users")

auth.onAuthStateChanged(cur_user => {
    if (cur_user) {
        console.log("User Logged in!!!!");


        makebtn.addEventListener("click", () => {
            console.log("wait...")
            user.where("email", "==", cur_user.email).where("name", "==", cur_user.displayName).get().then(snap => {
                snap.forEach(doc => {
                    auth_doc = "/users/" + doc.id
                    act.add({
                        title: title.value,
                        description: desc.value,
                        author: auth_doc,
                        author_name: cur_user.displayName,
                    }).then((actRef) => {
                        console.log("sucessfully written")
                        act_doc = "/activity/" + actRef.id
                        doc.update({
                            activities: firebase.firestore.FieldValue.arrayUnion(act_doc)
                        }).then((e) => {
                            console.log("update in user array sucessfully")
                        }).catch((e) => {
                            console.log("error in adding fields in activity")
                        })
                    }).catch((e) => {
                        console.log("error in user update of array")

                    })
                });
            })
            window.location.href = "index.html"
        })

    }
    else {
        console.log("User Logged out!!!!");
    }
});
