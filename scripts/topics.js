const ADD_NOTIFICATION_ICON = "&#xe399;";
const REMOVE_NOTIFICATION_ICON = "&#xe7f6;";
const EDIT_NOTIFICATION_ICON = "&#xe525;";

function populateKeywords(keywords) {
    for (i = 0; i <= keywords.length; i++) {
        // check if array is returned
        console.log(keywords[i]);

        // create local name variable for dropdown option
        let name = keywords[i].name;
        let nameItems = document.createElement('li');

        // create local category variable for the button with dropdown
        let category = keywords[i].category;
        nameItems.innerHTML = `
        <a class="dropdown-item" href="/results.html?category=${category}&topic=${name}">${name}</a>
        `;
        let categoryItems = document.createElement('div');
        // create HTML element of button with dropdown
        // note the charAt to UpperCase is for proper formatting
        categoryItems.innerHTML = `
        <div id="single-accordion-template" class="accordion accordion-flush">
            <div class="subpage-header accordion-item">
                <h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                <button class="accordion-button custom collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#content" aria-expanded="false" aria-controls="content"></button>
            </div>

            <div id="content" class="accordion-collapse collapse" style="">
                <div class="embed">
                    <ul>
                        ${nameItems.innerHTML}
                    </ul>
                </div>
            </div>
        </div>
        `;
        // append categoryItems HTML to topics.html under id "keywordCategory"
        document.getElementById("keywordCategory").append(categoryItems);
    }
}

async function getKeywords() {
    const snapshot = await db
        .collection("keywords")
        .get()
        .then((data) => {
            let keywords = data.docs.map((doc) => doc.data());
            populateKeywords(keywords);
        });
}
getKeywords();
