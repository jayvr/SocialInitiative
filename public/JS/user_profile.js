function onEnroll(btn)
{
    auth.onAuthStateChanged(user => {
        console.log(btn.id);
        console.log(user.uid);
        enrl_doc = "/activity/" + btn.id;
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