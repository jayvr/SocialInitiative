const title = document.querySelector("#title")
const desc = document.querySelector("#desc")

let act = db.collection("activity")
// var user = firebase.auth().currentUser;
act.add({
    title: title.value,
    description: desc.value,
}).then((e) => {
    console.log("sucessfully written")
}).catch((e) => {
    console.log("error occured")
})

// var user = firebase.auth().currentUser;
// console.log(user)