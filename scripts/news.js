async function getNewsArticles()
{
  const sources = db.collection("sources")
  const sourcesSnapshot = await sources.get()
  
  newsArticles = []

  for(sourceDoc of sourcesSnapshot.docs)
  {
    subpages = sourceDoc.ref.collection("subpages")
    subpagesFiltered = subpages.where("news", "==", true)
    subpagesFilteredData = await subpagesFiltered.get()

    subpagesFilteredData.forEach(article => {
      newsArticles.push({...article.data(), id: article.id})
    });
  }

  newsArticles.sort((a,b) => b.updatedAt - a.updatedAt)
  
  for (article of newsArticles)
  {
    printNewsArticle(article)
  }
      
}

async function printNewsArticle(doc)
{
    sourceID = doc.sourceID
    source = await db.collection("sources").doc(sourceID).get()
    sourceData = source.data()

    logo_URL = sourceData.sourceLogoUrl
   
   
    new_URL = new URL("article_template.html", window.location.href)
    new_URL.searchParams.set('id', doc.id) 


    title = doc.subpageTitle
    byline = doc.subpageSummary
    
    news_section = document.getElementById("news")
    
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
