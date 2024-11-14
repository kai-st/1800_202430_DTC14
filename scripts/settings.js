var currentUser;               //points to the document of the user who is logged in

// get user's current UpdateLocation status
function currentUpdateLocationSetting() {
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
                    let userUpdateLocation = userAccount.updateLocation
                    if (userUpdateLocation == true) {
                        document.getElementById("userUpdateLocation").innerHTML = `
                            Current setting: ON
                            `
                    } else if (userUpdateLocation == null) {
                        // if user doesn't have updateLocation in their document, add updateLocation to their document and assign "false" to begin with
                        currentUser.update({
                            updateLocation: false
                        }).then(() => {
                            document.getElementById("userUpdateLocation").innerHTML = `
                            Current setting: OFF
                            `
                            console.log("Update location's current setting successfully activated!");
                        })
                            .catch((error) => {
                                console.log("Error updating document: ", error);
                            })
                    } else {
                        document.getElementById("userUpdateLocation").innerHTML = `
                            Current setting: OFF
                            `
                    }
                })
        }
    })
}
currentUpdateLocationSetting();

// toggle user's UpdateLocation when they click the button
function toggleUpdateLocation() {
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
                    let userUpdateLocation = userAccount.updateLocation

                    //if the user's account fields are not empty, then write them in to the form.
                    
                    if (userAccount != null && userUpdateLocation == false) {
                        currentUser.update({
                            updateLocation: true
                        }).then(() => {
                            document.getElementById("userUpdateLocation").innerHTML = `
                            Current setting: ON
                            `
                            console.log("Update location successfully turned on!");
                        })
                            .catch((error) => {
                                console.log("Error updating document: ", error);
                            })
                    } else if (userAccount != null && userUpdateLocation == true) {
                        currentUser.update({
                            updateLocation: false
                        }).then(() => {
                            document.getElementById("userUpdateLocation").innerHTML = `
                            Current setting: OFF
                            `
                            console.log("Update location successfully turned off!");
                        })
                            .catch((error) => {
                                console.log("Error updating document: ", error);
                            })
                    } 
                })
        }
        else {
            // No user is signed in.
            window.confirm("No user is signed in");
            console.log("No user is signed in");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

// get user's current emailNotifications status
function currentEmailNotificationsSetting() {
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
                    let userEmailNotifications = userAccount.emailNotifications
                    if (userEmailNotifications == true) {
                        document.getElementById("userEmailNotifications").innerHTML = `
                            Current setting: ON
                            `
                    } else if (userEmailNotifications == null) {
                        // if user doesn't have emailNotifications in their document, add emailNotifications to their document and assign "false" to begin with
                        currentUser.update({
                            emailNotifications: false
                        }).then(() => {
                            document.getElementById("userEmailNotifications").innerHTML = `
                            Current setting: OFF
                            `
                            console.log("Email notifications' current setting successfully activated!");
                        })
                            .catch((error) => {
                                console.log("Error updating document: ", error);
                            })
                    } else {
                        document.getElementById("userEmailNotifications").innerHTML = `
                            Current setting: OFF
                            `
                    }
                })
            }
    })
}
currentEmailNotificationsSetting();
            
// toggle user's emailNotifications when they click the button
function toggleEmailNotifications() {
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
                    let userEmailNotifications = userAccount.emailNotifications
                    
                    //if the user's account fields are not empty, then write them in to the form.
                    
                    if (userAccount != null && userEmailNotifications == false) {
                        currentUser.update({
                            emailNotifications: true
                        }).then(() => {
                            document.getElementById("userEmailNotifications").innerHTML = `
                            Current setting: ON
                            `
                            console.log("Email notifications successfully turned on!");
                        })
                        .catch((error) => {
                            console.log("Error updating document: ", error);
                        })
                    } else if (userAccount != null && userEmailNotifications == true) {
                    currentUser.update({
                        emailNotifications: false
                    }).then(() => {
                        document.getElementById("userEmailNotifications").innerHTML = `
                            Current setting: OFF
                            `
                        console.log("Email notifications successfully turned off!");
                    })
                        .catch((error) => {
                            console.log("Error updating document: ", error);
                        })
                    } 
                })
            } 
            else {
            // No user is signed in.
            window.confirm("No user is signed in");
            console.log("No user is signed in");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

// when the user clicks on the "Delete" button
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
