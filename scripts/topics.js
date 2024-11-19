function getCategoryToExpand() {
    const hash = window.location.hash;
    if (hash.includes("#category")) {
        return hash.replace("#category-", "").replace("-", " ");
    }
}

function populateKeywords(keywords) {
    // create local category variable for the button with dropdown
    let category = keywords[0].category;
    // create variable nameItems by creating ul
    var nameItems = document.createElement("ul");
    // create nameItems innerHTML as container to append clickable name links
    nameItems.innerHTML = ``;

    // loop through the keywords array
    for (let i = 0; i < keywords.length; i++) {
        // check if array is returned
        console.log(keywords[i]);

        // create local name variable for dropdown option
        let name = keywords[i].name;

        // no horizontal bar needed if there's only one name in category or i is the last number in category
        // Replace spaces with + in urls
        if (i == 1 || i == keywords.length - 1) {
            nameItems.innerHTML += `<li><a class=" mt-4 text-capitalize dropdown-item" href="/results.html?category=${category.replace(
                " ",
                "+"
            )}&topic=${name.replace(" ", "+")}">${name}</a></li>`;
        } else {
            nameItems.innerHTML += `<li><a class=" mt-3 text-capitalize dropdown-item" href="/results.html?category=${category.replace(
                " ",
                "+"
            )}&topic=${name.replace(" ", "+")}">${name}</a></li> <hr>`;
        }
    }
    // create local variable categoryItems to add to topics.html
    let categoryItems = document.createElement("div");

    // Determine if category accordion should be open based on url
    const expand = category === getCategoryToExpand();

    // create HTML element of button with dropdown
    // note the charAt to UpperCase is for proper formatting
    // and replace(' ', '-') is to remove any spaces found in category
    categoryItems.innerHTML = `
    <div class="mb-5 category-wrapper" id="category-${category.replace(
        " ",
        "-"
    )}">
        <div id="single-accordion-template" class="accordion accordion-flush">
            <div class="subpage-header accordion-item">
                <h3>
                <button class="accordion-button focusable text-capitalize ${
                    expand ? "" : "collapsed"
                }" type="button" data-bs-toggle="collapse" data-bs-target="#content-${category.replace(
        " ",
        "-"
    )}" aria-expanded=${
        expand ? "true" : "false"
    } aria-controls="content-${category.replace(" ", "-")}">${
        category.charAt(0).toUpperCase() + category.slice(1)
    }</button></h3>
            </div>

            <div id="content-${category.replace(
                " ",
                "-"
            )}" class="accordion-collapse collapse ${
        expand ? "show" : ""
    }" style="">
                <div class="">
                    <ul>
                        ${nameItems.innerHTML}
                    </ul>
                </div>
            </div>
        </div>
    </div>
        `;
    // append categoryItems HTML to topics.html under id "keywordCategory"
    document.getElementById("keywordCategory").append(categoryItems);
}

function getKeywords() {
    // get array of all documents with category "diseases"
    const diseases = db
        .collection("keywords")
        .where("category", "==", "diseases");

    diseases
        .get()
        .then((data) => {
            let keywords = data.docs.map((doc) => doc.data());
            console.log(keywords);
            populateKeywords(keywords);
        })
        .catch((error) => console.error(error));

    // get array of all documents with category "healthcare services"
    const healthcareServices = db
        .collection("keywords")
        .where("category", "==", "healthcare services");

    healthcareServices
        .get()
        .then((data) => {
            let keywords = data.docs.map((doc) => doc.data());
            console.log(keywords);
            populateKeywords(keywords);
        })
        .catch((error) => console.error(error));

    // get array of all documents with category "mental health"
    const mentalHealth = db
        .collection("keywords")
        .where("category", "==", "mental health");

    mentalHealth
        .get()
        .then((data) => {
            let keywords = data.docs.map((doc) => doc.data());
            console.log(keywords);
            populateKeywords(keywords);
        })
        .catch((error) => console.error(error));

    // get array of all documents with category "vaccines"
    const vaccines = db
        .collection("keywords")
        .where("category", "==", "vaccines");

    vaccines
        .get()
        .then((data) => {
            let keywords = data.docs.map((doc) => doc.data());
            console.log(keywords);
            populateKeywords(keywords);
        })
        .catch((error) => console.error(error));
}
getKeywords();
