var currentUser;

firebase.auth().onAuthStateChanged((user) => {
    currentUser = user;
    setup();
});

async function getNewsArticles() {
    const sources = db.collection("sources");

    let newsArticles = [];
    let allNewsArticles = [];
    let uniqueNewsArticles = [];

    const sourcesFederalSnapshot = await sources
        .where("jurisdiction.governmentLevel", "==", `federal`)
        .get();
    allNewsArticles.push(...sourcesFederalSnapshot.docs);

    if (currentUser) {
        const userRef = db.collection("users").doc(currentUser.uid);
        const userSnapshot = await userRef.get();
        const userProvince = userSnapshot.data().province;
        const userCity = userSnapshot.data().city;

        const sourcesProvincialSnapshot = await sources
            .where("jurisdiction.governmentLevel", "==", "province")
            .where("jurisdiction.location", "==", `${userProvince}`)
            .get();
        allNewsArticles.push(...sourcesProvincialSnapshot.docs);

        const sourcesMunicipalSnapshot = await sources
            .where("jurisdiction.governmentLevel", "==", "municipal")
            .where("jurisdiction.location", "==", `${userCity}`)
            .get();
        allNewsArticles.push(...sourcesMunicipalSnapshot.docs);
    }

    if (allNewsArticles.length > 0) {
        uniqueNewsArticles = [...new Set(allNewsArticles)];

        for (sourceDoc of allNewsArticles) {
            subpages = sourceDoc.ref.collection("subpages");
            subpagesFiltered = subpages.where("news", "==", true);
            subpagesFilteredData = await subpagesFiltered.get();

            subpagesFilteredData.forEach((article) => {
                newsArticles.push({ ...article.data(), id: article.id });
            });
        }

        newsArticles.sort((a, b) => b.updatedAt - a.updatedAt);

        for (article of newsArticles) {
            printNewsArticle(article);
        }
    } else {
        news_section = document.getElementById("news");
        news_section.innerHTML += `
        <div class="news-action">
            <p class="card-text fs-4">
                We'll let you know when new information is added.
                In the mean time, feel free to view our list of curated topics!
            </p>
            <a
                href="./topics.html"
                class="btn btn-info py-3 px-5 fs-5"
                >View Topics</a
            >
        </div>
        `;
    }
}

async function printNewsArticle(doc) {
    sourceID = doc.sourceID;
    source = await db.collection("sources").doc(sourceID).get();
    console.log();
    sourceData = source.data();

    logo_URL = sourceData.sourceLogoUrl;

    const subpageURL = doc.subpageUrl;

    title = doc.subpageTitle;
    summary = doc.subpageSummary;

    news_section = document.getElementById("news");

    news_section.innerHTML += `
    <div class="news-article">
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
                        <a href="${subpageURL}" target="_blank" class="subpage-link">Visit Page</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function setup() {
    if (currentUser) {
        getNewsArticles();
    } else {
        getNewsArticles();
    }
}
