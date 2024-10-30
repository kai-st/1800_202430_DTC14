const addNotificationsIcon = "&#xe399;";
const removeNotificationsIcon = "&#xe7f6;";
const editNotificationsIcon = "&#xe525;";

let loggedIn = true;

let topic = "Topic";

const dummyResults = [
    {
        sourceLinkUrl: "sourceLinkUrl",
        sourceLogoUrl: "sourceLogoUrl",
        source: "Source",
        subpages: [
            {
                subpageTitle: "subpageTitle",
                subpageLinkUrl: "subpageLinkUrl",
                content:
                    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos iste sapiente fugit, recusandae quae neque vitae provident nobis sequi saepe tempora quo vero tenetur facere, ipsa voluptas non repellat quasi. Sequi rem velit totam consequuntur accusamus quos vitae soluta iure necessitatibus autem delectus facere assumenda ut distinctio ab, fuga enim, itaque suscipit inventore est et dolorem illum veritatis atque! Laborum quos pariatur minus quod. Explicabo eveniet odit eaque quis nisi neque voluptates, autem ex modi fugit corrupti quisquam maiores libero eum repudiandae doloremque aliquam voluptatum! Cum ducimus, amet ratione error sunt ab eveniet, harum, quaerat voluptate suscipit vero optio.</p>",
                id: "1",
            },
            {
                subpageTitle: "subpageTitle",
                subpageLinkUrl: "subpageLinkUrl",
                content:
                    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos iste sapiente fugit, recusandae quae neque vitae provident nobis sequi saepe tempora quo vero tenetur facere, ipsa voluptas non repellat quasi. Sequi rem velit totam consequuntur accusamus quos vitae soluta iure necessitatibus autem delectus facere assumenda ut distinctio ab, fuga enim, itaque suscipit inventore est et dolorem illum veritatis atque! Laborum quos pariatur minus quod. Explicabo eveniet odit eaque quis nisi neque voluptates, autem ex modi fugit corrupti quisquam maiores libero eum repudiandae doloremque aliquam voluptatum! Cum ducimus, amet ratione error sunt ab eveniet, harum, quaerat voluptate suscipit vero optio.</p>",
                id: "2",
            },
            {
                subpageTitle: "subpageTitle",
                subpageLinkUrl: "subpageLinkUrl",
                content:
                    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos iste sapiente fugit, recusandae quae neque vitae provident nobis sequi saepe tempora quo vero tenetur facere, ipsa voluptas non repellat quasi. Sequi rem velit totam consequuntur accusamus quos vitae soluta iure necessitatibus autem delectus facere assumenda ut distinctio ab, fuga enim, itaque suscipit inventore est et dolorem illum veritatis atque! Laborum quos pariatur minus quod. Explicabo eveniet odit eaque quis nisi neque voluptates, autem ex modi fugit corrupti quisquam maiores libero eum repudiandae doloremque aliquam voluptatum! Cum ducimus, amet ratione error sunt ab eveniet, harum, quaerat voluptate suscipit vero optio.</p>",
                id: "3",
            },
        ],
    },
    {
        sourceLinkUrl: "sourceLinkUrl",
        sourceLogoUrl: "sourceLogoUrl",
        source: "Source",
        subpages: [
            {
                subpageTitle: "subpageTitle",
                subpageLinkUrl: "subpageLinkUrl",
                content:
                    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos iste sapiente fugit, recusandae quae neque vitae provident nobis sequi saepe tempora quo vero tenetur facere, ipsa voluptas non repellat quasi. Sequi rem velit totam consequuntur accusamus quos vitae soluta iure necessitatibus autem delectus facere assumenda ut distinctio ab, fuga enim, itaque suscipit inventore est et dolorem illum veritatis atque! Laborum quos pariatur minus quod. Explicabo eveniet odit eaque quis nisi neque voluptates, autem ex modi fugit corrupti quisquam maiores libero eum repudiandae doloremque aliquam voluptatum! Cum ducimus, amet ratione error sunt ab eveniet, harum, quaerat voluptate suscipit vero optio.</p>",
                id: "4",
            },
            {
                subpageTitle: "subpageTitle",
                subpageLinkUrl: "subpageLinkUrl",
                content:
                    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos iste sapiente fugit, recusandae quae neque vitae provident nobis sequi saepe tempora quo vero tenetur facere, ipsa voluptas non repellat quasi. Sequi rem velit totam consequuntur accusamus quos vitae soluta iure necessitatibus autem delectus facere assumenda ut distinctio ab, fuga enim, itaque suscipit inventore est et dolorem illum veritatis atque! Laborum quos pariatur minus quod. Explicabo eveniet odit eaque quis nisi neque voluptates, autem ex modi fugit corrupti quisquam maiores libero eum repudiandae doloremque aliquam voluptatum! Cum ducimus, amet ratione error sunt ab eveniet, harum, quaerat voluptate suscipit vero optio.</p>",
                id: "4",
            },
            {
                subpageTitle: "subpageTitle",
                subpageLinkUrl: "subpageLinkUrl",
                content:
                    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos iste sapiente fugit, recusandae quae neque vitae provident nobis sequi saepe tempora quo vero tenetur facere, ipsa voluptas non repellat quasi. Sequi rem velit totam consequuntur accusamus quos vitae soluta iure necessitatibus autem delectus facere assumenda ut distinctio ab, fuga enim, itaque suscipit inventore est et dolorem illum veritatis atque! Laborum quos pariatur minus quod. Explicabo eveniet odit eaque quis nisi neque voluptates, autem ex modi fugit corrupti quisquam maiores libero eum repudiandae doloremque aliquam voluptatum! Cum ducimus, amet ratione error sunt ab eveniet, harum, quaerat voluptate suscipit vero optio.</p>",
                id: "5",
            },
            {
                subpageTitle: "subpageTitle",
                subpageLinkUrl: "subpageLinkUrl",
                content:
                    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos iste sapiente fugit, recusandae quae neque vitae provident nobis sequi saepe tempora quo vero tenetur facere, ipsa voluptas non repellat quasi. Sequi rem velit totam consequuntur accusamus quos vitae soluta iure necessitatibus autem delectus facere assumenda ut distinctio ab, fuga enim, itaque suscipit inventore est et dolorem illum veritatis atque! Laborum quos pariatur minus quod. Explicabo eveniet odit eaque quis nisi neque voluptates, autem ex modi fugit corrupti quisquam maiores libero eum repudiandae doloremque aliquam voluptatum! Cum ducimus, amet ratione error sunt ab eveniet, harum, quaerat voluptate suscipit vero optio.</p>",
                id: "6",
            },
            {
                subpageTitle: "subpageTitle",
                subpageLinkUrl: "subpageLinkUrl",
                content:
                    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos iste sapiente fugit, recusandae quae neque vitae provident nobis sequi saepe tempora quo vero tenetur facere, ipsa voluptas non repellat quasi. Sequi rem velit totam consequuntur accusamus quos vitae soluta iure necessitatibus autem delectus facere assumenda ut distinctio ab, fuga enim, itaque suscipit inventore est et dolorem illum veritatis atque! Laborum quos pariatur minus quod. Explicabo eveniet odit eaque quis nisi neque voluptates, autem ex modi fugit corrupti quisquam maiores libero eum repudiandae doloremque aliquam voluptatum! Cum ducimus, amet ratione error sunt ab eveniet, harum, quaerat voluptate suscipit vero optio.</p>",
                id: "7",
            },
        ],
    },
    {
        sourceLinkUrl: "sourceLinkUrl",
        sourceLogoUrl: "sourceLogoUrl",
        source: "Source",
        subpages: [
            {
                subpageTitle: "subpageTitle",
                subpageLinkUrl: "subpageLinkUrl",
                content:
                    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos iste sapiente fugit, recusandae quae neque vitae provident nobis sequi saepe tempora quo vero tenetur facere, ipsa voluptas non repellat quasi. Sequi rem velit totam consequuntur accusamus quos vitae soluta iure necessitatibus autem delectus facere assumenda ut distinctio ab, fuga enim, itaque suscipit inventore est et dolorem illum veritatis atque! Laborum quos pariatur minus quod. Explicabo eveniet odit eaque quis nisi neque voluptates, autem ex modi fugit corrupti quisquam maiores libero eum repudiandae doloremque aliquam voluptatum! Cum ducimus, amet ratione error sunt ab eveniet, harum, quaerat voluptate suscipit vero optio.</p>",
                id: "8",
            },
        ],
    },
];

const loadResults = () => {
    console.log("loading");
    if (dummyResults?.length == 0) {
        return;
    }

    $("#results-wrapper").empty();

    dummyResults.forEach((result) => {
        let subpages = "";

        result.subpages.forEach((subpage) => {
            const subpageAccordionItem = `<div class="subpage-item accordion-item">
                                <div class="subpage-header accordion-header">
                                    <h3>${subpage.subpageTitle}</h3>
                                    ${
                                        loggedIn
                                            ? `<button
                                        type="button"
                                        class="subpage-subscribe subscribe btn"
                                    >
                                        <span class="material-icons"
                                            >&#xe399;
                                        </span>
                                    </button>`
                                            : ""
                                    }
                                    <button
                                        class="accordion-button custom collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#embed${subpage.id}"
                                        aria-expanded="false"
                                        aria-controls="embed${subpage.id}"
                                    ></button>
                                </div>
                                <div
                                    id="embed${subpage.id}"
                                    class="accordion-collapse collapse"
                                >
                                    <div class="embed">
                                        <div class="embed-content">
                                            ${subpage.content}
                                        </div>
                                        <a
                                            href="${subpage.subpageLinkUrl}"
                                            class="subpage-link"
                                            >Visit Page</a
                                        >
                                    </div>
                                </div>
                            </div>`;

            subpages += subpageAccordionItem;
        });

        const sourceAccordionItem = `<section class="source-block">
                                <div class="source">
                                    <h2>
                                        <span class="d-none d-sm-inline">From: </span
                                        ><a class="source-link" href="${
                                            result.sourceLinkUrl
                                        }"
                                            ><img
                                                src="${result.sourceLogoUrl}"
                                                class="source-logo"
                                            />Domain</a
                                        >
                                    </h2>
                                    <div class="results-tag">
                                        (${result.subpages.length} results)
                                    </div>
                                    ${
                                        loggedIn
                                            ? `<div class="btn-group dropup">
                                                <button
                                                    type="button"
                                                    class="source-subscribe subscribe btn dropdown-toggle"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <span class="material-icons">&#xe399; </span>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-end">
                                                    <li>
                                                        <button
                                                            class="subscribe-topic dropdown-item"
                                                            type="button"
                                                        >
                                                            Subscribe to updates on ${result.topic}
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button
                                                            class="subscribe-all dropdown-item"
                                                            type="button"
                                                        >
                                                            Subscribe to all updates from ${result.source}
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>`
                                            : ""
                                    }                                    
                                </div>
                                <div
                                    class="subpages accordion accordion-flush ms-md-5"
                                >
                                ${subpages}
                                <button
                                    class="view-more-btn btn btn-info"
                                    type="button"
                                >
                                    View More
                                </button>
                                </div>
                            </section>`;

        $("#results-wrapper").append(sourceAccordionItem);
    });
};

loadResults();
