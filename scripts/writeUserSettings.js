var currentUser

firebase.auth().onAuthStateChanged((user) =>
{
    currentUser = user
})

async function getEmailForSubscriptions()
{
    checkbox = document.getElementById("emailForSubscriptions")
    isChecked = checkbox.checked

    await db.collection("users").doc(currentUser.uid).update({emailForSubscriptions: isChecked})

}