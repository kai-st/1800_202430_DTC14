var currentUser

firebase.auth().onAuthStateChanged((user) => {
  currentUser = user  
  loadNotifications()
})


async function loadNotifications()
{
    if (currentUser)
    {db.collection("users").doc(currentUser.uid).update("notificationsRead", true)

    notifications_section = document.getElementById("notifications")
    notifications_section.innerHTML = `<h1>Notifications</h1>`
  
    notificationCollection = await db.collection("users").doc(currentUser.uid).collection("notifications").get()
    notificationIds = []
    notifications = []
    for(notification of notificationCollection.docs)
    {
        notificationData = await notification.data()
        notificationIds.push(notificationData.subpages[0])
    }
    if (notificationIds.length > 0)
    {
    sources = db.collection("sources")
    sourcesSnapshot = await db.collection("sources").get()

    for (source of sourcesSnapshot.docs) {
        sourcesSubpagesSnapshot = await source.ref.collection("subpages").get();
        for (notificationId of notificationIds) {
            sourcesSubpagesSnapshot.forEach((subpage) => {
                if (subpage.id == notificationId) {
                    notifications.push(subpage);
                }
            });
        }
    }

    for (notification of notifications)
    {
        displayNotification({...notification.data(), id: notification.id})
    }
    } 
    else
    {
        notifications_section.innerHTML = `
        <h1>Notifications</h1>
        <div class="notification-action">
            <p class="card-text fs-4">
                Subscribe to a topic to receive personalized
                notifications.
            </p>
            <a
                href="./topics.html"
                class="btn btn-info py-3 px-5 fs-5"
                >View Topics</a
            >
        </div>
        `
    }
    } 
    else
    {
        notifications_section = document.getElementById("notifications")
        notifications_section.innerHTML = `
        <h1>Notifications</h1>
        <div class="notification-action">
            <p class="card-text fs-4">
                Sign up or log in to view personalized
                notifications.
            </p>
            <a
                href="./login.html"
                class="btn btn-info py-3 px-5 fs-5"
                >Sign Up</a
            >
        </div>
        `
  
    }
}

async function displayNotification(doc)
{
    sourceID = doc.sourceID
    source = await db.collection("sources").doc(sourceID).get()
    sourceData = source.data()

    logo_URL = sourceData.sourceLogoUrl;

    new_URL = new URL("article_template.html", window.location.href);
    new_URL.searchParams.set("id", doc.id);

    title = doc.subpageTitle
    summary = doc.subpageSummary

    notifications_section = document.getElementById("notifications");

    notifications_section.innerHTML += `
    <div class="template-wrapper">
            <div id="single-accordion-template" class="subpage-item accordion">
                <div class="subpage-header accordion-header">
                    <h3>${title}</h3>
                    <button
                        class="accordion-button custom collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#${doc.id}"
                        aria-expanded="false"
                        aria-controls="${doc.id}"
                    ></button>
                </div>
                <!-- Update id to be unique for each copy of component -->
                <div id="${doc.id}" class="accordion-collapse collapse">
                    <!-- Replace things in here with whatever content -->
                    <div class="embed">
                        <div class="embed-content">
                           ${summary}
                        </div>
                        <a href="${new_URL}" class="subpage-link">Visit Page</a>
                    </div>
                </div>
            </div>
        </div>
    `
}
