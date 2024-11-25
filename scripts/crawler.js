const dummyData = [
    {
        sourceUrl: "sourceUrl",
        // Try to find the favicon in page head, look for <link rel="icon" .../>
        sourceLogoUrl: "sourceLogoUrl",
        sourceName: "Source",
        jurisdiction: {
            // "national", "province", "city"
            governmentLevel: "",
            // no location if national, two letter abbreviation if province eg "BC", array with all applicable cities if city eg ["Vancouver"] or ["Vancouver", "Burnaby"]
            location: "",
        },
        subpages: [
            {
                subpageTitle: "subpageTitle",
                subpageUrl: "subpageUrl",
                // Include any keyword it would be useful to find this page with
                // If page is an article from the sources news page, include "news" in keywords
                keywords: [""],
                // Copy about one short paragraph of text that best summarizes page or otherwise summarize
                subpageSummary: "",
                // from inspector copy the main or main equivalent section of the html, don't include navigation, sidebars, etc.
                content:
                    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos iste sapiente fugit, recusandae quae neque vitae provident nobis sequi saepe tempora quo vero tenetur facere, ipsa voluptas non repellat quasi. Sequi rem velit totam consequuntur accusamus quos vitae soluta iure necessitatibus autem delectus facere assumenda ut distinctio ab, fuga enim, itaque suscipit inventore est et dolorem illum veritatis atque! Laborum quos pariatur minus quod. Explicabo eveniet odit eaque quis nisi neque voluptates, autem ex modi fugit corrupti quisquam maiores libero eum repudiandae doloremque aliquam voluptatum! Cum ducimus, amet ratione error sunt ab eveniet, harum, quaerat voluptate suscipit vero optio.</p>",
            },
        ],
    },
    {
        // If a source exists in the db, only need sourceUrl and subpages
        sourceUrl: "https://immunizebc.ca",
        subpages: [
            {
                subpageTitle: "subpageTitle",
                subpageUrl: "subpageUrl",
                keywords: [""],
                subpageSummary: "",
                content:
                    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos iste sapiente fugit, recusandae quae neque vitae provident nobis sequi saepe tempora quo vero tenetur facere, ipsa voluptas non repellat quasi. Sequi rem velit totam consequuntur accusamus quos vitae soluta iure necessitatibus autem delectus facere assumenda ut distinctio ab, fuga enim, itaque suscipit inventore est et dolorem illum veritatis atque! Laborum quos pariatur minus quod. Explicabo eveniet odit eaque quis nisi neque voluptates, autem ex modi fugit corrupti quisquam maiores libero eum repudiandae doloremque aliquam voluptatum! Cum ducimus, amet ratione error sunt ab eveniet, harum, quaerat voluptate suscipit vero optio.</p>",
            },
        ],
    },
    {
        sourceUrl: "",
        sourceLogoUrl: "sourceLogoUrl",
        sourceName: "Health Canada",
        jurisdiction: {
            governmentLevel: "",
            location: "",
        },
        subpages: [
            {
                subpageTitle: "subpageTitle",
                subpageUrl: "subpageUrl",
                keywords: [""],
                subpageSummary: "",
                content:
                    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos iste sapiente fugit, recusandae quae neque vitae provident nobis sequi saepe tempora quo vero tenetur facere, ipsa voluptas non repellat quasi. Sequi rem velit totam consequuntur accusamus quos vitae soluta iure necessitatibus autem delectus facere assumenda ut distinctio ab, fuga enim, itaque suscipit inventore est et dolorem illum veritatis atque! Laborum quos pariatur minus quod. Explicabo eveniet odit eaque quis nisi neque voluptates, autem ex modi fugit corrupti quisquam maiores libero eum repudiandae doloremque aliquam voluptatum! Cum ducimus, amet ratione error sunt ab eveniet, harum, quaerat voluptate suscipit vero optio.</p>",
            },
        ],
    },
    {
        sourceUrl: "",
        sourceLogoUrl: "sourceLogoUrl",
        sourceName: "Vancouver Coastal Health",
        jurisdiction: {
            governmentLevel: "",
            location: "",
        },
        subpages: [
            {
                subpageTitle: "subpageTitle",
                subpageUrl: "subpageUrl",
                keywords: [""],
                subpageSummary: "",
                content:
                    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos iste sapiente fugit, recusandae quae neque vitae provident nobis sequi saepe tempora quo vero tenetur facere, ipsa voluptas non repellat quasi. Sequi rem velit totam consequuntur accusamus quos vitae soluta iure necessitatibus autem delectus facere assumenda ut distinctio ab, fuga enim, itaque suscipit inventore est et dolorem illum veritatis atque! Laborum quos pariatur minus quod. Explicabo eveniet odit eaque quis nisi neque voluptates, autem ex modi fugit corrupti quisquam maiores libero eum repudiandae doloremque aliquam voluptatum! Cum ducimus, amet ratione error sunt ab eveniet, harum, quaerat voluptate suscipit vero optio.</p>",
            },
        ],
    },
];

function writeSourceAndSubpages(sourceData) {
    const allSubpageKeywords = sourceData.subpages.reduce(
        (keywords, subpage) => {
            return [...keywords, ...subpage.keywords];
        },
        []
    );

    const dedupedKeywords = new Set(allSubpageKeywords);

    const sourceKeywords = [...dedupedKeywords];

    // Check if source already in db
    db.collection("sources")
        .where("sourceUrl", "==", sourceData.sourceUrl)
        .get()
        .then((querySnapshot) => {
            // Source not in db
            if (querySnapshot.empty) {
                // Add new source
                db.collection("sources")
                    .add({
                        crawledAt:
                            firebase.firestore.FieldValue.serverTimestamp(),
                        keywords: sourceKeywords,
                        jurisdiction: {
                            governmentLevel: sourceData.governmentLevel,
                            location: sourceData.location,
                        },
                        sourceName: sourceData.sourceName,
                        sourceUrl: sourceData.sourceUrl,
                        sourceLogoUrl: sourceData.sourceLogoUrl,
                    })
                    .then((sourceDocRef) => {
                        // Create new subpages subcollection for Source and add subpages
                        const subpagesCollectionRef =
                            sourceDocRef.collection("subpages");
                        const batch = db.batch();
                        for (const subpage of sourceData.subpages) {
                            batch.add(subpagesCollectionRef, {
                                content: subpage.content,
                                keywords: subpage.keywords,
                                subpageTitle: subpage.subpageTitle,
                                subpageUrl: subpage.subpageUrl,
                                updatedAt:
                                    firebase.firestore.FieldValue.serverTimestamp(),
                                news: subpage.keywords.includes("news"),
                                sourceID: sourceDocRef.id,
                                subpageSummary: subpage.subpageSummary,
                            });
                        }
                        // Send batch to db
                        batch
                            .commit()
                            .then(() => {
                                console.log(
                                    "Wrote new source and subpages for",
                                    sourceData.sourceUrl
                                );
                            })
                            .catch((error) => {
                                console.error(
                                    `Error writing subpages for new source ${sourceData.sourceUrl}`,
                                    error
                                );
                            });
                    })
                    .catch((error) => {
                        console.error(
                            `Error writing new source ${sourceData.sourceUrl}`,
                            error
                        );
                    });
            } else {
                querySnapshot.forEach((sourceDoc) => {
                    const batch = db.batch();

                    // Update existing source
                    batch.update(sourceDoc.ref, {
                        crawledAt:
                            firebase.firestore.FieldValue.serverTimestamp(),
                        keywords: sourceKeywords,
                    });

                    // Get existing subpages
                    sourceDoc.ref
                        .collection("subpages")
                        .get()
                        .then((querySnapshot) => {
                            const subpagesCollectionRef =
                                sourceDoc.ref.collection("subpages");

                            for (const subpage of sourceData.subpages) {
                                const existingDoc = querySnapshot.docs.find(
                                    (subpageDoc) => {
                                        return (
                                            subpageDoc.data().subpageUrl ===
                                            subpage.subpageUrl
                                        );
                                    }
                                );

                                if (existingDoc) {
                                    // Update existing subpage
                                    batch.update(existingDoc.ref, {
                                        content: subpage.content,
                                        keywords: subpage.keywords,
                                        updatedAt:
                                            firebase.firestore.FieldValue.serverTimestamp(),
                                        news: subpage.keywords.includes("news"),
                                        subpageSummary: subpage.subpageSummary,
                                    });
                                } else {
                                    // Add new subpage
                                    batch.add(subpagesCollectionRef, {
                                        content: subpage.content,
                                        keywords: subpage.keywords,
                                        subpageTitle: subpage.subpageTitle,
                                        subpageUrl: subpage.subpageUrl,
                                        updatedAt:
                                            firebase.firestore.FieldValue.serverTimestamp(),
                                        news: subpage.keywords.includes("news"),
                                        sourceID: sourceDoc.id,
                                        subpageSummary: subpage.subpageSummary,
                                    });
                                }

                                // Send batch to db
                                batch
                                    .commit()
                                    .then(() => {
                                        console.log(
                                            "Updated source and subpages for",
                                            sourceData.sourceUrl
                                        );
                                    })
                                    .catch((error) => {
                                        console.error(
                                            `Error updating source ${sourceData.sourceUrl} and subpages`,
                                            error
                                        );
                                    });
                            }
                        })
                        .catch((error) => {
                            console.error(
                                `Error getting existing subpages for ${sourceData.sourceUrl}`,
                                error
                            );
                        });
                });
            }
        });
}

// Crawler experiments, ignore for now
//
//Hits CORS
// async function crawl(sourceURL) {
//     try {
//         const sourceResponse = await fetch(sourceURL);
//         if (!sourceResponse.ok) {
//             throw new Error(
//                 `"Source response status: ${sourceResponse.status}`
//             );
//         }
//         console.log("sourceResponce", sourceResponse);
//         const sourceHtml = sourceResponse.json();
//         console.log("sourceHtml", sourceHtml);
//     } catch (error) {}
// }

// function parseSubpage(subpageUrl, subpageHtml) {
//     const mainContent = findMain();
//     const subpage = {
//         subpageUrl,
//     };
//     console.log("subpage", subpage);
//     return subpage;
// }

// function findMain(html) {
//     const mainElementStartIndex = html.indexOf("<main");
//     if (mainElementStartIndex >= 0) {
//         const mainElementEndIndex = html.indexOf("</main>") + 6;
//         return html.substring(mainElementStartIndex, mainElementEndIndex + 1);
//     }
// }
