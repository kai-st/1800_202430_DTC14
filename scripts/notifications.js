var currentUser;

firebase.auth().onAuthStateChanged((user) => {
    currentUser = user;
    loadNotifications();
});

async function loadNotifications() {
    if (currentUser) {
        db.collection("users")
            .doc(currentUser.uid)
            .update("notificationsRead", true);

        const notifications_section = document.getElementById("notifications");
        notifications_section.innerHTML = `<div class="py-5 px-3 text-center">
            <h1 class="pb-3">Notifications</h1>
        </div>`;

        const notificationCollection = await db
            .collection("users")
            .doc(currentUser.uid)
            .collection("notifications")
            .orderBy('createdAt', 'desc')
            .get();
        
        
        if (notificationCollection.docs.length > 0)
        {    
        for (notification of notificationCollection.docs)
        {
            notificationData = notification.data()
            sourceRef = notificationData.source
            source = await sourceRef.get()
            sourceSubpages = notificationData.subpages
            subpageDocs = await sourceRef.collection("subpages").where(firebase.firestore.FieldPath.documentId(), "in", sourceSubpages).get()
            displayNotification(notification.id, source, subpageDocs, notificationData.createdAt)
        }
        } else {
            notifications_section.innerHTML = `
            <div class="py-5 px-3 text-center">
                <h1 class="pb-3">Notifications</h1>
            </div>
            <div class="notification-action card">
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
    } else {
        const notifications_section = document.getElementById("notifications");
        notifications_section.innerHTML = `
        <div class="py-5 px-3 text-center">
            <h1 class="pb-3">Notifications</h1>
        </div>
        <div class="notification-action card">
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

async function displayNotification(notificationID, source, subpages, date) {
    const sourceData = source.data()
    const notification_section = document.getElementById("notifications")
    wrapper = document.createElement("div")
    wrapper.classList.add(`wrapper-${source.id}`)
    accordianId = notificationID + source.id
    wrapper.innerHTML = `
    <div class="template-wrapper">
                <div class="tab">Updated ${date.toDate().toDateString()}</div>
                <section class="source-block" id="${accordianId}">
                <div class="source">
                    <h2>
                        <span class="d-none d-sm-inline">From: </span>
                        <!-- Set href to source domain homepage and innerText to source name -->
                        <a class="source-link" href="${sourceData.sourceUrl}">
                            <!-- set src to source logo url -->
                            <img src="${sourceData.sourceLogoUrl}" class="source-logo" />${sourceData.sourceName}</a
                        >
                    </h2>
                </div>
                <div class="subpages accordion accordion-flush ms-md-5" id="subpages-${accordianId}">
                </div>
            </section>
        </div>
        </div>
    `
    notification_section.appendChild(wrapper)
    subpage_section = document.getElementById(`subpages-${accordianId}`)
    
    subpages.forEach(subpage => {
        subpageData = subpage.data()
        subpageID = notificationID + subpage.id

        console.log("subpage: ", subpage)
        console.log("subpage data: ", subpageData)

        subpageElement = document.createElement("div")
        subpageElement.class = "subpage-item accordion-item"
        subpageElement.id = "single-accordion-template"
        subpageElement.innerHTML = 
        `<div class="subpage-header accordion-header">
                        <h3>${subpageData.subpageTitle}</h3>
                        <button
                            class="accordion-button custom collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#${subpageID}"
                            aria-expanded="false"
                            aria-controls="${subpageID}"
                        ></button>
                    </div>
                    <!-- Update id to be unique for each copy of component -->
                    <div id="${subpageID}" class="accordion-collapse collapse">
                        <!-- Replace things in here with whatever content -->
                        <div class="embed">
                            <div class="embed-content">
                                ${subpageData.subpageSummary}
                            </div>
                            <a href="${subpageData.subpageUrl}" class="subpage-link">Visit Page</a>
                        </div>
                    </div>`
        subpage_section.appendChild(subpageElement)
    })
}
