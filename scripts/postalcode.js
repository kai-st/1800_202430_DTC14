var currentUser;               //points to the document of the user who is logged in
function populateUserGeoInfo() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {
            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid)
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    //get the data fields of the user
                    let userPostalCode = userDoc.data().postal;

                    //if the data fields are not empty, then write them in to the form.
                    if (userPostalCode != null) {
                        document.getElementById("postalCodeInput").value = userPostalCode;
                    }
                })
        } else {
            // No user is signed in.
            console.log("No user is signed in");
        }
    });
}

populateUserGeoInfo();

function editUserGeoInfo() {
    //Enable the form fields
    document.getElementById('postalCodeInputField').disabled = false;
}

function saveUserGeoInfo(resp) {
    currentUser.update({
            postalCode: resp.postal,
            city: resp.standard.city,
            province: resp.standard.prov,
        })
            .then(() => {
                console.log("Document successfully updated!");
            })
                
    // disable edit 
    document.getElementById('postalCodeInputField').disabled = true;
}

function getUserGeoInfo() {
    var postalCode = document.getElementById("postalCodeInput").value
    fetch(`https://geocoder.ca/?locate=${postalCode}&json=1`)
        .then(resp => resp.json())
        .then(resp => {
            saveUserGeoInfo(resp);
        })
        .catch(err => {
            console.log(err);
        })
}
getUserGeoInfo();

