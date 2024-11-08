function populateKeywords(keywords) {
    for (i = 0; i <= keywords.length; i++) {
        // check if array is returned
        console.log(keywords[i]);

        // create local name variable for dropdown option
        let name = keywords[i].name
        let nameItems = document.createElement('li')
        nameItems.innerHTML = `
        <a class="dropdown-item" href="/results.html?topic=${name}">${name}</a>
        `

        // create local category variable for the button with dropdown
        let category = keywords[i].category
        let categoryItems = document.createElement('div')
        // create HTML element of button with dropdown
        // note the charAt to UpperCase is for proper formatting
        categoryItems.innerHTML = `
        <div class="px-3 pb-5 text-center">
                <button class="btn btn-primary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    ${category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
                <ul class="dropdown-menu">
                ${nameItems.innerHTML}
                </ul>
        </div>
        `
        // append categoryItems HTML to topics.html under id "keywordCategory"
        document.getElementById("keywordCategory").append(categoryItems)
    }
}

async function getKeywords() {
    const snapshot = await db.collection("keywords")
        .get()
        .then(data => {
            let keywords = data.docs.map(doc => doc.data())
            populateKeywords(keywords)
        })
}
getKeywords();
