async function getNewsArticles()
{
  // Get a pointer to the sources collection, and then get a snapshot of the collection.
  const sources = db.collection("sources")
  const sourcesSnapshot = await sources.get()
  
  // Initialize an array to store news articles
  newsArticles = []

  // Iterate through each source
  for(sourceDoc of sourcesSnapshot.docs)
  {
    // Get a pointer to the subpage for each source. Create a subcollection so only subpages where the field "news" is true is kept,
    // and then get the data for each subpage.
    subpages = sourceDoc.ref.collection("subpages")
    subpagesFiltered = subpages.where("news", "==", true)
    subpagesFilteredData = await subpagesFiltered.get()

    // Push each news subpage's data to the newsArticles array
    subpagesFilteredData.forEach(article => {
      newsArticles.push({...article.data(), id: article.id})
    });
  }

  //A temporary function that duplicates the Immunize BC article
  for (i = 0; i < 20; i++)
  {
    newsArticles.push(newsArticles[0])
  }

  //Sorts the array so the most recent subpage is first
  newsArticles.sort((a,b) => b.updatedAt - a.updatedAt)
  
  //Inserts HTML into the body to display each subpage
  for (article of newsArticles)
  {
    printNewsArticle(article)
  }
      
}

async function printNewsArticle(doc)
{
    //Get's the ID for the source, a pointer for the source, and the data for the source
    sourceID = doc.sourceID
    source = await db.collection("sources").doc(sourceID).get()
    sourceData = source.data()

    //Set's the logo, title, byline, and "Read More" URL
    logo_URL = sourceData.sourceLogoUrl
    new_URL = new URL("article_template.html", window.location.href)
    new_URL.searchParams.set('id', doc.id) 
    title = doc.subpageTitle
    byline = doc.subpageSummary
    
    //Get's a pointer (or referene?) to the news section in the body
    news_section = document.getElementById("news")
    
    //Injects HTML into the news section
    news_section.innerHTML += `<div class="article-preview">
    <div class="article-preview-title" style="display: flex; flex-direction: row; gap: 20px;">
      <img src="${logo_URL}" alt="logo" style="height: 28px; width: auto;">
      <h3 style="">
        ${title}
      </h3>
    </div>
    <div class="article-preview-byline">
        ${byline}
    </div>
    <div class="article-preview-read">
      <a href="${new_URL}" style="">
        Read more 
          <span class="material-icons" style="text-decoration: none; vertical-align: bottom;">
            chevron_right
          </span>
        </a>
      </div>
    </div>`
}

function setup()
{
  getNewsArticles()
}

setup()
