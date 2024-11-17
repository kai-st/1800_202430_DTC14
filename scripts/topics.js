const ADD_NOTIFICATION_ICON = "&#xe399;";
const REMOVE_NOTIFICATION_ICON = "&#xe7f6;";
const EDIT_NOTIFICATION_ICON = "&#xe525;";

function populateKeywords(keywords) {
    // create local category variable for the button with dropdown
    let category = keywords[0].category;
    // create variable nameItems by creating ul
    var nameItems = document.createElement('ul');
    // create nameItems innerHTML as container to append clickable name links
    nameItems.innerHTML = ``

    // loop through the keywords array
    for (i = 0; i < keywords.length; i++) {
        // check if array is returned
        console.log(keywords[i]);

        // create local name variable for dropdown option
        let name = keywords[i].name;

        // no horizontal bar needed if there's only one name in category or i is the last number in category
        if (i == 1 || i == (keywords.length - 1)) {
            nameItems.innerHTML += `<a class=" mt-4 dropdown-item" href="/results.html?category=${category}&topic=${name}">${name}</a>`
        }
        else {
            nameItems.innerHTML += `<a class=" mt-3 dropdown-item" href="/results.html?category=${category}&topic=${name}">${name}</a> <hr>`
        }
    }
    // create local variable categoryItems to add to topics.html
    let categoryItems = document.createElement('div');

    // create HTML element of button with dropdown
    // note the charAt to UpperCase is for proper formatting
    categoryItems.innerHTML = `
    <div class="mb-5" id="results-wrapper">
        <div id="single-accordion-template" class="accordion accordion-flush">
            <div class="subpage-header accordion-item">
                <h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                <button class="accordion-button custom collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#content" aria-expanded="false" aria-controls="content"></button>
            </div>

            <div id="content" class="accordion-collapse collapse" style="">
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

async function getKeywords() {

    // get array of all documents with category "diseases"
    const diseases = await db.collection("keywords")
        .where("category", "==", "diseases")
    
    diseases
        .get()
        .then((data) => {
            let keywords = data.docs.map((doc) => doc.data());
            console.log(keywords);
            populateKeywords(keywords);
        })
    
    // get array of all documents with category "healthcare services"
    const healthcareServices = await db.collection("keywords")
        .where("category", "==", "healthcare services")
        
        healthcareServices
        .get()
        .then((data) => {
            let keywords = data.docs.map((doc) => doc.data());
            console.log(keywords);
            populateKeywords(keywords);
        })

    // get array of all documents with category "mental health"
    const mentalHealth = await db.collection("keywords")
        .where("category", "==", "mental health")

    mentalHealth
    .get()
    .then((data) => {
        let keywords = data.docs.map((doc) => doc.data());
        console.log(keywords);
        populateKeywords(keywords);
    })
    
    // get array of all documents with category "vaccines"
    const vaccines = await db.collection("keywords")
        .where("category", "==", "vaccines")

    vaccines
    .get()
    .then((data) => {
        let keywords = data.docs.map((doc) => doc.data());
        console.log(keywords);
        populateKeywords(keywords);
    })
}
getKeywords();
