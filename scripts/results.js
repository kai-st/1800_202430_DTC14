const ADD_NOTIFICATION_ICON = "&#xe399;";
const REMOVE_NOTIFICATION_ICON = "&#xe7f6;";
const EDIT_NOTIFICATION_ICON = "&#xe525;";

function setBackLink(category) {
    document.querySelector(
        ".back"
    ).href = `/topics.html#category-${category.replace(" ", "-")}`;
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
            const topic = params.get("topic");
            if (!topic) {
                throw new Error("No topic found");
            }
            setResultsTitle(topic);
            return {
                queryKeywords: [topic?.toLowerCase()],
                textTopic: topic,
            };
        }
        if (params.has("query")) {
            const query = params.get("query");
            console.log("raw query", query);
            if (!query) {
                throw new Error("No query found");
            }
            setResultsTitle(query, true);
            return {
                queryKeywords: query?.toLowerCase().split(" "),
                textTopic: `"${query}"`,
            };
        }
        throw new Error("No valid search params");
    } catch (error) {
        console.error("Error getting topic", error);
    }
}

function attachTabListeners() {
    const tabs = document.querySelectorAll(".location-tab");
    for (const tab of tabs) {
        tab.addEventListener("click", (event) => {
            const target = event.currentTarget;
            const tabpanelId = target.getAttribute("aria-controls") + "-tab";
            const tabPanel = document.querySelector(`#${tabpanelId}`);
            console.log("tabPanelID", tabpanelId);
            console.log("tabPanel", tabPanel);
            const tabsArray = Array.from(
                document.querySelectorAll(".location-tab")
            );
            const activeTab = tabsArray.find(
                (tabLi) => tabLi.ariaSelected === "true"
            );
            const activeTabpanelId =
                activeTab.getAttribute("aria-controls") + "-tab";
            const activeTabpanel = document.querySelector(
                `#${activeTabpanelId}`
            );
            activeTab.ariaSelected = "false";
            target.ariaSelected = "true";
            activeTabpanel?.classList.add("d-none");
            tabPanel?.classList.remove("d-none");
        });
    }
}
attachTabListeners();

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

const loadResults = async () => {
    console.log("loading");

    const queryTopic = getQueryTopic();
    console.log(queryTopic);

    firebase.auth().onAuthStateChanged(async (user) => {
        let loggedIn = !!user;

        const nationalTabpanel = document.querySelector("#national-tab");
        const provinceTabpanel = document.querySelector("#province-tab");
        const cityTabpanel = document.querySelector("#city-tab");

        if (loggedIn) {
            db.collection("users")
                .doc(user.uid)
                .onSnapshot((currentUserDoc) => {
                    personalizeTabs(currentUserDoc);
                    loadResultsForTab(
                        nationalTabpanel,
                        queryTopic,
                        "national",
                        currentUserDoc
                    );
                    loadResultsForTab(
                        provinceTabpanel,
                        queryTopic,
                        "province",
                        currentUserDoc
                    );
                    loadResultsForTab(
                        cityTabpanel,
                        queryTopic,
                        "city",
                        currentUserDoc
                    );
                    hideOnLogin();
                    showOnLogin();
                    if (currentUserDoc.data().postalCode) {
                        hideIfLocation();
                    }
                });
        } else {
            unpersonalizeTabs();
            loadResultsForTab(nationalTabpanel, queryTopic, "national");
            loadResultsForTab(provinceTabpanel, queryTopic, "province");
            loadResultsForTab(cityTabpanel, queryTopic, "city");
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
    const loggedOutElements = document.querySelectorAll(".hide-on-login");
    for (const element of loggedOutElements) {
        element.classList.add("d-none");
    }
}

function hideIfLocation() {
    const loggedOutElements = document.querySelectorAll(".hide-if-location");
    for (const element of loggedOutElements) {
        element.classList.add("d-none");
    }
}

function showOnLogin() {
    const loggedOutElements = document.querySelectorAll(".show-on-login");
    for (const element of loggedOutElements) {
        element.classList.remove("d-none");
    }
}

function hideOnLogout() {
    const loggedOutElements = document.querySelectorAll(".show-on-login");
    for (const element of loggedOutElements) {
        element.classList.add("d-none");
    }
}

function showOnLogout() {
    const loggedOutElements = document.querySelectorAll(".hide-on-login");
    for (const element of loggedOutElements) {
        element.classList.remove("d-none");
    }
}

function getLocation(currentUserDoc) {
    if (currentUserDoc.data().postalCode) {
        return {
            postalCode: currentUserDoc.data().postalCode,
            city: currentUserDoc.data().city,
            province: currentUserDoc.data().province,
        };
    } else {
        return null;
    }
}

function personalizeTabs(currentUserDoc) {
    const userLocation = getLocation(currentUserDoc);
    if (!userLocation) {
        return;
    }
    const provinceTab = document.querySelector(
        ".location-tab[aria-controls = 'province']"
    );
    provinceTab.innerText = userLocation.province;
    const cityTab = document.querySelector(
        ".location-tab[aria-controls = 'city']"
    );
    cityTab.innerText = userLocation.city;
}

function unpersonalizeTabs() {
    const provinceTab = document.querySelector(
        ".location-tab[aria-controls = 'province']"
    );
    provinceTab.innerText = "Provincial";
    const cityTab = document.querySelector(
        ".location-tab[aria-controls = 'city']"
    );
    cityTab.innerText = "Local";
}

async function loadResultsForTab(
    tabWrapperElement,
    queryTopic,
    govLevel,
    currentUserDoc
) {
    const sourceBlockTemplate = document.querySelector(
        "#source-block-template"
    );
    const subpageBlockTemplate = document.querySelector(
        "#subpage-block-template"
    );

    let location;
    if (currentUserDoc) {
        location = getLocation(currentUserDoc);
    }
    console.log(location);
    const userSubscriptions = getUserSubscriptions(currentUserDoc);
    const userSuscribedToSearch = userSubscriptions
        ? userSubscriptions.noSourceSearches.some((search) => {
              return search.search === queryTopic.queryKeywords.join();
          })
        : false;

    console.log("subbed to search", userSuscribedToSearch);

    if (userSuscribedToSearch) {
        document
            .querySelector(".topic-unsubscribe-btn-group")
            ?.classList.remove("d-none");
    } else if (currentUserDoc) {
        document
            .querySelector(".topic-subscribe-btn-group")
            ?.classList.remove("d-none");
    } else {
        document
            .querySelector(".topic-unsubscribe-btn-group")
            ?.classList.add("d-none");
        document
            .querySelector(".topic-subscribe-btn-group")
            ?.classList.add("d-none");
    }

    let sourcesQuery = db
        .collection("sources")
        .where("keywords", "array-contains-any", queryTopic.queryKeywords)
        .where("jurisdiction.governmentLevel", "==", `${govLevel}`);

    if (location && govLevel === "provincial") {
        sourcesQuery = db
            .collection("sources")
            .where("keywords", "array-contains-any", queryTopic.queryKeywords)
            .where("jurisdiction.governmentLevel", "==", `${govLevel}`)
            .where("jurisdiction.location", "==", location.province);
    }
    if (location && govLevel === "local") {
        sourcesQuery = db
            .collection("sources")
            .where("keywords", "array-contains-any", queryTopic.queryKeywords)
            .where("jurisdiction.governmentLevel", "==", `${govLevel}`)
            .where("jurisdiction.location", "array-conatins", location.city);
    }

    sourcesQuery
        .get()
        .then((sourcesSnapshot) => {
            if (sourcesSnapshot.empty) {
                console.log(
                    "no results for query",
                    queryTopic.queryKeywords,
                    sourcesSnapshot
                );
                return;
            }
            tabWrapperElement.replaceChildren();

            sourcesSnapshot.forEach((sourceDoc) => {
                const sourceData = {
                    sourceUrl: sourceDoc.data().sourceUrl,
                    sourceLogoUrl: sourceDoc.data().sourceLogoUrl,
                    sourceName: sourceDoc.data().sourceName,
                    id: sourceDoc.id,
                    path: `/sources/${sourceDoc.id}`,
                };
                console.log(sourceData);

                const userSubscribedToSourceWithSearch = userSubscriptions
                    ? userSubscriptions?.sourceSearches.some((sourceSearch) => {
                          return (
                              sourceSearch.sourceRef.path ===
                                  sourceData.path.substring(1) &&
                              sourceSearch.search ===
                                  queryTopic.queryKeywords.join()
                          );
                      })
                    : false;
                const userSubscribedToAllSource = userSubscriptions
                    ? userSubscriptions.subscriptionPaths.includes(
                          sourceData.path.substring(1)
                      )
                    : false;

                //create source block
                let sourceBlock = sourceBlockTemplate.content.cloneNode(true);

                sourceBlock.querySelector(".source-block").id = sourceData.id;
                sourceData.sourceUrl;
                sourceBlock.querySelector(".source-link").href =
                    sourceData.sourceUrl;
                sourceBlock.querySelector(".source-logo").src =
                    sourceData.sourceLogoUrl;
                sourceBlock
                    .querySelectorAll(".subscribe-topic")
                    .forEach((element) => {
                        element.dataset.sourcePath = sourceData.path;
                        if (userSuscribedToSearch) {
                            element.setAttribute("disabled", "");
                        }
                    });

                sourceBlock
                    .querySelectorAll(".subscribe-all")
                    .forEach((element) => {
                        element.dataset.sourcePath = sourceData.path;
                    });
                const subpageWrapper = sourceBlock.querySelector(".subpages");

                const allSubbedBtnGroup = sourceBlock.querySelector(
                    ".source-all-subscribed"
                );
                allSubbedBtnGroup.id = `${sourceData.id}-all`;
                const withSearchSubbedBtnGroup = sourceBlock.querySelector(
                    ".source-search-subscribed"
                );
                withSearchSubbedBtnGroup.id = `${sourceData.id}-with-search`;
                const noSubsBtnGroup =
                    sourceBlock.querySelector(".no-source-subs");
                withSearchSubbedBtnGroup.id = `${sourceData.id}-no-subs`;

                if (userSubscribedToAllSource) {
                    allSubbedBtnGroup.classList.remove("d-none");
                } else if (userSubscribedToSourceWithSearch) {
                    withSearchSubbedBtnGroup.classList.remove("d-none");
                } else if (currentUserDoc) {
                    noSubsBtnGroup.classList.remove("d-none");
                }

                const sourceNameSpans =
                    sourceBlock.querySelectorAll(".source-name");
                for (const span of sourceNameSpans) {
                    span.innerText = sourceData.sourceName;
                }

                sourceDoc.ref
                    .collection("subpages")
                    .where(
                        "keywords",
                        "array-contains-any",
                        queryTopic.queryKeywords
                    )
                    .get()
                    .then((subpagesSnapshot) => {
                        if (subpagesSnapshot.empty) {
                            console.log(
                                "no subpage results for query",
                                queryTopic.queryKeywords,
                                subpagesSnapshot
                            );
                        }
                        sourceBlock.querySelector(
                            ".results-length"
                        ).innerText = `${subpagesSnapshot.size} result${
                            subpagesSnapshot.size == 1 ? "" : "s"
                        }`;

                        subpagesSnapshot.forEach((subpageDoc) => {
                            const subpageData = {
                                subpageTitle: subpageDoc.data().subpageTitle,
                                subpageUrl: subpageDoc.data().subpageUrl,
                                path: `/sources/${sourceDoc.id}/subpages/${subpageDoc.id}`,
                                content: subpageDoc.data().content,
                                id: subpageDoc.id,
                            };

                            const userSubscribedToSubpage = userSubscriptions
                                ? userSubscriptions.subscriptionPaths.includes(
                                      subpageData.path.substring(1)
                                  )
                                : false;

                            // create subpage accordion item
                            let subpageBlock =
                                subpageBlockTemplate.content.cloneNode(true);
                            subpageBlock.querySelector("h3").innerText =
                                subpageData.subpageTitle;
                            subpageBlock
                                .querySelectorAll(".subpage-subscribe")
                                .forEach((element) => {
                                    element.dataset.subpagePath =
                                        subpageData.path;
                                });
                            const subbedBtn =
                                subpageBlock.querySelector(".subscribed");
                            subbedBtn.id = `${subpageData.id}-subscribed`;
                            const subBtn =
                                subpageBlock.querySelector(".not-subscribed");
                            subBtn.id = `${subpageData.id}-not-subscribed`;

                            const subbedBtnGroup = subpageBlock.querySelector(
                                ".subpage-unsubscribe-btn-group"
                            );
                            const subBtnGroup = subpageBlock.querySelector(
                                ".subpage-subscribe-btn-group"
                            );

                            if (userSubscribedToSubpage) {
                                subbedBtnGroup.classList.remove("d-none");
                            } else if (currentUserDoc) {
                                subBtnGroup.classList.remove("d-none");
                            }

                            if (
                                userSuscribedToSearch ||
                                userSubscribedToAllSource ||
                                userSubscribedToSourceWithSearch
                            ) {
                                subbedBtnGroup.setAttribute("disabled", "");
                                subBtnGroup.setAttribute("disabled", "");
                            }

                            subpageBlock.querySelector(
                                ".accordion-button"
                            ).dataset.bsTarget = `#${subpageData.id}-content`;
                            subpageBlock.querySelector(
                                ".accordion-button"
                            ).ariaControls = `${subpageData.id}-content`;
                            subpageBlock.querySelector(
                                ".accordion-collapse"
                            ).id = `${subpageData.id}-content`;
                            subpageBlock.querySelector(
                                ".embed-content"
                            ).innerHTML = subpageData.content;
                            subpageBlock.querySelector(".subpage-link").href =
                                subpageData.subpageUrl;

                            // append to source block
                            subpageWrapper.append(subpageBlock);
                        });
                        // append source block to results wrapper
                        tabWrapperElement.append(sourceBlock);
                        loadTopicSpans(queryTopic?.textTopic);

                        attachSubscriptionListenersInTab(govLevel);

                        // Show and hide UI element dependent user state
                        if (currentUserDoc) {
                            hideOnLogin();
                            showOnLogin();
                            if (location) {
                                hideIfLocation();
                            }
                        } else {
                            hideOnLogout();
                            showOnLogout();
                        }
                    })
                    .catch((error) =>
                        console.error("Error getting subpages", error)
                    );
            });
        })
        .catch((error) => {
            console.error("Error getting sources", error);
        });
}

function getUserSubscriptions(userDoc) {
    if (!userDoc || !userDoc.data().subscriptions) {
        return null;
    }

    // Ignore strings used for finding users by search subscriptions when creating notifications
    const subscriptions = userDoc
        .data()
        .subscriptions.filter((sub) => typeof sub !== "string");

    const subscriptionPaths = subscriptions.map((subscription) => {
        if (subscription.path) {
            return subscription.path;
        }
    });
    console.log(`user subscription paths for ${userDoc.id}`, subscriptionPaths);

    const sourceSearches = subscriptions.filter(
        (subscription) => subscription.search && subscription.sourceRef
    );
    const noSourceSearches = subscriptions.filter(
        (subscription) => subscription.search && !subscription.sourceRef
    );

    return { subscriptionPaths, sourceSearches, noSourceSearches };
}

function addSubpageSubscriptionHandler(event) {
    const target = event.currentTarget;

    const subscriptionPath = target.dataset.subpagePath;
    const subpageId = target.id.split("-")[0];

    console.log("add path to sub", subscriptionPath);
    // TODO optimistic updates need to be fixed for menu buttons
    // Optimisticly update
    // target.classList.add("d-none");
    // document
    //     .querySelector(`${subpageId}-not-subscribed`)
    //     ?.classList.remove("d-none");

    // Add subscription to user subscription array in db
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            db.collection("users")
                .doc(user.uid)
                .update({
                    subscriptions: firebase.firestore.FieldValue.arrayUnion(
                        db.doc(subscriptionPath)
                    ),
                })
                .then(() => {
                    console.log(`sub added for user ${user.uid}`);
                })
                .catch((error) => {
                    console.error(
                        "Error adding subscription for user",
                        user.uid,
                        error
                    );
                    // revert to previous state
                    // target.classList.remove("d-none");
                    // document
                    //     .querySelector(`${subpageId}-not-subscribed`)
                    //     ?.classList.add("d-none");
                    window.alert(
                        "Unable to add subscription. Please try again."
                    );
                });
        }
    });
}

function removeSubpageSubscriptionHandler(event) {
    const target = event.currentTarget;
    const subscriptionPath = target.dataset.subpagePath;
    const subpageId = target.id.split("-")[0];

    console.log("remove path to sub", subscriptionPath);

    // Optimisticly update
    // target.classList.add("d-none");
    // document
    //     .querySelector(`${subpageId}-subscribed`)
    //     ?.classList.remove("d-none");

    // Remove subscription from user subscription array in db
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            db.collection("users")
                .doc(user.uid)
                .update({
                    subscriptions: firebase.firestore.FieldValue.arrayRemove(
                        db.doc(subscriptionPath)
                    ),
                })
                .then(() => {
                    console.log(`sub removed for user ${user.uid}`);
                })
                .catch((error) => {
                    console.error(
                        "Error adding subscription for user",
                        user.uid,
                        error
                    );
                    // revert to previous state
                    // target.classList.remove("d-none");
                    // document
                    //     .querySelector(`${subpageId}-subscribed`)
                    //     ?.classList.add("d-none");
                    window.alert(
                        "Unable to remove subscription. Please try again."
                    );
                });
        }
    });
}

function addSourceAllSubscriptionHandler(event) {
    const target = event.currentTarget;

    const subscriptionPath = target.dataset.sourcePath;
    const sourceId = subscriptionPath.split("/").slice(-1)[0];

    console.log("add path to sub", subscriptionPath);

    // Optimistically update
    const noSubs = document.querySelector(`${sourceId}-no-subs`);
    const hidNoSubs = !noSubs?.classList.contains("d-none");
    noSubs?.classList.add("d-none");
    const withSearch = document.querySelector(`${sourceId}-with-search`);
    const hidWithSearch = !withSearch?.classList.contains("d-none");
    withSearch?.classList.add("d-none");
    document.querySelector(`${sourceId}-all`)?.classList.remove("d-none");

    // Add subscription to user subscription array in db
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            db.collection("users")
                .doc(user.uid)
                .update({
                    subscriptions: firebase.firestore.FieldValue.arrayUnion(
                        db.doc(subscriptionPath)
                    ),
                })
                .then(() => {
                    console.log(`sub added for user ${user.uid}`);
                })
                .catch((error) => {
                    console.error(
                        "Error adding subscription for user",
                        user.uid,
                        error
                    );
                    // Revert to previous state
                    if (hidNoSubs) {
                        noSubs.classList.remove("d-none");
                    }
                    if (hidWithSearch) {
                        withSearch.classList.remove("d-none");
                    }
                    document
                        .querySelector(`${sourceId}-all`)
                        ?.classList.add("d-none");
                    window.alert(
                        "Unable to add subscription. Please try again."
                    );
                });
        }
    });
}

function removeAllSourceSubscriptionHandler(event) {
    const target = event.currentTarget;
    const subscriptionPath = target.dataset.sourcePath;
    const sourceId = subscriptionPath.split("/").slice(-1)[0];

    console.log("remove path to sub", subscriptionPath);

    // Optimisticly update
    document.querySelector(`${sourceId}-all`)?.classList.add("d-none");

    // Remove subscription from user subscription array in db
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            db.collection("users")
                .doc(user.uid)
                .update({
                    subscriptions: firebase.firestore.FieldValue.arrayRemove(
                        db.doc(subscriptionPath)
                    ),
                })
                .then(() => {
                    console.log(`sub removed for user ${user.uid}`);
                })
                .catch((error) => {
                    console.error(
                        "Error adding subscription for user",
                        user.uid,
                        error
                    );
                    // revert to previous state
                    document
                        .querySelector(`${sourceId}-all`)
                        ?.classList.remove("d-none");
                    window.alert(
                        "Unable to remove subscription. Please try again."
                    );
                });
        }
    });
}

function addSourceWithSearchSubscriptionHandler(event) {
    const target = event.currentTarget;

    const subscriptionPath = target.dataset.sourcePath;
    const sourceId = subscriptionPath.split("/").slice(-1)[0];
    console.log("sourceId", sourceId);

    const queryTopic = getQueryTopic();

    if (!queryTopic) {
        console.error("Error getting query topic");
        window.alert("Unable to add subscription. Please try again.");
        return;
    }

    console.log("add path to sub", subscriptionPath);

    // Optimistically update
    const noSubs = document.querySelector(`${sourceId}-no-subs`);
    const hidNoSubs = !noSubs?.classList.contains("d-none");
    noSubs?.classList.add("d-none");
    const allSource = document.querySelector(`${sourceId}-all`);
    const hidAllSource = !allSource?.classList.contains("d-none");
    allSource?.classList.add("d-none");
    document
        .querySelector(`${sourceId}-with-search`)
        ?.classList.remove("d-none");

    // Add subscription to user subscription array in db
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            db.collection("users")
                .doc(user.uid)
                .update({
                    subscriptions: firebase.firestore.FieldValue.arrayUnion(
                        {
                            sourceRef: db.doc(subscriptionPath),
                            search: queryTopic.queryKeywords.join(),
                        },
                        sourceId
                    ),
                })
                .then(() => {
                    db.collection("users")
                        .doc(user.uid)
                        .get()
                        .then((userDoc) => {
                            const subscriptions = getUserSubscriptions(userDoc);
                            const userSuscribedToAllSource = subscriptions
                                ? subscriptions.subscriptionPaths.includes(
                                      subscriptionPath.substring(1)
                                  )
                                : false;
                            if (userSuscribedToAllSource) {
                                db.collection("users")
                                    .doc(user.uid)
                                    .update({
                                        subscriptions:
                                            firebase.firestore.FieldValue.arrayRemove(
                                                db.doc(subscriptionPath)
                                            ),
                                    })
                                    .then(() => {
                                        console.log(
                                            `Removed overriding search sub for user ${user.uid}`
                                        );
                                    })
                                    .catch((error) => {
                                        console.error(
                                            "Error removing overriding search sub for user",
                                            user.uid,
                                            error
                                        );
                                    });
                            }
                        })
                        .catch((error) => {
                            console.error(
                                "Error getting subs for user",
                                user.uid,
                                error
                            );
                        });
                })
                .then(() => {
                    console.log(`sub added for user ${user.uid}`);
                })
                .catch((error) => {
                    console.error(
                        "Error adding subscription for user",
                        user.uid,
                        error
                    );
                    // revert to previous state
                    if (hidNoSubs) {
                        noSubs.classList.remove("d-none");
                    }
                    if (hidAllSource) {
                        allSource.classList.remove("d-none");
                    }
                    document
                        .querySelector(`${sourceId}-with-search`)
                        ?.classList.add("d-none");
                    window.alert(
                        "Unable to add subscription. Please try again."
                    );
                });
        }
    });
}

function removeSourceWithSearchSubscriptionHandler(event) {
    const target = event.currentTarget;
    const subscriptionPath = target.dataset.sourcePath;
    const sourceId = subscriptionPath.split("/").slice(-1)[0];

    const queryTopic = getQueryTopic();

    if (!queryTopic) {
        console.error("Error getting query topic");
        window.alert("Unable to remove subscription. Please try again.");
        return;
    }

    console.log("remove path to sub", subscriptionPath);

    // Optimisticly update
    document.querySelector(`${sourceId}-with-search`)?.classList.add("d-none");

    // Remove subscription from user subscription array in db
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            db.collection("users")
                .doc(user.uid)
                .update({
                    subscriptions: firebase.firestore.FieldValue.arrayRemove({
                        sourceRef: db.doc(subscriptionPath),
                        search: queryTopic?.queryKeywords?.join(),
                    }),
                })
                .then(() => {
                    console.log(`sub removed for user ${user.uid}`);
                })
                .catch((error) => {
                    console.error(
                        "Error removing subscription for user",
                        user.uid,
                        error
                    );
                    // revert to previous state
                    document
                        .querySelector(`${sourceId}-with-search`)
                        ?.classList.remove("d-none");
                    window.alert(
                        "Unable to remove subscription. Please try again."
                    );
                });
        }
    });
}

function addSearchSubscriptionHandler(event) {
    const target = event.currentTarget;

    const queryTopic = getQueryTopic();

    if (!queryTopic) {
        console.error("Error getting query topic");
        window.alert("Unable to add subscription. Please try again.");
        return;
    }

    console.log("add path to sub", queryTopic?.textTopic);

    // Optimistically update
    document
        .querySelector(".topic-subscribe-btn-group")
        ?.classList.add("d-none");
    document
        .querySelector(".topic-unsubscribe-btn-group")
        ?.classList.remove("d-none");

    // Add subscription to user subscription array in db
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            db.collection("users")
                .doc(user.uid)
                .update({
                    subscriptions: firebase.firestore.FieldValue.arrayUnion(
                        {
                            search: queryTopic.queryKeywords?.join(),
                        },
                        ...queryTopic.queryKeywords
                    ),
                })
                .then(() => {
                    console.log(`search sub added for user ${user.uid}`);
                })
                .catch((error) => {
                    console.error(
                        "Error adding search subscription for user",
                        user.uid,
                        error
                    );
                    // revert to previous state
                    document
                        .querySelector(".topic-subscribe-btn-group")
                        ?.classList.remove("d-none");
                    document
                        .querySelector(".topic-unsubscribe-btn-group")
                        ?.classList.add("d-none");
                    window.alert(
                        "Unable to add subscription. Please try again."
                    );
                });
        }
    });
}

function removeSearchSubscriptionHandler(event) {
    const target = event.currentTarget;

    const queryTopic = getQueryTopic();

    if (!queryTopic) {
        console.error("Error getting query topic");
        window.alert("Unable to remove subscription. Please try again.");
        return;
    }

    console.log("add path to sub", queryTopic?.queryKeywords);

    // Optimistically update
    document
        .querySelector(".topic-unsubscribe-btn-group")
        ?.classList.add("d-none");
    document
        .querySelector(".topic-subscribe-btn-group")
        ?.classList.remove("d-none");

    // Remove subscription from user subscription array in db
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            db.collection("users")
                .doc(user.uid)
                .update({
                    subscriptions: firebase.firestore.FieldValue.arrayRemove({
                        search: queryTopic?.queryKeywords?.join(),
                    }),
                })
                .then(() => {
                    console.log(`search sub removed for user ${user.uid}`);
                })
                .catch((error) => {
                    console.error(
                        "Error removing search subscription for user",
                        user.uid,
                        error
                    );
                    // revert to previous state
                    document
                        .querySelector(".topic-unsubscribe-btn-group")
                        ?.classList.remove("d-none");
                    document
                        .querySelector(".topic-subscribe-btn-group")
                        ?.classList.add("d-none");
                    window.alert(
                        "Unable to remove subscription. Please try again."
                    );
                });
        }
    });
}

function attachSearchSubscriptionListeners() {
    // Attach listeners to full search subscription buttons
    document
        .querySelector(".topic-subscribe")
        ?.addEventListener("click", addSearchSubscriptionHandler);
    document
        .querySelector(".topic-unsubscribe")
        ?.addEventListener("click", removeSearchSubscriptionHandler);
}

attachSearchSubscriptionListeners();

function attachSubscriptionListenersInTab(govLevel) {
    // Attach listeners to subscription buttons within a tab
    $(`#${govLevel}-tab`).on(
        "click",
        ".subpage-subscribe.not-subscribed",
        addSubpageSubscriptionHandler
    );
    $(`#${govLevel}-tab`).on(
        "click",
        ".subpage-subscribe.subscribed",
        removeSubpageSubscriptionHandler
    );
    $(`#${govLevel}-tab`).on(
        "click",
        ".subscribe-topic.not-subscribed",
        addSourceWithSearchSubscriptionHandler
    );
    $(`#${govLevel}-tab`).on(
        "click",
        ".subscribe-topic.subscribed",
        removeSourceWithSearchSubscriptionHandler
    );
    $(`#${govLevel}-tab`).on(
        "click",
        ".subscribe-all.not-subscribed",
        addSourceAllSubscriptionHandler
    );
    $(`#${govLevel}-tab`).on(
        "click",
        ".subscribe-all.subscribed",
        removeAllSourceSubscriptionHandler
    );
}

// TODO add and handle view more button
