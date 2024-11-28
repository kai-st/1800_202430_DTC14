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
        .where("jurisdiction.governmentLevel", "==", `national`)
        .get();
    allNewsArticles.push(...sourcesFederalSnapshot.docs);

    if (currentUser) {
        const userRef = db.collection("users").doc(currentUser.uid);
        const userSnapshot = await userRef.get();

        if (userSnapshot.data().province) {
            const userProvince = userSnapshot.data().province;
            const userCity = userSnapshot.data().city;

            const sourcesProvincialSnapshot = await sources
                .where("jurisdiction.governmentLevel", "==", "province")
                .where("jurisdiction.location", "==", userProvince)
                .get();
            allNewsArticles.push(...sourcesProvincialSnapshot.docs);

            const sourcesMunicipalSnapshot = await sources
                .where("jurisdiction.governmentLevel", "==", "city")
                .where("jurisdiction.location", "array-contains", userCity)
                .get();
            allNewsArticles.push(...sourcesMunicipalSnapshot.docs);

            const newsForCity = document.getElementById("newsForCity")
            newsForCity.innerHTML = `
            <div class="py-5 px-3 text-center">
                    <h1 class="pb-3">News for ${userCity}</h1>
                </div>
            `
        }
    }

    if (allNewsArticles.length > 0) {
        uniqueNewsArticles = [...new Set(allNewsArticles)];

        for (const sourceDoc of allNewsArticles) {
            const subpages = sourceDoc.ref.collection("subpages");
            const subpagesFiltered = subpages.where("news", "==", true);
            const subpagesFilteredData = await subpagesFiltered.get();

            subpagesFilteredData.forEach((article) => {
                newsArticles.push({ ...article.data(), id: article.id });
            });
        }

        newsArticles.sort((a, b) => b.updatedAt - a.updatedAt);

        for (const article of newsArticles) {
            printNewsArticle(article);
        }
    } else {
        const news_section = document.getElementById("news");
        news_section.innerHTML += `
        <div class="news-action card">
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
    const sourceID = doc.sourceID;
    const source = await db.collection("sources").doc(sourceID).get();
    console.log();
    const sourceData = source.data();

    const logo_URL = sourceData.sourceLogoUrl;

    const subpageURL = doc.subpageUrl;

    const title = doc.subpageTitle;
    const summary = doc.subpageSummary;

    const news_section = document.getElementById("news");

    news_section.innerHTML += `
    <div class="news-article">
            <div id="single-accordion-template" class="subpage-item accordion">
                <div class="subpage-header accordion-header">
                    <h3 class="pb-1 pb-sm-0"><span class="d-none d-sm-inline">From: </span>
                        <a class="source-link" target="_blank" href="${sourceData.sourceUrl}">
                            <img src="${logo_URL}" class="source-logo" /><span
                                class="source-name"
                            >
                                ${sourceData.sourceName} 
                            </span></a
                        ><span> -  ${title}</span></h3>
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
