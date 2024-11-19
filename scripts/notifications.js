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
            .get();
        const notificationIds = [];
        const notifications = [];
        for (const notification of notificationCollection.docs) {
            const notificationData = await notification.data();
            notificationIds.push(notificationData.subpages[0]);
        }
        if (notificationIds.length > 0) {
            // const sources = db.collection("sources");
            const sourcesSnapshot = await db.collection("sources").get();

            for (const source of sourcesSnapshot.docs) {
                const sourcesSubpagesSnapshot = await source.ref
                    .collection("subpages")
                    .get();
                for (const notificationId of notificationIds) {
                    sourcesSubpagesSnapshot.forEach((subpage) => {
                        if (subpage.id == notificationId) {
                            notifications.push(subpage);
                        }
                    });
                }
            }

            for (const notification of notifications) {
                displayNotification({
                    ...notification.data(),
                    id: notification.id,
                });
            }
        } else {
            notifications_section.innerHTML = `
        <div class="py-5 px-3 text-center">
            <h1 class="pb-3">Notifications</h1>
        </div>
        <div class="notification-action banner">
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
        `;
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
        `;
    }
}

async function displayNotification(doc) {
    const sourceID = doc.sourceID;
    const source = await db.collection("sources").doc(sourceID).get();
    const sourceData = source.data();

    const logo_URL = sourceData.sourceLogoUrl;

    const subpageUrl = doc.subpageUrl;
    const updated_at = doc.updatedAt.toDate().toDateString();
    const title = doc.subpageTitle;
    const summary = doc.subpageSummary;

    const notifications_section = document.getElementById("notifications");

    notifications_section.innerHTML += `
    <div class="template-wrapper">
                <div class="tab">Updated ${updated_at}</div>
                <section class="source-block" id="${sourceID}">
                <div class="source">
                    <h2>
                        <span class="d-none d-sm-inline">From: </span>
                        <!-- Set href to source domain homepage and innerText to source name -->
                        <a class="source-link" href="${sourceData.sourceUrl}">
                            <!-- set src to source logo url -->
                            <img src="${logo_URL}" class="source-logo" />${sourceData.sourceName}</a
                        >
                    </h2>
                </div>
                <div class="subpages accordion accordion-flush ms-md-5">
            <div id="single-accordion-template" class="subpage-item accordion-item">
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
                        <a href="${subpageUrl}" class="subpage-link">Visit Page</a>
                    </div>
                </div>
            </div>
            </div>
            </section>
        </div>
        </div>
    `;
}
