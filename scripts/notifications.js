firebase.auth().onAuthStateChanged((user) => {
    loadNotifications(user)
})


async function loadNotifications(user)
{
    notificationCollection = await db.collection("users").doc(user.uid).collection("notifications").get()
    notificationIds = []
    notifications = []
    for(notification of notificationCollection.docs)
    {
        notificationData = await notification.data()
        notificationIds.push(notificationData.subpages[0])
    }

    sources = db.collection("sources")
    sourcesSnapshot = await db.collection("sources").get()

    for(source of sourcesSnapshot.docs)
    {
        sourcesSubpagesSnapshot = await source.ref.collection("subpages").get()
        for(notificationId of notificationIds) {
            
            sourcesSubpagesSnapshot.forEach(subpage => {
                if (subpage.id == notificationId )
                {
                    notifications.push(subpage)
                }
                });
        }
    }


    notifications.forEach((subpage) => {
        displayNotification(subpage)
    })
}

function displayNotification(subpage)
{
    console.log(subpage.id)
}
