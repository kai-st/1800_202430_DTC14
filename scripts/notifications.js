
firebase.auth().onAuthStateChanged((user) => {
    loadNotifications(user)
})


async function loadNotifications(user)
{
  db.collection("users").doc("WMnXqSWb3uMUuBfWYIzbmzdwbI63").update("notificationsRead", true)
    
    notificationCollection = await db.collection("users").doc("WMnXqSWb3uMUuBfWYIzbmzdwbI63").collection("notifications").get()
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

    for (notification of notifications)
    {
        displayNotification({...notification.data(), id: notification.id})
    }
}

async function displayNotification(doc)
{
    sourceID = doc.sourceID
    source = await db.collection("sources").doc(sourceID).get()
    sourceData = source.data()

    logo_URL = sourceData.sourceLogoUrl

    new_URL = new URL("article_template.html", window.location.href)
    new_URL.searchParams.set('id', doc.id) 

    title = doc.subpageTitle
    byline = doc.subpageSummary

    notifications_section = document.getElementById("notifications")

    notifications_section.innerHTML += `<div class="article-preview">
    <div class="article-preview-title" style="display: flex; flex-direction: row; gap: 20px;">
      <img src="${logo_URL}" alt="logo" style="height: 28px; width: auto;">
      <h3 style="">
        ${title}
      </h3>
    </div>
    <div class="article-preview-byline">
        ${byline}
    </div>
    <div class="article-preview-read">
      <a href="${new_URL}" style="">
        Read more 
          <span class="material-icons" style="text-decoration: none; vertical-align: bottom;">
            chevron_right
          </span>
        </a>
      </div>
    </div>`
}