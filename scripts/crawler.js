const dummyData = [{}];

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
                            const existingSubpageUrls = querySnapshot.empty
                                ? []
                                : querySnapshot.docs.map((subpageDoc) => {
                                      return subpageDoc.data().subpageUrl;
                                  });

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
