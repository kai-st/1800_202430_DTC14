var currentUser

firebase.auth().onAuthStateChanged(user => {
    currentUser = user
})



async function getNewsArticles(isFederal, isProvincial, isMunicipal)
{
    const sources = db.collection("sources")
    
    if (currentUser){
    const userRef = db.collection("users").doc(currentUser.uid)
    const userSnapshot = await userRef.get()
    const userProvince = userSnapshot.data().province
    const userCity = userSnapshot.data().city
    }
    // const sourcesFederalSnapshot = await sources.get()
    // const sourcesProvincialSnapshot = await sources.where("jurisdiction.governmentLevel", "==", "province").where("jurisdiction.location", "==", `${userProvince}`).get()
    // const sourcesMunicipalSnapshot = await sources.where("jurisdiction.governmentLevel", "==", "municipal").where("jurisdiction.location", "==", `${userCity}`).get()
    
    newsArticles = []
    allNewsArticles = []
    uniqueNewsArticles = []

    if (isFederal)
    {
        const sourcesFederalSnapshot = await sources.get()
        allNewsArticles.push(...sourcesFederalSnapshot.docs)
    }
    if (isProvincial)
    {
        const sourcesProvincialSnapshot = await sources.where("jurisdiction.governmentLevel", "==", "province").where("jurisdiction.location", "==", `${userProvince}`).get()
        allNewsArticles.push(...sourcesProvincialSnapshot.docs)
    }
    if (isMunicipal)
    {
        const sourcesMunicipalSnapshot = await sources.where("jurisdiction.governmentLevel", "==", "municipal").where("jurisdiction.location", "==", `${userCity}`).get()
        allNewsArticles.push(...sourcesMunicipalSnapshot.docs)
    }
    
    uniqueNewsArticles = [...new Set(allNewsArticles)]

    for(sourceDoc of allNewsArticles)
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
    console.log()
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
  if (currentUser)
  {
    getNewsArticles(true, true, true)
    console.log("user is logged in")
  }
  else
  {
    getNewsArticles(true, false, false)
  }
}

setup()
