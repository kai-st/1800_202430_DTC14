function sayHello() {}
//sayHello();

//------------------------------------------------
// Call this function when the "logout" button is clicked
//-------------------------------------------------
function logout() {
    firebase
        .auth()
        .signOut()
        .then(() => {
            // Sign-out successful.
            console.log("logging out user");
        })
        .catch((error) => {
            // An error happened.
        });
}

async function getUserLocation() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            const userId = user.uid;
            db.collection("users")
                .doc(userId)
                .get()
                .then((userDoc) => {
                    const userData = userDoc.data();
                    const userLocation = {
                        postalCode: userData.postalCode,
                        city: userData.city,
                        province: userData.province,
                    };
                    console.log("user location", userLocation);
                    // Do something with location data
                })
                .catch((error) => {
                    console.error("Failed to get user from db");
                });
        } else {
            console.log("No current user, cannot get location");
        }
    });
}

// getUserLocation();
