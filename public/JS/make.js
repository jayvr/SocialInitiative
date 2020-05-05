const title = document.querySelector("#title")
const desc = document.querySelector("#desc")
const makebtn = document.querySelector("#make-it")

let act = db.collection("activity")
let user = db.collection("users")

auth.onAuthStateChanged(cur_user => {
    // for checking if user is logged in?
    if (cur_user) {
        makebtn.addEventListener("click", () => {

            console.log("making new activity..")

            // get the uid of user
            auth_doc = cur_user.uid
            // add the new activity
            act.add({
                title: title.value,
                description: desc.value,
                author: auth_doc,
                author_name: cur_user.displayName,
            }).then((actRef) => {
                console.log("sucessfuly updated in activity collection")

                // id of activity
                act_doc = actRef.id
                // update user field to connect activity (add id in array)

                console.log("updating activity in user")
                user.doc(cur_user.uid).update({
                    activities: firebase.firestore.FieldValue.arrayUnion(act_doc)
                }).then(() => {
                    console.log("sucessfully updated array in user")
                }).catch(() => {
                    console.log("error in updating array in user")
                })
            }).catch(() => {
                console.log("error in adding new activity")
            })
        })
    } else {
        console.log("User is not logged in")
    }
})