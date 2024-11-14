const ADD_NOTIFICATION_ICON = "&#xe399;";
const REMOVE_NOTIFICATION_ICON = "&#xe7f6;";
const EDIT_NOTIFICATION_ICON = "&#xe525;";

function setBackLink(category) {
    document.querySelector(".back").href = `/topics?category=${category}`;
    document.querySelector(
        "#previous-page"
    ).innerText = `Topics: ${category.replaceAll("+", " ")}`;
}

function setResultsTitle(topic, search = false) {
    const titleHeader = document.querySelector("#results-title");
    titleHeader.innerText = search
        ? `Search Results for "${topic}"`
        : `${topic}`;
}

function getQueryTopic() {
    try {
        const params = new URL(window.location.href).searchParams;
        if (params.has("category")) {
            setBackLink(params.get("category"));
            const topic = params.get("topic").replaceAll("+", " ");
            setResultsTitle(topic);
            return {
                queryKeywords: topic?.toLowerCase().split(" "),
                textTopic: topic,
            };
        }
        if (params.has("query")) {
            const query = params.get("query");
            setResultsTitle(query, true);
            return {
                queryKeywords: query?.toLowerCase().split("+"),
                textTopic: `"${query?.replaceAll("+", " ")}"`,
            };
        }
        throw new Error("No valid search params");
    } catch (error) {
        console.error("Error getting topic", error);
    }
}

let currentUser;

const dummyResults = [
    {
        sourceUrl: "sourceUrl",
        sourceLogoUrl: "sourceLogoUrl",
        sourceName: "Source",
        id: "si0zxhc98gbwffcdv",
        path: "/sources/N04ecYckTRSBcqo3lhgP",
        subpages: [
            {
                subpageTitle: "subpageTitle",
                subpageUrl: "subpageUrl",
                path: "/sources/N04ecYckTRSBcqo3lhgP/subpages/vtdQmEGNYJpisemz9jU1",
                content:
                    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos iste sapiente fugit, recusandae quae neque vitae provident nobis sequi saepe tempora quo vero tenetur facere, ipsa voluptas non repellat quasi. Sequi rem velit totam consequuntur accusamus quos vitae soluta iure necessitatibus autem delectus facere assumenda ut distinctio ab, fuga enim, itaque suscipit inventore est et dolorem illum veritatis atque! Laborum quos pariatur minus quod. Explicabo eveniet odit eaque quis nisi neque voluptates, autem ex modi fugit corrupti quisquam maiores libero eum repudiandae doloremque aliquam voluptatum! Cum ducimus, amet ratione error sunt ab eveniet, harum, quaerat voluptate suscipit vero optio.</p>",
                id: "1",
            },
            {
                subpageTitle: "subpageTitle",
                subpageUrl: "subpageUrl",
                path: "/sources/N04ecYckTRSBcqo3lhgP/subpages/vtdQmEGNYJpisemz9jU1",
                content:
                    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos iste sapiente fugit, recusandae quae neque vitae provident nobis sequi saepe tempora quo vero tenetur facere, ipsa voluptas non repellat quasi. Sequi rem velit totam consequuntur accusamus quos vitae soluta iure necessitatibus autem delectus facere assumenda ut distinctio ab, fuga enim, itaque suscipit inventore est et dolorem illum veritatis atque! Laborum quos pariatur minus quod. Explicabo eveniet odit eaque quis nisi neque voluptates, autem ex modi fugit corrupti quisquam maiores libero eum repudiandae doloremque aliquam voluptatum! Cum ducimus, amet ratione error sunt ab eveniet, harum, quaerat voluptate suscipit vero optio.</p>",
                id: "2",
            },
            {
                subpageTitle: "subpageTitle",
                subpageUrl: "subpageUrl",
                path: "/sources/N04ecYckTRSBcqo3lhgP/subpages/vtdQmEGNYJpisemz9jU1",
                content:
                    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos iste sapiente fugit, recusandae quae neque vitae provident nobis sequi saepe tempora quo vero tenetur facere, ipsa voluptas non repellat quasi. Sequi rem velit totam consequuntur accusamus quos vitae soluta iure necessitatibus autem delectus facere assumenda ut distinctio ab, fuga enim, itaque suscipit inventore est et dolorem illum veritatis atque! Laborum quos pariatur minus quod. Explicabo eveniet odit eaque quis nisi neque voluptates, autem ex modi fugit corrupti quisquam maiores libero eum repudiandae doloremque aliquam voluptatum! Cum ducimus, amet ratione error sunt ab eveniet, harum, quaerat voluptate suscipit vero optio.</p>",
                id: "3",
            },
        ],
    },
    {
        sourceUrl: "sourceUrl",
        sourceLogoUrl: "sourceLogoUrl",
        sourceName: "Source",
        id: "si0zxhc98gbwffcdv",
        path: "/sources/N04ecYckTRSBcqo3lhgP",
        subpages: [
            {
                subpageTitle: "subpageTitle",
                subpageUrl: "subpageUrl",
                path: "/sources/N04ecYckTRSBcqo3lhgP/subpages/vtdQmEGNYJpisemz9jU1",
                content:
                    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos iste sapiente fugit, recusandae quae neque vitae provident nobis sequi saepe tempora quo vero tenetur facere, ipsa voluptas non repellat quasi. Sequi rem velit totam consequuntur accusamus quos vitae soluta iure necessitatibus autem delectus facere assumenda ut distinctio ab, fuga enim, itaque suscipit inventore est et dolorem illum veritatis atque! Laborum quos pariatur minus quod. Explicabo eveniet odit eaque quis nisi neque voluptates, autem ex modi fugit corrupti quisquam maiores libero eum repudiandae doloremque aliquam voluptatum! Cum ducimus, amet ratione error sunt ab eveniet, harum, quaerat voluptate suscipit vero optio.</p>",
                id: "4",
            },
            {
                subpageTitle: "subpageTitle",
                subpageUrl: "subpageUrl",
                path: "/sources/N04ecYckTRSBcqo3lhgP/subpages/vtdQmEGNYJpisemz9jU1",
                content:
                    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos iste sapiente fugit, recusandae quae neque vitae provident nobis sequi saepe tempora quo vero tenetur facere, ipsa voluptas non repellat quasi. Sequi rem velit totam consequuntur accusamus quos vitae soluta iure necessitatibus autem delectus facere assumenda ut distinctio ab, fuga enim, itaque suscipit inventore est et dolorem illum veritatis atque! Laborum quos pariatur minus quod. Explicabo eveniet odit eaque quis nisi neque voluptates, autem ex modi fugit corrupti quisquam maiores libero eum repudiandae doloremque aliquam voluptatum! Cum ducimus, amet ratione error sunt ab eveniet, harum, quaerat voluptate suscipit vero optio.</p>",
                id: "10",
            },
            {
                subpageTitle: "subpageTitle",
                subpageUrl: "subpageUrl",
                path: "/sources/N04ecYckTRSBcqo3lhgP/subpages/vtdQmEGNYJpisemz9jU1",
                content:
                    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos iste sapiente fugit, recusandae quae neque vitae provident nobis sequi saepe tempora quo vero tenetur facere, ipsa voluptas non repellat quasi. Sequi rem velit totam consequuntur accusamus quos vitae soluta iure necessitatibus autem delectus facere assumenda ut distinctio ab, fuga enim, itaque suscipit inventore est et dolorem illum veritatis atque! Laborum quos pariatur minus quod. Explicabo eveniet odit eaque quis nisi neque voluptates, autem ex modi fugit corrupti quisquam maiores libero eum repudiandae doloremque aliquam voluptatum! Cum ducimus, amet ratione error sunt ab eveniet, harum, quaerat voluptate suscipit vero optio.</p>",
                id: "5",
            },
            {
                subpageTitle: "subpageTitle",
                subpageUrl: "subpageUrl",
                path: "/sources/N04ecYckTRSBcqo3lhgP/subpages/vtdQmEGNYJpisemz9jU1",
                content:
                    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos iste sapiente fugit, recusandae quae neque vitae provident nobis sequi saepe tempora quo vero tenetur facere, ipsa voluptas non repellat quasi. Sequi rem velit totam consequuntur accusamus quos vitae soluta iure necessitatibus autem delectus facere assumenda ut distinctio ab, fuga enim, itaque suscipit inventore est et dolorem illum veritatis atque! Laborum quos pariatur minus quod. Explicabo eveniet odit eaque quis nisi neque voluptates, autem ex modi fugit corrupti quisquam maiores libero eum repudiandae doloremque aliquam voluptatum! Cum ducimus, amet ratione error sunt ab eveniet, harum, quaerat voluptate suscipit vero optio.</p>",
                id: "6",
            },
            {
                subpageTitle: "subpageTitle",
                subpageUrl: "subpageUrl",
                path: "/sources/N04ecYckTRSBcqo3lhgP/subpages/vtdQmEGNYJpisemz9jU1",
                content:
                    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos iste sapiente fugit, recusandae quae neque vitae provident nobis sequi saepe tempora quo vero tenetur facere, ipsa voluptas non repellat quasi. Sequi rem velit totam consequuntur accusamus quos vitae soluta iure necessitatibus autem delectus facere assumenda ut distinctio ab, fuga enim, itaque suscipit inventore est et dolorem illum veritatis atque! Laborum quos pariatur minus quod. Explicabo eveniet odit eaque quis nisi neque voluptates, autem ex modi fugit corrupti quisquam maiores libero eum repudiandae doloremque aliquam voluptatum! Cum ducimus, amet ratione error sunt ab eveniet, harum, quaerat voluptate suscipit vero optio.</p>",
                id: "7",
            },
            {
                subpageTitle: "subpageTitle",
                subpageUrl: "subpageUrl",
                path: "/sources/N04ecYckTRSBcqo3lhgP/subpages/vtdQmEGNYJpisemz9jU1",
                content:
                    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos iste sapiente fugit, recusandae quae neque vitae provident nobis sequi saepe tempora quo vero tenetur facere, ipsa voluptas non repellat quasi. Sequi rem velit totam consequuntur accusamus quos vitae soluta iure necessitatibus autem delectus facere assumenda ut distinctio ab, fuga enim, itaque suscipit inventore est et dolorem illum veritatis atque! Laborum quos pariatur minus quod. Explicabo eveniet odit eaque quis nisi neque voluptates, autem ex modi fugit corrupti quisquam maiores libero eum repudiandae doloremque aliquam voluptatum! Cum ducimus, amet ratione error sunt ab eveniet, harum, quaerat voluptate suscipit vero optio.</p>",
                id: "8",
            },
            {
                subpageTitle: "subpageTitle",
                subpageUrl: "subpageUrl",
                path: "/sources/N04ecYckTRSBcqo3lhgP/subpages/vtdQmEGNYJpisemz9jU1",
                content:
                    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos iste sapiente fugit, recusandae quae neque vitae provident nobis sequi saepe tempora quo vero tenetur facere, ipsa voluptas non repellat quasi. Sequi rem velit totam consequuntur accusamus quos vitae soluta iure necessitatibus autem delectus facere assumenda ut distinctio ab, fuga enim, itaque suscipit inventore est et dolorem illum veritatis atque! Laborum quos pariatur minus quod. Explicabo eveniet odit eaque quis nisi neque voluptates, autem ex modi fugit corrupti quisquam maiores libero eum repudiandae doloremque aliquam voluptatum! Cum ducimus, amet ratione error sunt ab eveniet, harum, quaerat voluptate suscipit vero optio.</p>",
                id: "9",
            },
        ],
    },
    {
        sourceUrl: "sourceUrl",
        sourceLogoUrl: "sourceLogoUrl",
        sourceName: "Source",
        id: "si0zxhc98gbwffcdv",
        path: "/sources/N04ecYckTRSBcqo3lhgP",
        subpages: [
            {
                subpageTitle: "subpageTitle",
                subpageUrl: "subpageUrl",
                path: "/sources/N04ecYckTRSBcqo3lhgP/subpages/vtdQmEGNYJpisemz9jU1",
                content:
                    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos iste sapiente fugit, recusandae quae neque vitae provident nobis sequi saepe tempora quo vero tenetur facere, ipsa voluptas non repellat quasi. Sequi rem velit totam consequuntur accusamus quos vitae soluta iure necessitatibus autem delectus facere assumenda ut distinctio ab, fuga enim, itaque suscipit inventore est et dolorem illum veritatis atque! Laborum quos pariatur minus quod. Explicabo eveniet odit eaque quis nisi neque voluptates, autem ex modi fugit corrupti quisquam maiores libero eum repudiandae doloremque aliquam voluptatum! Cum ducimus, amet ratione error sunt ab eveniet, harum, quaerat voluptate suscipit vero optio.</p>",
                id: "8",
            },
        ],
    },
];

// TODO: rework with template and handle source subscriptions
const loadResults = async () => {
    console.log("loading");

    const queryTopic = getQueryTopic();
    console.log(queryTopic);

    firebase.auth().onAuthStateChanged(async (user) => {
        let loggedIn = !!user;

        const resultsWrapper = document.querySelector("#results-wrapper");
        resultsWrapper?.replaceChildren();
        // let currentUserDoc;
        // let userSubscriptions = {};

        if (loggedIn) {
            db.collection("users")
                .doc(user.uid)
                .onSnapshot((currentUserDoc) => {
                    const userSubscriptions =
                        getUserSubscriptions(currentUserDoc);
                    getResultsForTab(
                        resultsWrapper,
                        queryTopic?.queryKeywords,
                        "province",
                        "BC"
                    );
                });
        }

        dummyResults.forEach((result) => {
            let subpages = "";

            result.subpages.forEach((subpage) => {
                const userSubscribedToSubpage = false;
                // userSubscriptions.subscriptionPaths.includes(
                //     subpage.path.substring(1)
                // );
                console.log("userSubscribedToSubpage", userSubscribedToSubpage);
                const subpageAccordionItem = `<div class="subpage-item accordion-item">
                                    <div class="subpage-header accordion-header">
                                        <h3>${subpage.subpageTitle}</h3>
                                        ${
                                            loggedIn
                                                ? `<button
                                            type="button"
                                            class="${
                                                userSubscribedToSubpage
                                                    ? "subscribed"
                                                    : "not-subscribed"
                                            } subpage-subscribe subscribe btn"
                                            data-subpage-path="${subpage.path}"
                                        >
                                            <span class="material-icons"
                                                >${
                                                    userSubscribedToSubpage
                                                        ? REMOVE_NOTIFICATION_ICON
                                                        : ADD_NOTIFICATION_ICON
                                                }
                                            </span>
                                        </button>`
                                                : `<button
                                            type="button"
                                            class="logged-out subpage-subscribe subscribe btn"
                                        >
                                            <span class="material-icons"
                                                >&#xe399;
                                            </span>
                                        </button>`
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
                                                href="${subpage.subpageUrl}"
                                                class="subpage-link"
                                                >Visit Page</a
                                            >
                                        </div>
                                    </div>
                                </div>`;

                subpages += subpageAccordionItem;
            });

            const sourceAccordionItem = `<section class="source-block" data-source-id="${
                result.id
            }">
                                    <div class="source">
                                        <h2>
                                            <span class="d-none d-sm-inline">From: </span
                                            ><a class="source-link" href="${
                                                result.sourceUrl
                                            }"
                                                ><img
                                                    src="${
                                                        result.sourceLogoUrl
                                                    }"
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
                                                                data-sourse-path="${result.path}"
                                                                type="button"
                                                            >
                                                                Subscribe to all updates from ${result.sourceName}
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

        loadTopicSpans(queryTopic?.textTopic);

        if (loggedIn) {
            hideOnLogin();
            showOnLogin();
            $("#results-wrapper").on(
                "click",
                ".not-subscribed",
                addSubscriptionHandler
            );
            $("#results-wrapper").on(
                "click",
                ".subscribed",
                removeSubscriptionHandler
            );

            if (location) {
                hideIfLocation();
            }
        } else {
            hideOnLogout();
            showOnLogout();
        }
    });
};

loadResults();

function loadTopicSpans(topicText) {
    const topicSpans = document.querySelectorAll(".topic-span");
    for (const span of topicSpans) {
        span.innerText = topicText;
    }
}

function hideOnLogin() {
    const loggedOutElements = document.querySelectorAll("hide-on-login");
    for (const element of loggedOutElements) {
        element.classList.add("d-none");
    }
}

function hideIfLocation() {
    const loggedOutElements = document.querySelectorAll("hide-if-location");
    for (const element of loggedOutElements) {
        element.classList.add("d-none");
    }
}

function showOnLogin() {
    const loggedOutElements = document.querySelectorAll("show-on-login");
    for (const element of loggedOutElements) {
        element.classList.remove("d-none");
    }
}

function hideOnLogout() {
    const loggedOutElements = document.querySelectorAll("show-on-login");
    for (const element of loggedOutElements) {
        element.classList.add("d-none");
    }
}

function showOnLogout() {
    const loggedOutElements = document.querySelectorAll("hide-on-login");
    for (const element of loggedOutElements) {
        element.classList.remove("d-none");
    }
}

async function getResultsForTab(
    tabWrapperElement,
    queryKeywords,
    govLevel,
    location
) {
    let sourcesQuery = db
        .collection("sources")
        .where("keywords", "array-contains-any", queryKeywords)
        .where("jurisdiction.governmentLevel", "==", `${govLevel}`);

    if (location && govLevel === "provincial") {
        sourcesQuery = db
            .collection("sources")
            .where("keywords", "array-contains-any", queryKeywords)
            .where("jurisdiction.governmentLevel", "==", `${govLevel}`)
            .where("jurisdiction.location", "==", location);
    }
    if (location && govLevel === "local") {
        sourcesQuery = db
            .collection("sources")
            .where("keywords", "array-contains-any", queryKeywords)
            .where("jurisdiction.governmentLevel", "==", `city`)
            .where("jurisdiction.location", "array-conatins", location);
    }

    sourcesQuery
        .get()
        .then((sourcesSnapshot) => {
            if (sourcesSnapshot.empty) {
                console.log(
                    "no results for query",
                    queryKeywords,
                    sourcesSnapshot
                );
                return [];
            }
            sourcesSnapshot.forEach((sourceDoc) => {
                const sourceData = {
                    sourceUrl: sourceDoc.data().sourceUrl,
                    sourceLogoUrl: sourceDoc.data().sourceLogoUrl,
                    sourceName: sourceDoc.data().sourceName,
                    id: sourceDoc.id,
                    path: `/sources/${sourceDoc.id}`,
                };
                console.log(sourceData);
                //create source block

                sourceDoc.ref
                    .collection("subpages")
                    .where("keywords", "array-contains-any", queryKeywords)
                    .get()
                    .then((subpagesSnapshot) => {
                        if (subpagesSnapshot.empty) {
                            console.log(
                                "no subpage results for query",
                                queryKeywords,
                                subpagesSnapshot
                            );
                        }
                        subpagesSnapshot.forEach((subpageDoc) => {
                            const subpageData = {
                                subpageTitle: subpageDoc.data().subpageTitle,
                                subpageUrl: subpageDoc.data().subpageUrl,
                                path: `/sources/${sourceDoc.id}/subpages/${subpageDoc.id}`,
                                content: subpageDoc.data().content,
                                id: subpageDoc.id,
                            };

                            console.log(subpageData);
                            // create subpage accordion item
                            // append to source block
                            // append source block to results wrapper
                        });
                    })
                    .catch((error) =>
                        console.error("Error getting subpages", error)
                    );
            });
        })
        .catch((error) => console.error("Error getting sources"));
}

function getUserSubscriptions(userDoc) {
    try {
        if (!userDoc.data().subscriptions) {
            return [];
        }

        const subscriptions = userDoc.data().subscriptions;

        const subscriptionPaths = subscriptions.map((subscription) => {
            if (subscription.path) {
                return subscription.path;
            }
        });
        console.log(
            `user subscription paths for ${userDoc.id}`,
            subscriptionPaths
        );

        const sourceSearches = subscriptions.filter(
            (subscription) => subscription.search && subscription.sourceRef
        );
        const noSourceSearches = subscriptions.filter(
            (subscription) => subscription.search && !subscription.sourceRef
        );

        return { subscriptionPaths, sourceSearches, noSourceSearches };
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function addUserSubscription(userId, subscriptionPath) {
    const updated = await db
        .collection("users")
        .doc(userId)
        .update({
            subscriptions: firebase.firestore.FieldValue.arrayUnion(
                db.doc(subscriptionPath)
            ),
        });

    console.log(`sub added for user ${userId}`);
}

// TODO make single handler
async function addSubscriptionHandler(event) {
    const target = event.currentTarget;

    const subscriptionPath = target.dataset.subpagePath;

    console.log("add path to sub", subscriptionPath);

    console.log("add target", target);
    target.classList.add("subscribed");
    target.classList.remove("not-subscribed");
    // target.removeEventListener("click", addSubscriptionHandler);
    console.log("icon span", target.querySelector(".material-icons"));

    const removeNotificationSpan = document.createElement("span");
    removeNotificationSpan.classList.add("material-icons");
    removeNotificationSpan.innerHTML = REMOVE_NOTIFICATION_ICON;
    target.querySelector(".material-icons").replaceWith(removeNotificationSpan);
    // target.addEventListener("click", removeUserSubscription);
    await addUserSubscription(currentUser.uid, subscriptionPath);
}

async function removeUserSubscription(userId, subscriptionPath) {
    const updated = db
        .collection("users")
        .doc(userId)
        .update({
            subscriptions: firebase.firestore.FieldValue.arrayRemove(
                db.doc(subscriptionPath)
            ),
        });

    console.log(`sub removed for user ${userId}`, updated);
}

async function removeSubscriptionHandler(event) {
    const target = event.currentTarget;
    const subscriptionPath = target.dataset.subpagePath;

    console.log("remove path to sub", subscriptionPath);

    console.log("remove target", target);
    target.classList.remove("subscribed");
    target.classList.add("not-subscribed");
    // target.removeEventListener("click", removeSubscriptionHandler);
    console.log("icon span", target.querySelector(".material-icons"));
    const addNotificationSpan = document.createElement("span");
    addNotificationSpan.classList.add("material-icons");
    addNotificationSpan.innerHTML = ADD_NOTIFICATION_ICON;
    target.querySelector(".material-icons").replaceWith(addNotificationSpan);
    // target.addEventListener("click", addUserSubscription);
    await removeUserSubscription(currentUser.uid, subscriptionPath);
}
