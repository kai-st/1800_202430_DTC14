var currentUser; //points to the document of the user who is logged in

function populateUserGeoInfo() {
    firebase.auth().onAuthStateChanged((user) => {
        // Check if user is signed in:
        if (user) {
            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid);
            //get the document for current user.
            currentUser.get().then((userDoc) => {
                //get the data fields of the user
                let userPostalCode = userDoc.data().postalCode;

                //if the data fields are not empty, then write them in to the form.
                if (userPostalCode != null) {
                    // document
                    //     .getElementById("location-banner")
                    //     ?.classList.add("d-none");
                    document.getElementById("postalCodeInput").value =
                        userPostalCode;
                    // disable edit
                    document.getElementById("postalCodeInput").disabled = true;
                }
            });
        } else {
            // No user is signed in.
            console.log("No user is signed in");
        }
    });
}

populateUserGeoInfo();

function editUserGeoInfo() {
    //Enable the form fields
    document.getElementById("postalCodeInput").disabled = false;
}

function saveUserGeoInfo(resp) {
    currentUser
        .update({
            postalCode: resp.postal,
            city: resp.standard.city,
            province: resp.standard.prov,
        })
        .then(() => {
            window.confirm("Your postal code has been successfully updated.")
            console.log("Document successfully updated!");
        });

    // disable edit
    document.getElementById("postalCodeInput").disabled = true;
}

function getUserGeoInfo() {
    var postalCode = document.getElementById("postalCodeInput").value;
    fetch(`https://geocoder.ca/?locate=${postalCode}&json=1`)
        .then((resp) => resp.json())
        .then((resp) => {
            saveUserGeoInfo(resp);
        })
        .catch((err) => {
            console.log(err);
        });
}

// get user's current UpdateLocation status
// function currentUpdateLocationSetting() {
//     firebase.auth().onAuthStateChanged(user => {
//         // Check if user is signed in:
//         if (user) {
//             //go to the correct user document by referencing to the user uid
//             currentUser = db.collection("users").doc(user.uid)
//             //get the document for current user.
//             currentUser.get()
//                 .then(userData => {
//                     //get the user's account data
//                     let userAccount = userData.data();
//                     let userUpdateLocation = userAccount.updateLocation
//                     if (userUpdateLocation == true) {
//                         document.getElementById("userUpdateLocation").innerHTML = `
//                             Current setting: ON
//                             `
//                     } else if (userUpdateLocation == null) {
//                         // if user doesn't have updateLocation in their document, add updateLocation to their document and assign "false" to begin with
//                         currentUser.update({
//                             updateLocation: false
//                         }).then(() => {
//                             document.getElementById("userUpdateLocation").innerHTML = `
//                             Current setting: OFF
//                             `
//                             console.log("Update location's current setting successfully activated!");
//                         })
//                             .catch((error) => {
//                                 console.log("Error updating document: ", error);
//                             })
//                     } else {
//                         document.getElementById("userUpdateLocation").innerHTML = `
//                             Current setting: OFF
//                             `
//                     }
//                 })
//         }
//     })
// }
// currentUpdateLocationSetting();

// // toggle user's UpdateLocation when they click the button
// function toggleUpdateLocation() {
//     firebase.auth().onAuthStateChanged(user => {
//         // Check if user is signed in:
//         if (user) {
//             //go to the correct user document by referencing to the user uid
//             currentUser = db.collection("users").doc(user.uid)
//             //get the document for current user.
//             currentUser.get()
//                 .then(userData => {
//                     //get the user's account data
//                     let userAccount = userData.data();
//                     let userUpdateLocation = userAccount.updateLocation

//                     //if the user's account fields are not empty, then write them in to the form.

//                     if (userAccount != null && userUpdateLocation == false) {
//                         currentUser.update({
//                             updateLocation: true
//                         }).then(() => {
//                             document.getElementById("userUpdateLocation").innerHTML = `
//                             Current setting: ON
//                             `
//                             console.log("Update location successfully turned on!");
//                         })
//                             .catch((error) => {
//                                 console.log("Error updating document: ", error);
//                             })
//                     } else if (userAccount != null && userUpdateLocation == true) {
//                         currentUser.update({
//                             updateLocation: false
//                         }).then(() => {
//                             document.getElementById("userUpdateLocation").innerHTML = `
//                             Current setting: OFF
//                             `
//                             console.log("Update location successfully turned off!");
//                         })
//                             .catch((error) => {
//                                 console.log("Error updating document: ", error);
//                             })
//                     }
//                 })
//         }
//         else {
//             // No user is signed in.
//             window.confirm("No user is signed in");
//             console.log("No user is signed in");
//         }
//     }).catch((error) => {
//         console.log("Error getting document:", error);
//     });
// }

// get user's current emailNotifications status
function currentEmailNotificationsSetting() {
    firebase.auth().onAuthStateChanged((user) => {
        // Check if user is signed in:
        if (user) {
            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid);
            //get the document for current user.
            currentUser.get().then((userData) => {
                //get the user's account data
                let userAccount = userData.data();
                let userEmailNotifications = userAccount.emailNotifications;
                if (userEmailNotifications == true) {
                    document.getElementById(
                        "userEmailNotifications"
                    ).innerHTML = `
                            Current setting: ON
                            `;
                } else if (userEmailNotifications == null) {
                    // if user doesn't have emailNotifications in their document, add emailNotifications to their document and assign "false" to begin with
                    currentUser
                        .update({
                            emailNotifications: false,
                        })
                        .then(() => {
                            document.getElementById(
                                "userEmailNotifications"
                            ).innerHTML = `
                            Current setting: OFF
                            `;
                            console.log(
                                "Email notifications' current setting successfully activated!"
                            );
                        })
                        .catch((error) => {
                            console.log("Error updating document: ", error);
                        });
                } else {
                    document.getElementById(
                        "userEmailNotifications"
                    ).innerHTML = `
                            Current setting: OFF
                            `;
                }
            });
        }
    });
}
currentEmailNotificationsSetting();

// toggle user's emailNotifications when they click the button
function toggleEmailNotifications() {
    firebase.auth().onAuthStateChanged((user) => {
        // Check if user is signed in:
        if (user) {
            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid);
            //get the document for current user.
            currentUser.get().then((userData) => {
                //get the user's account data
                let userAccount = userData.data();
                let userEmailNotifications = userAccount.emailNotifications;

                //if the user's account fields are not empty, then write them in to the form.

                if (userAccount != null && userEmailNotifications == false) {
                    currentUser
                        .update({
                            emailNotifications: true,
                        })
                        .then(() => {
                            document.getElementById(
                                "userEmailNotifications"
                            ).innerHTML = `
                            Current setting: ON
                            `;
                            console.log(
                                "Email notifications successfully turned on!"
                            );
                        })
                        .catch((error) => {
                            console.log("Error updating document: ", error);
                        });
                } else if (
                    userAccount != null &&
                    userEmailNotifications == true
                ) {
                    currentUser
                        .update({
                            emailNotifications: false,
                        })
                        .then(() => {
                            document.getElementById(
                                "userEmailNotifications"
                            ).innerHTML = `
                            Current setting: OFF
                            `;
                            console.log(
                                "Email notifications successfully turned off!"
                            );
                        })
                        .catch((error) => {
                            console.log("Error updating document: ", error);
                        });
                }
            });
        } else {
            // No user is signed in.
            window.confirm("No user is signed in");
            console.log("No user is signed in");
        }
    });
    // .catch((error) => {
    //     console.log("Error getting document:", error);
    // });
}

// when the user clicks on the "Delete" button
function deleteConfirmation() {
    firebase.auth().onAuthStateChanged((user) => {
        // Check if user is signed in:
        if (user) {
            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid);
            //get the document for current user.
            currentUser.get().then((userData) => {
                //get the user's account data
                let userAccount = userData.data();

                //if the user's account fields are not empty, then write them in to the form.
                if (userAccount != null) {
                    if (
                        window.confirm(
                            "Are you sure you would like to delete your account data?"
                        )
                    ) {
                        // user chooses "OK", their account document gets deleted from Firestore
                        currentUser
                            .delete()
                            .then(() => {
                                // pop-up window confirming deletion
                                window.confirm(
                                    "Your account data has been successfully deleted."
                                );
                                console.log("Account successfully deleted");
                                // pop-up window giving user instruction to confirm deleted account
                                window.confirm(
                                    "Please sign out of your account to finish the deletion process."
                                );
                                console.log("Give user instructions to confirm deletion of account");
                                // user is redirected to index.html signed-out
                                window.location.replace(
                                    "index.html",
                                    "Your account has been successfully deleted."
                                );
                            })
                            .catch((err) => {
                                console.log("Error deleting account: ", err);
                            });
                    }
                }
            });
        } else {
            // No user is signed in.
            window.confirm("No user is signed in");
            console.log("No user is signed in");
        }
    });
}
