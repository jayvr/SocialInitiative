const title = document.querySelector("#title")
const desc = document.querySelector("#desc")
const makebtn = document.querySelector("#make-it")

let act = db.collection("activity")
let user = db.collection("users")

auth.onAuthStateChanged(cur_user => {
    // for checking if user is logged in?
    if (cur_user) {
        makebtn.addEventListener("click", () => {
            // get the uid of user
            auth_doc = "/users/" + cur_user.uid
            // add the new activity
            act.add({
                title: title.value,
                description: desc.value,
                author: auth_doc,
                author_name: cur_user.displayName,
            }).then((actRef) => {
                console.log("sucessfuly updated in activity collection")
                // console.log("activity id = " + actRef.id)
                // id of activity
                act_doc = "/activity/" + actRef.id
                // update user field to connect activity (add id in array)
                user.doc(cur_user.uid).update({
                    activities: firebase.firestore.FieldValue.arrayUnion(act_doc)
                }).then(() => {
                    console.log("sucessfully updated array in user")
                }).catch("error in updating array in user")
            }).catch(() => {
                console.log("erroe in updating activity collection")
            })
        })
    } else {
        console.log("User is not logged in")
    }
})