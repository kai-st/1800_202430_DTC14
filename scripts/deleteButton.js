var currentUser;               //points to the document of the user who is logged in
function deleteConfirmation() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {
            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid)
            //get the document for current user.
            currentUser.get()
                .then(userData => {
                    //get the user's account data
                    let userAccount = userData.data();

                    //if the user's account fields are not empty, then write them in to the form.
                    if (userAccount != null) {
                        if (window.confirm("Are you sure you would like to delete your account?")) {
                            // user chooses "OK", their account document gets deleted from Firestore
                            currentUser.delete()
                                .then(() => {
                                    // pop-up window confirming deletion
                                    window.confirm("Your account has been successfully deleted.")
                                    console.log("Account successfully deleted")
                                    // user is redirected to index.html signed-out
                                    window.location.replace("index.html", "Your account has been successfully deleted.");
                                }).catch((err) => {
                                    console.log("Error deleting account: ", err)
                                })
                        }
                    }
                })
        } else {
            // No user is signed in.
            window.confirm("No user is signed in");
            console.log("No user is signed in");
        }
    });
}
