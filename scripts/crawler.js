const dummyData = [
    {
        sourceUrl: "sourceUrl",
        // Replace the domain in this link with the source domain>
        sourceLogoUrl:
            "https://www.google.com/s2/favicons?domain=immunizebc.ca&sz=32",
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
        sourceUrl: "https://www.canada.ca/en/health-canada",
        sourceLogoUrl:
            "https://www.google.com/s2/favicons?domain=immunizebc.ca&sz=32",
        sourceName: "Health Canada",
        jurisdiction: {
            governmentLevel: "national",
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
];

const alreadyWrittenData = [
    {
        sourceUrl: "https://www.canada.ca/en/public-health",
        sourceLogoUrl:
            "https://www.google.com/s2/favicons?domain=www.canada.ca&sz=32",
        sourceName: "Public Health Agency of Canada",
        jurisdiction: {
            governmentLevel: "national",
        },
        subpages: [
            {
                subpageTitle: "About Mental Health",
                subpageUrl:
                    "https://www.canada.ca/en/public-health/services/about-mental-health.html#a4",
                keywords: ["mental health"],
                subpageSummary:
                    "Everyone's mental health is important. It needs to be taken care of to make sure you stay healthy overall. Learn about your mental health, how to improve it and the resulting benefits.",
                content: `<div><div class="mwsbodytext text parbase section">
                    <p>Everyone's mental health is important. It needs to be taken care of to make sure you stay healthy overall. Learn about your mental health, how to improve it and the resulting benefits.</p>  
                    </div>
                    <div class="mwsbodytext text parbase section">
                    <h2>On this page</h2>
                    </div>
                    <div class="mwsbodytext text parbase section">
                    <ul> 
                    <li><a href="/en/public-health/services/about-mental-health.html#a1">What is mental health?</a></li> 
                    <li><a href="/en/public-health/services/about-mental-health.html#a2">How can you take care of your mental health?</a></li> 
                    <li><a href="/en/public-health/services/about-mental-health.html#a3">How does being mentally healthy benefit you?</a></li> 
                    <li><a href="/en/public-health/services/about-mental-health.html#a4">For more information</a></li> 
                    </ul>  
                    </div>
                    <div class="mwsbodytext text parbase section">
                    <h2 id="a1">What is mental health?</h2>
                    </div>
                    <div class="mwsbodytext text parbase section">
                    <p>Mental health is the state of your psychological and emotional well-being. It is a necessary resource for living a healthy life and a main factor in overall health. It does not mean the same thing as <a href="/en/public-health/services/about-mental-illness.html">mental illness</a>. However, poor mental health can lead to mental and physical illness.</p>
                    <p>Good mental health allows you to feel, think and act in ways that help you enjoy life and cope with its challenges. This can be positively or negatively influenced by:</p>
                    <ul>
                    <li>life experiences, such as:<ul>
                    <li>family situation</li>
                    <li>the death of a loved one</li>
                    <li>financial and employment status</li>
                    </ul>
                    </li>
                    <li>relationships with others, such as your:<ul>
                    <li>friends</li>
                    <li>family members</li>
                    <li>co-workers</li>
                    <li>schoolmates</li>
                    </ul>
                    </li>
                    <li>work or school environment</li>
                    <li>physical health, such as problems caused by:<ul>
                    <li>long-term illness</li>
                    <li>problematic substance use</li>
                    </ul>
                    </li>
                    <li>the type of community you live in<ul>
                    <li>is it a supportive and trusting community or one where everyone keeps to themselves?</li>
                    </ul>
                    </li>
                    </ul>
                    </div>
                    <div class="mwsbodytext text parbase section">
                    <h2 id="a2">How can you take care of your mental health?</h2>
                    </div>
                    <div class="mwsbodytext text parbase section">
                    <p>Take care of your mental health in the same way you would take care of your physical health. It takes practise, patience and support.</p>  <p>You can maintain or improve your mental health by following the advice below.</p>  <ul> 
                    <li>Know and accept that life can be challenging.</li> 
                    <li>Know and accept your strengths and weaknesses.</li> 
                    <li>Set realistic goals for yourself.</li> 
                    <li>Accept yourself and others. This is the basis of self-esteem.</li> 
                    <li>Learn to recognize and understand that you and others have both positive and negative feelings.</li> 
                    <li>Create a sense of meaning in your life by learning and trying new activities, like starting a hobby.</li> 
                    <li>Create healthy, trusting relationships with people who accept and support you.</li> 
                    </ul>  <p>Building a supportive community is an important way to improve mental health. Making meaningful connections with your family, friends, peers, colleagues and other members of your community can help you feel:</p>  <ul> 
                    <li>like you belong</li> 
                    <li>safe and secure</li> 
                    <li>free to express your thoughts and feelings on issues that are important to you</li> 
                    </ul>  <p>You can help create a healthy and safe environment where you live, learn, work and play by:</p>  <ul> 
                    <li>knowing and accepting that everyone has difficulties in their lives</li> 
                    <li>taking part in local events and getting to know your neighbours</li> 
                    <li>finding ways to get involved and giving back to your community</li> 
                    <li>supporting and including people of different ages and backgrounds in your community</li> 
                    </ul>  
                    </div>
                    <div class="mwsbodytext text parbase section">
                    <h2 id="a3">How does being mentally healthy benefit you?</h2>
                    </div>
                    <div class="mwsbodytext text parbase section">
                    <p>Being mentally healthy can:</p>  <ul> 
                    <li>increase coping skills 
                    <ul> 
                    <li>how we handle difficult experiences and stresses</li> 
                    </ul> </li> 
                    <li>improve self-esteem 
                    <ul> 
                    <li>feeling confident in your worth and abilities</li> 
                    </ul> </li> 
                    <li>improve resiliency 
                    <ul> 
                    <li>your ability to successfully move on after a negative event and regain control of your life</li> 
                    </ul> </li> 
                    </ul>  <p>Increasing coping skills, self-esteem and resiliency encourages people to:</p>  <ul> 
                    <li>create healthy relationships</li> 
                    <li>positively interact with their community</li> 
                    <li>talk openly about their mental health, including their needs and wants</li> 
                    </ul>  <p>Feeling confident and competent in these areas can improve emotional strength. In turn, this can help improve and maintain your level of mental health.</p>  
                    </div>
                    <div class="mwsbodytext text parbase section">
                    <h2 id="a4" tabindex="-1">For more information</h2>
                    </div>
                    <div class="mwsbodytext text parbase section">
                    <ul> 
                    <li><a href="https://www.cmha.ca/" rel="external">Canadian Mental Health Association</a></li> 
                    <li><a href="http://www.mentalhealthcommission.ca/" rel="external">Mental Health Commission of Canada</a></li> 
                    </ul>  
                    </div>
                    </div>`,
            },
            {
                subpageTitle:
                    "COVID-19: Symptoms, treatment, what to do if you feel sick",
                subpageUrl:
                    "https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/symptoms.html",
                keywords: ["covid-19", "covid"],
                subpageSummary:
                    "This page contains information about Covid-19 symptoms, what to do if you're sick or exposed, how to care for others who have Covid-19, how to treat Covid-19, and what long-term symptoms might occur",
                content: `<div class="mwsgeneric-base-html parbase section">
    
    
    
                            <h2 class="mrgn-tp-md h3">Join the effort to limit the spread of COVID-19</h2>
                        <p><a href="/en/public-health/services/diseases/2019-novel-coronavirus-infection/symptoms/provincial-territorial-resources-covid-19.html" class="btn btn-call-to-action">Get a COVID-19 test near you</a></p>
                        <h2>On this page</h2>
                        <ul>
                        <li><a href="#s">COVID-19 symptoms</a></li>
                        <li><a href="#ss">If you have severe symptoms</a></li>
                        <li><a href="#_Getting_tested">What to do if you’re sick or were exposed </a></li>
                        <li><a href="#i">Caring for others </a></li>
                        <li><a href="#t">Treating COVID-19</a></li>
                        <li><a href="#lts">Long-term symptoms</a></li>
                        </ul>
    
    
    
                        <h2 id="s">COVID-19 symptoms</h2>
    
    
    
                        <p>Symptoms of COVID-19 can vary: </p>
                        <ul>
                        <li>from person to person</li>
                        <li>in different age groups</li>
                        <li>depending on the COVID-19 variant</li>
                        </ul>
    
    
                        <p>Some of the more commonly reported symptoms include:</p>
                        <ul>
                        <li>sore throat</li>
                        <li>runny nose</li>
                        <li>sneezing</li>
                        <li>new or worsening cough</li>
                        <li>shortness of breath or difficulty breathing</li>
                        <li>temperature equal to or more than 38°C</li>
                        <li>feeling feverish</li>
                        <li>chills</li>
                        <li>fatigue or weakness</li>
                        <li>muscle or body aches</li>
                        <li>new loss of smell or taste</li>
                        <li>headache</li>
                        <li>abdominal pain, diarrhea and vomiting</li>
                        <li>feeling very unwell</li>
                        </ul>
    
    
                        <p><strong>If you don’t feel well or if you have any symptoms, even if mild, assume you may have COVID-19. </strong>Immediately isolate at home and away from others. Check with your local public health authority for more advice, including where and how to get tested if recommended. </p>
                        <p>You may be infected but not have symptoms. However, you can still spread the virus to others. You may:</p>
                        <ul>
                        <li>develop symptoms later (be pre-symptomatic)</li>
                        <li>never develop symptoms (be asymptomatic)</li>
                        </ul>
    
    
                        <p>If you’ve been in contact with someone who has COVID-19, contact your local public health authority for advice on what to do next.</p>
                        <p>Learn more about:</p>
                        <ul>
                        <li><a href="/en/public-health/services/diseases/2019-novel-coronavirus-infection/symptoms/testing/diagnosing.html">Testing for COVID-19: When to get tested and testing results</a></li>
                        <li><a href="/en/public-health/services/diseases/2019-novel-coronavirus-infection/symptoms/provincial-territorial-resources-covid-19.html">COVID-19: Contact your local public health authority</a></li>
                        </ul>
    
    
                        <h3>Start of symptoms </h3>
                        <p>You may start experiencing symptoms anywhere from 1 to 14 days after exposure. Typically, symptoms appear between 3 and 7 days after exposure. &nbsp;</p>
                        <h3>Vaccination prevents severe illness</h3>
    
    
                        <p>Vaccination is one of the most effective ways to protect our families, communities and ourselves against COVID-19. Evidence indicates that the vaccines used in Canada are very effective at preventing severe illness, hospitalization and death from COVID-19. </p>
                        <p>However, vaccines are <strong>not</strong> 100% effective and you may still become infected with or without symptoms.</p>
                        <p>Learn more about:</p>
                        <ul>
                        <li><a href="/en/public-health/services/diseases/coronavirus-disease-covid-19/vaccines/how-vaccinated.html">Vaccines for COVID-19: How to get vaccinated</a></li>
                        </ul>
    
    
                        <h3>Public health measures </h3>
                        <p>When layered together, public health measures are effective in reducing the spread of COVID-19, including variants of concern. </p>
                        <p>Regardless of your vaccination status, you should continue to: </p>
                        <ul>
                        <li>follow the advice of your local public health authority </li>
                        <li>layer multiple individual public health measures to protect yourself and others</li>
                        </ul>
    
    
                        <p>Learn more about:</p>
    
                        <ul>
                        <li><a href="/en/public-health/services/diseases/2019-novel-coronavirus-infection/symptoms/provincial-territorial-resources-covid-19.html">COVID-19: Provincial and territorial resources</a></li>
                        <li><a href="/en/public-health/services/diseases/2019-novel-coronavirus-infection/prevention-risks.html#p">COVID-19: Individual public health measures</a></li>
                        </ul>
    
    
    
                        <h2 id="ss">If you have severe symptoms</h2>
    
    
                        <p>Call&nbsp;<strong>911</strong>&nbsp;or your local emergency number if you develop&nbsp;<strong>severe symptoms</strong>, such as:</p>
                        <ul>
                        <li>trouble breathing or severe shortness of breath</li>
                        <li>persistent pressure or pain in the chest</li>
                        <li>new onset of confusion</li>
                        <li>difficulty waking up or staying awake</li>
                        <li>pale, grey or blue-coloured skin, lips or nail beds</li>
                        </ul>
    
    
                        <p>Follow&nbsp;<a href="/en/public-health/services/diseases/2019-novel-coronavirus-infection/prevention-risks/how-care-someone-covid-19-home.html#a5">instructions for safe transport</a>&nbsp;if taking an ambulance or a private vehicle to a hospital or clinic.</p>
    
    
                        <h2 id="_Getting_tested">What to do if you’re sick or were exposed</h2>
    
                        <p>It’s important that you continue to follow the recommendations and restrictions of your local public health authority on quarantine or isolation if you: </p>
                        <ul>
                        <li>may have COVID-19 (for example, you feel sick or have been exposed)</li>
                        <li>have tested positive for COVID-19 </li>
                        </ul>
    
    
                        <p>If you have to quarantine or isolate, follow appropriate precautions to reduce the risk of illness spreading within your home. If you don’t have somewhere safe to isolate, contact your local public health authority for available options.</p>
                        <p>Adults and children with mild COVID-19 symptoms can stay at home while recovering. You don’t need to go to the hospital if symptoms are mild.</p>
    
                        <p>Check with your local public health authority about quarantine or isolation periods, and reporting. </p>
    
    
    
                            <section class="well-sm">
                        <div class="container row-no-gutters">
                            <div class="col-md-6 wb-fieldflow-form">
                                <form>
                                    <div class="wb-fieldflow wb-init wb-fieldflow-inited hidden" data-wb-fieldflow="{&quot;defaultselectedlabel&quot;: false, &quot;noForm&quot;: true, &quot;noreqlabel&quot;: true}" id="wb-auto-4">
                                        <p>Choose your local public health authority:</p>
                                                    <ul>
                        <li id="wb-auto-6"><a href="https://www.alberta.ca/rapid-testing-at-home.aspx#testresults">Alberta</a></li>
                        <li id="wb-auto-7"><a href="http://www.bccdc.ca/health-info/diseases-conditions/covid-19/if-you-have-covid-19">British Columbia</a></li>
                        <li id="wb-auto-8"><a href="https://manitoba.ca/covid19/fundamentals/self-isolation.html#what-isolate">Manitoba</a></li>
                        <li id="wb-auto-9"><a href="https://www2.gnb.ca/content/gnb/en/corporate/promo/covid-19/positive_result.html">New Brunswick</a></li>
                        <li id="wb-auto-10"><a href="https://www.gov.nl.ca/covid-19/public-health-guidance/testing/if-you-test-positive/">Newfoundland and Labrador</a></li>
                        <li id="wb-auto-11"><a href="https://www.gov.nt.ca/covid-19/en/services/about-covid-19/testing">Northwest Territories</a></li>
                        <li id="wb-auto-12"><a href="https://www.nshealth.ca/testedpositiveforcovid">Nova Scotia</a></li>
                        <li id="wb-auto-13"><a href="https://gov.nu.ca/health/information/covid-19-information">Nunavut</a></li>
                        <li id="wb-auto-14"><a href="https://covid-19.ontario.ca/covid-19-test-and-testing-location-information#testing-positive-or-negative">Ontario</a></li>
                        <li id="wb-auto-15"><a href="https://www.princeedwardisland.ca/en/information/health-and-wellness/information-for-people-who-have-tested-positive-for-covid-19">Prince Edward Island</a></li>
                        <li id="wb-auto-16"><a href="https://www.quebec.ca/en/health/health-issues/a-z/2019-coronavirus/instructions-for-people-with-covid-19-in-home-isolation">Quebec</a></li>
                        <li id="wb-auto-17"><a href="https://www.saskatchewan.ca/government/health-care-administration-and-provider-resources/treatment-procedures-and-guidelines/emerging-public-health-issues/2019-novel-coronavirus/about-covid-19/self-isolation">Saskatchewan</a></li>
                        <li id="wb-auto-18"><a href="https://yukon.ca/en/health-and-wellness/covid-19-information/your-health-covid-19/what-do-if-you-test-positive-or-are">Yukon</a></li>
                        </ul>
                                    </div><div class="mrgn-tp-md"><div id="wb-auto-5"><label for="wb-auto-19"><span class="field-name">Choose your local public health authority:</span></label><select id="wb-auto-19" name="wb-fieldflowwb-auto-1wb-auto-19" class="full-width form-control mrgn-bttm-md wb-fieldflow-init" data-wb-fieldflow-origin="wb-auto-4" data-wb-fieldflow-source="wb-auto-4" required=""><option value="Alberta" data-wb-fieldflow="{&quot;bind&quot;:&quot;wb-auto-6&quot;,&quot;actions&quot;:[{&quot;action&quot;:&quot;redir&quot;,&quot;url&quot;:&quot;https://www.alberta.ca/rapid-testing-at-home.aspx#testresults&quot;}]}" selected="selected">Alberta</option><option value="British Columbia" data-wb-fieldflow="{&quot;bind&quot;:&quot;wb-auto-7&quot;,&quot;actions&quot;:[{&quot;action&quot;:&quot;redir&quot;,&quot;url&quot;:&quot;http://www.bccdc.ca/health-info/diseases-conditions/covid-19/if-you-have-covid-19&quot;}]}">British Columbia</option><option value="Manitoba" data-wb-fieldflow="{&quot;bind&quot;:&quot;wb-auto-8&quot;,&quot;actions&quot;:[{&quot;action&quot;:&quot;redir&quot;,&quot;url&quot;:&quot;https://manitoba.ca/covid19/fundamentals/self-isolation.html#what-isolate&quot;}]}">Manitoba</option><option value="New Brunswick" data-wb-fieldflow="{&quot;bind&quot;:&quot;wb-auto-9&quot;,&quot;actions&quot;:[{&quot;action&quot;:&quot;redir&quot;,&quot;url&quot;:&quot;https://www2.gnb.ca/content/gnb/en/corporate/promo/covid-19/positive_result.html&quot;}]}">New Brunswick</option><option value="Newfoundland and Labrador" data-wb-fieldflow="{&quot;bind&quot;:&quot;wb-auto-10&quot;,&quot;actions&quot;:[{&quot;action&quot;:&quot;redir&quot;,&quot;url&quot;:&quot;https://www.gov.nl.ca/covid-19/public-health-guidance/testing/if-you-test-positive/&quot;}]}">Newfoundland and Labrador</option><option value="Northwest Territories" data-wb-fieldflow="{&quot;bind&quot;:&quot;wb-auto-11&quot;,&quot;actions&quot;:[{&quot;action&quot;:&quot;redir&quot;,&quot;url&quot;:&quot;https://www.gov.nt.ca/covid-19/en/services/about-covid-19/testing&quot;}]}">Northwest Territories</option><option value="Nova Scotia" data-wb-fieldflow="{&quot;bind&quot;:&quot;wb-auto-12&quot;,&quot;actions&quot;:[{&quot;action&quot;:&quot;redir&quot;,&quot;url&quot;:&quot;https://www.nshealth.ca/testedpositiveforcovid&quot;}]}">Nova Scotia</option><option value="Nunavut" data-wb-fieldflow="{&quot;bind&quot;:&quot;wb-auto-13&quot;,&quot;actions&quot;:[{&quot;action&quot;:&quot;redir&quot;,&quot;url&quot;:&quot;https://gov.nu.ca/health/information/covid-19-information&quot;}]}">Nunavut</option><option value="Ontario" data-wb-fieldflow="{&quot;bind&quot;:&quot;wb-auto-14&quot;,&quot;actions&quot;:[{&quot;action&quot;:&quot;redir&quot;,&quot;url&quot;:&quot;https://covid-19.ontario.ca/covid-19-test-and-testing-location-information#testing-positive-or-negative&quot;}]}">Ontario</option><option value="Prince Edward Island" data-wb-fieldflow="{&quot;bind&quot;:&quot;wb-auto-15&quot;,&quot;actions&quot;:[{&quot;action&quot;:&quot;redir&quot;,&quot;url&quot;:&quot;https://www.princeedwardisland.ca/en/information/health-and-wellness/information-for-people-who-have-tested-positive-for-covid-19&quot;}]}">Prince Edward Island</option><option value="Quebec" data-wb-fieldflow="{&quot;bind&quot;:&quot;wb-auto-16&quot;,&quot;actions&quot;:[{&quot;action&quot;:&quot;redir&quot;,&quot;url&quot;:&quot;https://www.quebec.ca/en/health/health-issues/a-z/2019-coronavirus/instructions-for-people-with-covid-19-in-home-isolation&quot;}]}">Quebec</option><option value="Saskatchewan" data-wb-fieldflow="{&quot;bind&quot;:&quot;wb-auto-17&quot;,&quot;actions&quot;:[{&quot;action&quot;:&quot;redir&quot;,&quot;url&quot;:&quot;https://www.saskatchewan.ca/government/health-care-administration-and-provider-resources/treatment-procedures-and-guidelines/emerging-public-health-issues/2019-novel-coronavirus/about-covid-19/self-isolation&quot;}]}">Saskatchewan</option><option value="Yukon" data-wb-fieldflow="{&quot;bind&quot;:&quot;wb-auto-18&quot;,&quot;actions&quot;:[{&quot;action&quot;:&quot;redir&quot;,&quot;url&quot;:&quot;https://yukon.ca/en/health-and-wellness/covid-19-information/your-health-covid-19/what-do-if-you-test-positive-or-are&quot;}]}">Yukon</option></select></div></div>
                                    <input class="btn btn-default mrgn-tp-md mrgn-bttm-md" type="submit" value="Submit">
                                </form>
                            </div>
                            </div>
                        </section>
    
                        <p>Learn more about:</p>
                        <ul>
                        <li><a href="/en/public-health/services/diseases/2019-novel-coronavirus-infection/symptoms/testing/diagnosing.html">Testing for COVID-19: When to get tested and testing results</a></li>
                        <li><a href="/en/public-health/services/diseases/2019-novel-coronavirus-infection/canadas-reponse/support-provinces-territories.html#v">Safe Voluntary Isolation Sites Program</a></li>
                        </ul>
    
    
    
                        <h2 id="i">Caring for others</h2>
    
    
    
                        <p>You may be caring for someone at home who has or may have COVID-19. If so, you should follow the appropriate precautions to reduce the risk of illness spreading within your home.</p>
                        <p>Adults and children with mild COVID-19 symptoms can stay at home while recovering. You don’t need to go to the hospital if symptoms are mild.</p>
                        <p>Learn more about:</p>
                        <ul>
                        <li><a href="/en/public-health/services/diseases/2019-novel-coronavirus-infection/prevention-risks/how-care-someone-covid-19-home.html">COVID-19: What to do if you or someone in your home is sick</a></li>
                        </ul>
    
    
    
    
                        <h2 id="t">Treating COVID-19</h2>
    
    
                        <p>If you’re concerned about your symptoms, consult your health care provider. They may recommend steps or medications you can take to relieve some of your symptoms, like fever and cough.</p>
                        <p>Follow the advice of your health care provider, who may prescribe treatments.</p>
                        <p>Learn more about:</p>
    
                        <ul>
                        <li><a href="/en/health-canada/services/drugs-health-products/covid19-industry/drugs-vaccines-treatments/treatments.html">COVID-19 treatments</a></li>
                        </ul>
    
    
    
    
    
                        <h2 id="lts">Long-term symptoms</h2>
    
    
                        <p>Some people who become infected with COVID-19 may experience long-term symptoms, even after they recover from their initial infection. This is sometimes called post COVID-19 condition or long COVID. It has also been called post-acute COVID-19 syndrome (PACS) or long haul COVID.</p>
                        <p>Studies are underway to further understand what causes post COVID-19 condition and how to diagnose and treat it.</p>
                        <p>If you think you have this condition, talk to your health care provider about how to manage your symptoms.</p>
                        <p>Learn more about:</p>
                        <ul>
                        <li><a href="/en/public-health/services/diseases/2019-novel-coronavirus-infection/symptoms/post-covid-19-condition.html">Post COVID-19 condition (long COVID)</a></li>
                        </ul>
    
    
    
                        <h2>Related links</h2>
    
    
                        <ul>
                        <li><a href="/en/public-health/services/diseases/2019-novel-coronavirus-infection/awareness-resources.html">Digital factsheets, printable posters and shareable videos on COVID-19 (multilingual products available)</a></li>
                        <li><a href="/en/public-health/services/diseases/2019-novel-coronavirus-infection/digital-resources.html">COVID-19: Social media and promotional resources for Health Canada and Public Health Agency of Canada</a></li>
                        </ul>
    
    
                        </div>`,
            },
        ],
    },
    {
        sourceUrl: "https://www.vch.ca",
        sourceLogoUrl: `https://www.google.com/s2/favicons?domain=www.vch.ca&sz=32`,
        sourceName: "Vancouver Coastal Health",
        jurisdiction: {
            governmentLevel: "city",
            location: [
                "Vancouver",
                "Richmond",
                "North Vancouver",
                "Powell River",
                "Bella Bella",
                "Bella Coola",
                "Bowen Island",
                "Gibsons",
                "Lions Bay",
                "Sechelt",
                "Squamish",
                "West Vancouver",
                "Whistler",
            ],
        },
        subpages: [
            {
                subpageTitle: "COVID-19",
                subpageUrl: "https://www.vch.ca/en/health-topics/covid-19",
                keywords: ["covid-19"],
                subpageSummary:
                    "Coronaviruses are a large family of viruses found mostly in animals. In humans, they can cause diseases ranging from the common cold to more severe diseases such as Severe Acute Respiratory Syndrome (SARS) and Middle East Respiratory Syndrome (MERS-CoV). The illness caused by the 2019 coronavirus has been named COVID-19. Learn more about COVID-19, including information on testing and prevention.",
                content: `<div class="page-content">
                <div class="page-header" data-bundle="topic" data-page-has-image="true" data-is-location="false">
                <div class="container ">
    
                            <div class="col-12">
                        
    
                <nav class="breadcrumb" role="navigation" aria-labelledby="system-breadcrumb">
                    <h2 id="system-breadcrumb" class="visually-hidden">Breadcrumb</h2>
                    <ol>
                                        <li>
                                        <a href="/en">Home</a>
                                    </li>
                                </ol>
                </nav>
    
                    </div>
                    
                            <h1 class="title col-12">
                        COVID-19
                    </h1>
                            <div class="right col-tb-9 col-12">
                        <p class="desc font-body-1">
                            Coronaviruses are a large family of viruses found mostly in animals. In humans, they can cause diseases ranging from the common cold to more severe diseases such as Severe Acute Respiratory Syndrome (SARS) and Middle East Respiratory Syndrome (MERS-CoV). The illness caused by the 2019 coronavirus has been named COVID-19. Learn more about COVID-19, including information on testing and prevention.
                        </p>
                        </div>
                            </div>
                </div>
                                            <div class="section-module container">
                            <div class="col-12 col-tb-8">
                                    
    
    
                <div class="wysiwyg" id="wysiwyg--132426">
                    
    
                <div class="wysiwyg-content">
                    <h3>On July 26, 2024, B.C.’s Provincial Health Officer issued an order to end the public health emergency for COVID-19 and rescinded all related orders.</h3>
    
                </div>
    
                </div>
    
    
                        </div>
                            </div>
                                
                            
                                            <div class="section-module container">
                            <div class="col-12 col-tb-8">
                                    
    
    
                <div class="wysiwyg" id="wysiwyg--69356">
                    <h2 class="title">
                    What is COVID-19?
                    </h2>
                    
    
                <div class="wysiwyg-content">
                    <p>COVID-19 is a respiratory disease caused by the virus SARS-CoV-2. It is spread mostly from person to person.</p>
                <p>Most people who get COVID-19 will experience mild to moderate illness and will not require hospital care. Some people are more likely to become seriously ill from COVID-19 and require medical attention. Vaccination is the most effective way to prevent serious outcomes.</p>
                <p><a href="http://www.bccdc.ca/health-info/diseases-conditions/covid-19/about-covid-19" target="_blank" rel="noreferrer noopener external">Visit BCCDC for more information<svg class="icon icon--external"><use xlink:href="/themes/custom/vch/images/svg-symbols.svg#icon--external"></use></svg></a></p>
    
                </div>
    
                </div>
    
    
                        </div>
                            </div>
                                
                            
                                            <div class="section-module container">
                            <div class="col-12 col-tb-8">
                                    
    
    
                <div class="wysiwyg" id="wysiwyg--101856">
                    <h2 class="title">
                    COVID-19 testing
                    </h2>
                    
    
                <div class="wysiwyg-content">
                    <p>In B.C., A COVID-19 test is recommended when a positive or negative result will inform decisions about treatment or care. Testing is recommended for people with symptoms of COVID-19 and who are:</p>
                <ul>
                <li>at risk of more severe disease and may&nbsp;<a href="https://www2.gov.bc.ca/gov/content/covid-19/vaccine/treatments" target="_blank" rel="noreferrer noopener external">benefit from treatment<svg class="icon icon--external"><use xlink:href="/themes/custom/vch/images/svg-symbols.svg#icon--external"></use></svg></a></li>
                <li>hospitalized</li>
                <li>pregnant</li>
                </ul>
                <p>Otherwise, If you have symptoms of any respiratory infection, such as COVID-19, influenza, RSV or other coronaviruses, stay home until you feel better.</p>
                <ul>
                <li>Stay home and away from others until your fever is gone (without using medicines that reduce fever, like Tylenol), and you feel well enough to participate in daily activities. There is no required self-isolation period.&nbsp;</li>
                <li>Avoid close contact with others, especially people at higher risk of severe illness or complications from respiratory infections.</li>
                <li>If you cannot avoid close contact with others, take other preventive measures, such as wearing a mask in indoor spaces and cleaning your hands regularly.</li>
                </ul>
                <h3>Accessing other COVID-19 care</h3>
                <p>If you are&nbsp;unsure whether you should get a COVID-19 test,&nbsp;<a href="https://covidcheck.gov.bc.ca/" target="_blank" rel="noreferrer noopener external">use the COVID-19 self-assessment<svg class="icon icon--external"><use xlink:href="/themes/custom/vch/images/svg-symbols.svg#icon--external"></use></svg></a>, contact your health-care provider or call 8-1-1. If you are at greater risk of severe disease you can get a PCR test from your physician or nurse practitioner, at a walk-in clinic, or at an Urgent and Primary Care Centre (UPCC). If you experience any symptoms such as loss of consciousness, difficulty breathing or chest pain, do not delay in seeking treatment. Visit your local emergency department or call 9-1-1.&nbsp;</p>
                <h3>Information for health-care providers</h3>
                <p>Family doctor and nurse practitioner offices who intend to administer COVID-19 PCR testing from their clinic location can access appropriate supplies through their usual clinical supply chains. For those not providing testing services on-site, LifeLab sites operating in the VCH region accept laboratory requisitions from health-care providers for COVID-19 testing. Please note on the requisition that this is a “COVID-19 MSP PCR test.”</p>
    
                </div>
    
                </div>
    
    
                        </div>
                            </div>
                                
                            
                                            <div class="section-module container">
                            <div class="col-12 col-tb-8">
                                    
    
    
                <div class="wysiwyg" id="wysiwyg--69361">
                    <h2 class="title">
                    COVID-19 prevention and risks
                    </h2>
                    
    
                <div class="wysiwyg-content">
                    <p>We have many tools, such as vaccines, treatments and our own actions that can protect us from the impacts of COVID-19.</p>
                <p>You can determine how and when to use these tools while supporting your family’s overall physical and mental health. These tools will help everyone be safer from COVID-19 and other illnesses, and they are even more important if you are at higher risk of severe illness from COVID-19.</p>
                <p><a href="http://www.bccdc.ca/health-info/diseases-conditions/covid-19/prevention-risks" target="_blank" rel="noreferrer noopener external">Learn more about how to prevent the spread of COVID-19 in your community.<svg class="icon icon--external"><use xlink:href="/themes/custom/vch/images/svg-symbols.svg#icon--external"></use></svg></a></p>
    
                </div>
    
                </div>
    
    
                        </div>
                            </div>
                                
                            
                                            <div class="section-module container">
                            <div class="col-12 col-tb-8">
                                    
    
    
                <div class="wysiwyg" id="wysiwyg--132431">
                    <h2 class="title">
                    COVID-19 immunization
                    </h2>
                    
    
                <div class="wysiwyg-content">
                    <p>In the fall, the best way to book is to wait for your invitation. If you previously received a COVID-19 vaccine in B.C., you’re already registered in the Get Vaccinated system, no action is required. If you have never received a COVID-19 vaccine in B.C., <a href="https://www2.gov.bc.ca/gov/content/covid-19/vaccine/register#register" target="_blank" rel="noreferrer noopener external">register in the Get Vaccinated system<svg class="icon icon--external"><use xlink:href="/themes/custom/vch/images/svg-symbols.svg#icon--external"></use></svg></a>.</p>
                <p>Learn more about COVID-19 vaccines, such as vaccine safety and considerations and vaccines and children, on the <a href="http://www.bccdc.ca/health-info/diseases-conditions/covid-19/covid-19-vaccine" target="_blank" rel="noreferrer noopener external">BCCDC website<svg class="icon icon--external"><use xlink:href="/themes/custom/vch/images/svg-symbols.svg#icon--external"></use></svg></a>.</p>
    
                </div>
    
                </div>
    
    
                        </div>
                            </div>
                            
    
                    
                    
                </div>`,
            },
            {
                subpageTitle:
                    "Vancouver Mental Health and Substance Use Family Advisory Committee",
                subpageUrl:
                    "https://www.vch.ca/en/vancouver-mental-health-and-substance-use-family-advisory-committee",
                keywords: ["mental health", "substance abuse"],
                subpageSummary:
                    "The Vancouver Mental Health and Substance Use Family Advisory Committee represents the diverse voices of families within Vancouver Mental Health and Substance Use Services and acts in advisory, advocacy, and educational roles to improve the care experience.",
                content: `<article lang="en" class="node-type--article full clearfix">
                    <div class="container center-modules">
                        <div class="section-module col-12 col-tb-8">
                        
    
    
    
                    <div class="article-header">
                    <p class="type">
                            Resource
                        </p>
    
                    <h1>Vancouver Mental Health and Substance Use Family Advisory Committee</h1>
    
                    </div>
    
                        </div>
                    </div>
                    <div class="container center-modules">
                                <div class="section-module col-12 col-tb-8">
                                        <div class="image-with-caption" id="image-with-caption--23616">
                            
                    <div class="media media-image">
                                <picture>
                                    <source srcset="/sites/default/files/styles/3_2_1280/public/2023-09/sand-pattern-overlay.png?itok=BM1QHuVe 1x" media="screen and (min-width: 1440px)" type="image/png" width="1280" height="854">
                                <source srcset="/sites/default/files/styles/3_2_1280/public/2023-09/sand-pattern-overlay.png?itok=BM1QHuVe 1x" media="screen and (min-width: 769px) and (-webkit-min-device-pixel-ratio: 2), screen and (min-width: 769px) and (min--moz-device-pixel-ratio: 2), screen and (min-width: 769px) and (-moz-min-device-pixel-ratio: 2), screen and (min-width: 769px) and (-o-min-device-pixel-ratio: 2/1), screen and (min-width: 769px) and (min-device-pixel-ratio: 2), screen and (min-width: 769px) and (min-resolution: 192dpi), screen and (min-width: 769px) and (min-resolution: 2dppx)" type="image/png" width="1280" height="854">
                                <source srcset="/sites/default/files/styles/3_2_600/public/2023-09/sand-pattern-overlay.png?itok=9Mm3KE5M 1x" media="screen and (max-width: 600px)" type="image/png" width="600" height="400">
                                <source srcset="/sites/default/files/styles/3_2_1280/public/2023-09/sand-pattern-overlay.png?itok=BM1QHuVe 1x" type="image/png" width="1280" height="854">
                                    <img loading="eager" src="/sites/default/files/styles/3_2_1280/public/2023-09/sand-pattern-overlay.png?itok=BM1QHuVe" width="1280" height="854" alt="Decorative image">
    
                    </picture>
    
    
                    
    
                    </div>
    
                                </div>
    
                            </div>
                                </div>
                                    
                        
                                                <div class="container center-modules">
                                <div class="section-module col-12 col-tb-6">
                                        
    
                    <div class="short-description" id="short-description--">
                            <p class="font-body-1">
                        The Vancouver Mental Health and Substance Use Family Advisory Committee represents the diverse voices of families within Vancouver Mental Health and Substance Use Services and acts in advisory, advocacy, and educational roles to improve the care experience.
                        </p>
                        </div>
    
                            </div>
                                </div>
                                    
                                
                                                <div class="container center-modules">
                                <div class="section-module col-12 col-tb-6">
                                        
    
    
                    <div class="wysiwyg" id="wysiwyg--139256">
                        
    
                    <div class="wysiwyg-content">
                        <p>The overview of this committee from the group has been provided by members to help illustrate their goals and contributions to mental health and substance use in the region.&nbsp;</p>
                    <p>If you have questions about this committee, please contact <a href="mailto:VancouverFAC@vch.ca">VancouverFAC@vch.ca</a>.<br><br>&nbsp;</p>
    
                    </div>
    
                    </div>
    
    
                            </div>
                                </div>
                                    
                                
                                                <div class="container center-modules">
                                <div class="section-module col-12 col-tb-6">
                                        
    
    
                    <div class="wysiwyg" id="wysiwyg--139261">
                        <h2 class="title">
                        Membership
                        </h2>
                        
    
                    <div class="wysiwyg-content">
                        <p>Membership consists of family members, persons with lived and living experience, representatives from community agencies, mental health and substance use professionals (including VCH staff), and the <a href="/en/vancouver-consumer-involvement-and-initiatives" data-entity-type="node" data-entity-uuid="a44d3df3-567d-47df-be97-737cc1f3b349" data-entity-substitution="canonical" title="Vancouver Consumer Involvement and Initiatives">Vancouver Family Support and Involvement team</a>. FAC membership should reflect the diversity of services (i.e. mental health and substance use), family relationships (i.e. parent, sibling, spouse, etc.) and culture and experience.</p>
                    <p>Members are residents of Vancouver, or have a family member who receives <a href="/en/health-topics/vancouver-mental-health-and-substance-use-services" data-entity-type="node" data-entity-uuid="dbcc77af-f4d8-48c4-8b26-57ce4db5a8ff" data-entity-substitution="canonical" title="Vancouver mental health and substance use services">mental health and substance use services in Vancouver</a>.&nbsp;</p>
    
                    </div>
    
                    </div>
    
    
                            </div>
                                </div>
                                    
                                
                                                <div class="container center-modules">
                                <div class="section-module col-12 col-tb-6">
                                        
    
    
                    <div class="wysiwyg" id="wysiwyg--139266">
                        <h2 class="title">
                        Goals
                        </h2>
                        
    
                    <div class="wysiwyg-content">
                        <p>Our committee meets monthly (second Tuesday of the month from 5 to 7 p.m. over Zoom) with the objectives to:</p>
                    <ul>
                    <li>Improve the care experience.&nbsp;</li>
                    <li>Facilitate the development and maintenance of a culture that supports and practices family involvement</li>
                    <li>Ensure that services reflect best practices of client and family-centred care</li>
                    <li>Support the ongoing development of a culture of recovery</li>
                    </ul>
    
                    </div>
    
                    </div>
    
    
                            </div>
                                </div>
                                    
                                
                                                <div class="container center-modules">
                                <div class="section-module col-12 col-tb-6">
                                        
    
    
                    <div class="wysiwyg" id="wysiwyg--139271">
                        <h2 class="title">
                        Getting involved
                        </h2>
                        
    
                    <div class="wysiwyg-content">
                        <p>We are always looking for new members. We are comprised of family members and persons with lived and living experience (PLLE).&nbsp; Zoom. Diverse perspectives are valued. We extend a wholehearted welcome to new members.</p>
                    <p>For more information contact us at <a href="mailto:vancouverfac@ vch.ca">vancouverfac@ vch.ca</a>.</p>
                    <p>&nbsp;</p>
                    <p>Learn <a href="/en/health-topics/mental-health-and-substance-use-family-peer-and-consumer-involvement" data-entity-type="node" data-entity-uuid="9da6056f-8dd2-468a-b045-dd483faea333" data-entity-substitution="canonical" title="Mental health and substance use family, peer and consumer involvement ">other opportunities for mental health and substance use involvement at VCH.</a></p>
    
                    </div>
    
                    </div>
    
    
                            </div>
                                </div>
                </article>`,
            },
        ],
    },
    {
        sourceUrl: "https://news.gov.bc.ca",
        // Replace the domain in this link with the source domain>
        sourceLogoUrl:
            "https://www.google.com/s2/favicons?domain=news.gov.bc.ca&sz=32",
        sourceName: "BC Gov News",
        jurisdiction: {
            // "national", "province", "city"
            governmentLevel: "province",
            // no location if national, two letter abbreviation if province eg "BC", array with all applicable cities if city eg ["Vancouver"] or ["Vancouver", "Burnaby"]
            location: "BC",
        },
        subpages: [
            {
                subpageTitle:
                    "PHO's statement on ensuring childrens' vaccinations are up to date",
                subpageUrl:
                    "https://news.gov.bc.ca/releases/2024HLTH0126-001324",
                keywords: ["vaccines", "news"],
                subpageSummary:
                    "Dr. Bonnie Henry, British Columbia's provincial health officer, has issued the following statement to make sure children in B.C. are up to date on all their vaccines as part of back-to-school preparations:",
                content: `<article><p>Dr. Bonnie Henry, British Columbia's provincial health officer, has issued the following statement to make sure children in B.C. are up to date on all their vaccines as part of back-to-school preparations:</p><p>“As the summer holidays draw to a close, many families are starting to think about their back-to-school tasks. Buy school supplies. Take their children for haircuts. Help their kids pick out the perfect outfit for the first day of school.</p><p>“This year, I’m urging you to add another important item to your to-do list: Ensure that your children are up to date on their routine vaccinations and&nbsp;they get vaccinated against common illnesses, such as measles, mumps and rubella, polio, pertussis (whooping cough) and chickenpox.</p><p>“August is the perfect time to take your children for any outstanding vaccines. As kids start or return to child care or school, they’ll be interacting with many friends, caregivers and teachers, increasing their chances of being exposed to these and other infectious diseases. And we know respiratory-illness season will soon be here, bringing COVID-19, influenza and other viruses.</p><p>“Getting your children vaccinated is the best way to protect them from vaccine-preventable illnesses that can cause serious illness, long-term disability and even death.</p><p>“Children six and under are eligible for free vaccines to protect them from more than a dozen diseases, such as COVID-19, influenza, polio, measles and chickenpox. We also provide children with free vaccines at school clinics beginning in Grade 6, including the human papillomavirus and meningitis vaccines, and booster doses of vaccines they received in early childhood.</p><p>“To get your infant or young child vaccinated, visit HealthLinkBC for full details. You can book an appointment at a health unit or at your doctor’s or nurse practitioner’s office if they do immunizations. If your child is older than five, you can also book an appointment to get them vaccinated at some pharmacies.</p><p>“School-aged children and teens typically receive their vaccines at clinics held at schools. However, they can also get vaccinated at health units, some doctors' and nurse practitioners' offices and some pharmacies.</p><p>“As many young adults begin mixing in new social groups this fall, pursue post-secondary opportunities or move into campus housing, vaccines against influenza and meningitis are recommended, along with an updated dose of the COVID-19 vaccine.</p><p>“I encourage everyone to visit HealthLinkBC for more information about childhood and young adult vaccines, and use the online tool to find a health unit close to home. You can also see your children's immunization schedule via HealthLinkBC or view immunization records through the Health Gateway.</p><p>“Whether the young people in your life are infants or young adults, now is the time to protect them through immunizations. Just like packing healthy lunches for your kids and encouraging them to get enough exercise and sleep, getting them vaccinated is one of the most important things you can do to help them have a happy and healthy school year.”</p><p><strong>Learn More:</strong></p><p>Unsure which vaccines your child is due for? You can check their immunization records through the Health Gateway: <a href="https://www.healthgateway.gov.bc.ca/">https://www.healthgateway.gov.bc.ca/</a></p><p>To learn more about COVID-19 vaccines for children, visit:&nbsp;<a href="https://www2.gov.bc.ca/gov/content/covid-19/vaccine/children">https://www2.gov.bc.ca/gov/content/covid-19/vaccine/children</a></p><p>View your children’s immunization schedule:&nbsp;<a href="https://www.healthlinkbc.ca/childhoodvaccines">https://www.healthlinkbc.ca/childhoodvaccines</a></p><p>For people who notice a record is missing, they can update records here: <a href="https://immunizationrecord.gov.bc.ca/">https://immunizationrecord.gov.bc.ca/</a></p><p>Register for a COVID-19 vaccine through the provincial Get Vaccinated system at:&nbsp;<a href="https://www2.gov.bc.ca/gov/content/covid-19/vaccine/register">https://www2.gov.bc.ca/gov/content/covid-19/vaccine/register</a> &nbsp;<br>After you do so, you’ll receive an invitation to book an appointment at a child-friendly clinic in your community.</p><p>Learn more about the provincial immunization program:&nbsp;<a href="https://immunizebc.ca/">https://immunizebc.ca/</a></p><div> </div></article>`,
            },
        ],
    },
];

async function writeSourceAndSubpages(sourceData) {
    await updateKeywords(sourceData);
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
                addNewSourceAndSubpages(sourceData, sourceKeywords);
            } else {
                // Update source
                querySnapshot.forEach((sourceDoc) => {
                    updateSourceAndSubpages(
                        sourceDoc,
                        sourceData,
                        sourceKeywords
                    );
                });
            }
        });
}

async function updateKeywords(sourceData) {
    for (const subpage of sourceData.subpages) {
        let keywordsWithAliases = [];
        const keywordsFromCrawl = [...subpage.keywords];
        for (const keyword of keywordsFromCrawl) {
            const aliases = await findOrCreateKeywordRecord(
                keyword,
                keywordsFromCrawl
            );
            keywordsWithAliases = [...keywordsWithAliases, ...aliases];
        }
        subpage.keywords = keywordsWithAliases;
    }
}

async function findOrCreateKeywordRecord(keyword, allKeywordsForSubpage) {
    const lowercaseKeyword = keyword.toLowerCase();

    const keywordSnapshot = await db
        .collection("keywords")
        .where("aliases", "array-contains", lowercaseKeyword)
        .get();

    if (keywordSnapshot.size > 0) {
        let allAliases = [];
        keywordSnapshot.forEach((keywordDoc) => {
            allAliases = [...allAliases, ...keywordDoc.data().aliases];
        });
        return allAliases;
    } else {
        await addNewKeyword(lowercaseKeyword, allKeywordsForSubpage);
        console.log("finished adding keyword");
        return [lowercaseKeyword];
    }
}

async function addNewKeyword(lowercaseKeyword, allKeywordsForSubpage = []) {
    const categories = [
        "diseases",
        "healthcare services",
        "mental health",
        "vaccines",
    ];

    try {
        // Assume that if the keywords for a subpage include a category,
        // it is reasonable to assume the other keywords for that page should be in that category.
        // Otherwise categorization and adding aliases will be done manually for now,
        // consider finding APIs for such in future
        await db.collection("keywords").add({
            aliases: [lowercaseKeyword],
            name:
                lowercaseKeyword[0].toUpperCase() +
                lowercaseKeyword.substring(1),
            category:
                categories.find((category) => {
                    allKeywordsForSubpage.includes(category);
                }) ?? "uncategorized",
        });

        console.log("added keyword", lowercaseKeyword);
    } catch (error) {
        console.error("Error adding keyword", error);
    }
}

function addNewSourceAndSubpages(sourceData, sourceKeywords) {
    db.collection("sources")
        .add({
            crawledAt: firebase.firestore.FieldValue.serverTimestamp(),
            keywords: sourceKeywords,
            jurisdiction: sourceData.jurisdiction,
            sourceName: sourceData.sourceName,
            sourceUrl: sourceData.sourceUrl,
            sourceLogoUrl: sourceData.sourceLogoUrl,
        })
        .then((sourceDocRef) => {
            // Create new subpages subcollection for Source and add subpages
            const subpagesCollectionRef = sourceDocRef.collection("subpages");
            const batch = db.batch();
            for (const subpage of sourceData.subpages) {
                const newSubpageRef = subpagesCollectionRef.doc();
                batch.set(newSubpageRef, {
                    content: subpage.content,
                    keywords: subpage.keywords,
                    subpageTitle: subpage.subpageTitle,
                    subpageUrl: subpage.subpageUrl,
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
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
                    const allNewSubpagesSnapshot = sourceDocRef
                        .collection("subpages")
                        .get();
                    console.log(allNewSubpagesSnapshot);
                    const allNewSubpageIds = allNewSubpagesSnapshot.docs.map(
                        (doc) => doc.id
                    );
                    notifyUsersWithSearchSubs(
                        sourceKeywords,
                        sourceDocRef,
                        allNewSubpageIds
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
}

function updateSourceAndSubpages(sourceDoc, sourceData, sourceKeywords) {
    const batch = db.batch();

    // Update existing source
    batch.update(sourceDoc.ref, {
        crawledAt: firebase.firestore.FieldValue.serverTimestamp(),
        keywords: firebase.firestore.FieldValue.arrayUnion(...sourceKeywords),
    });

    const subpageUrls = sourceData.subpages.map(
        (subpage) => subpage.subpageUrl
    );
    // Get existing subpages
    sourceDoc.ref
        .collection("subpages")
        .where("subpageUrl", "in", subpageUrls)
        .get()
        .then((querySnapshot) => {
            const allNewOrUpdatedSubpageRefs = [];

            const subpagesCollectionRef = sourceDoc.ref.collection("subpages");

            for (const subpage of sourceData.subpages) {
                const existingDoc = querySnapshot.docs.find((subpageDoc) => {
                    return subpageDoc.data().subpageUrl === subpage.subpageUrl;
                });

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
                    allNewOrUpdatedSubpageRefs.push(existingDoc.ref);
                } else {
                    // Add new subpage
                    const newSubpageRef = subpagesCollectionRef.doc();
                    batch.set(newSubpageRef, {
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
                    allNewOrUpdatedSubpageRefs.push(newSubpageRef);
                }
            }
            // Send batch to db
            batch
                .commit()
                .then(() => {
                    console.log(
                        "Updated source and subpages for",
                        sourceData.sourceUrl
                    );
                    notifyUsersOnUpdate(
                        sourceKeywords,
                        sourceDoc.ref,
                        allNewOrUpdatedSubpageRefs
                    );
                })
                .catch((error) => {
                    console.error(
                        `Error updating source ${sourceData.sourceUrl} and subpages`,
                        error
                    );
                });
        })
        .catch((error) => {
            console.error(
                `Error getting existing subpages for ${sourceData.sourceUrl}`,
                error
            );
        });
}

function notifyUsersOnUpdate(keywords, sourceRef, subpagesRefs) {
    const subpageIds = subpagesRefs.map((ref) => ref.id);
    notifyUsersWithSearchSubs(keywords, sourceRef, subpageIds);
    notifyUsersWithSourceSearchSubs(sourceRef, keywords, subpageIds);
    notifyUsersWithAllSourceSubs(sourceRef, subpageIds);
    notifyUsersWithSubpageSubs(sourceRef, subpagesRefs);
}

async function writeSearchSubNotifications(
    userDoc,
    subscriptions,
    sourceRef,
    subpageIds
) {
    for (const sub of subscriptions) {
        const pagesMaybeForSearchSnapshot = await sourceRef
            .collection("subpages")
            .where("keywords", "array-contains-any", sub.search.split(","))
            .get();

        const pagesForSearchDocs = pagesMaybeForSearchSnapshot.docs.filter(
            (pageDoc) => subpageIds.includes(pageDoc.id)
        );

        await userDoc.ref.collection("notifications").add({
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            isRead: false,
            relatedSubscriptions: sub,
            source: sourceRef,
            subpages: pagesForSearchDocs.map((doc) => doc.id),
        });
        console.log("notification created for", userDoc.id, sub);
    }
}

// For users subscribed to indiviual subpages, create one notification for source with all the subpages they are subbed to
async function notifyUsersWithSubpageSubs(sourceRef, subpagesRefs) {
    const usersWithSubpageSubs = [];
    for (const subpageRef of subpagesRefs) {
        const usersSnapshot = await db
            .collection("users")
            .where("subscriptions", "array-contains", subpageRef)
            .get();
        for (const userDoc of usersSnapshot.docs) {
            const foundUserIndex = usersWithSubpageSubs.findIndex((user) =>
                user.userRef.isEqual(userDoc.ref)
            );
            if (foundUserIndex === -1) {
                usersWithSubpageSubs.push({
                    userRef: userDoc.ref,
                    relatedSubscriptions: [subpageRef],
                    subpages: [subpageRef.id],
                });
            } else {
                usersWithSubpageSubs[foundUserIndex].relatedSubscriptions.push(
                    subpageRef
                );
                usersWithSubpageSubs[foundUserIndex].subpages.push(
                    subpageRef.id
                );
            }
        }
    }
    if (usersWithSubpageSubs.length < 1) {
        console.log("No users with subpage subs to notify");
        return;
    }
    for (const user of usersWithSubpageSubs) {
        await user.userRef.collection("notifications").add({
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            isRead: false,
            relatedSubscription: user.relatedSubscriptions,
            source: sourceRef,
            subpages: user.subpages,
        });
        console.log("notification created for", user);
    }
}

// For users subscribed to all source updates, create notification for the source with all new and updated subpages
async function notifyUsersWithAllSourceSubs(sourceRef, subpageIds) {
    const usersWithAllSourceSubsSnapshot = await db
        .collection("users")
        .where("subscriptions", "array-contains", sourceRef)
        .get();
    if (usersWithAllSourceSubsSnapshot.empty) {
        console.log("No users with all source subs to notify");
        return;
    }
    for (const userDoc of usersWithAllSourceSubsSnapshot.docs) {
        await userDoc.ref.collection("notifications").add({
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            isRead: false,
            relatedSubscriptions: sourceRef,
            source: sourceRef,
            subpages: subpageIds,
        });
        console.log(
            "notification created for source",
            sourceRef.id,
            "for user",
            userDoc.id
        );
    }
}

// For users subscribed to source with search create a notification for each search for the source with all subpages that have the keywords they are subscribed to.
async function notifyUsersWithSourceSearchSubs(
    sourceRef,
    keywords,
    subpageIds
) {
    const usersMightHaveSourceSearchSubsSnapshot = await db
        .collection("users")
        .where("subscriptions", "array-contains", sourceRef.id)
        .get();
    if (usersMightHaveSourceSearchSubsSnapshot.empty) {
        console.log("No users with source search subs to notify");
        return;
    }
    for (const userDoc of usersMightHaveSourceSearchSubsSnapshot.docs) {
        const sourceWithSearchSubs = userDoc
            .data()
            .subscriptions.filter((subscription) => {
                if (typeof subscription === "string") {
                    return false;
                }
                if (!subscription.search || !subscription.sourceRef) {
                    return false;
                }

                const subSearchTerms = subscription.search.split(",");

                return (
                    keywords.some((keyword) =>
                        subSearchTerms.includes(keyword)
                    ) && subscription.sourceRef.isEqual(sourceRef)
                );
            });
        if (sourceWithSearchSubs.length < 1) {
            continue;
        }
        writeSearchSubNotifications(
            userDoc,
            sourceWithSearchSubs,
            sourceRef,
            subpageIds
        );
    }
}

// For users subscribed to search, create a notification for each search for the source with all subpages that have the keywords they are subscribed to. Only this need to be done with a new source
async function notifyUsersWithSearchSubs(keywords, sourceRef, subpageIds) {
    try {
        const usersMightHaveSearchSubsSnapshot = await db
            .collection("users")
            .where("subscriptions", "array-contains-any", keywords)
            .get();
        if (usersMightHaveSearchSubsSnapshot.empty) {
            console.log("No users with search subs to notify");
            return;
        }
        for (const userDoc of usersMightHaveSearchSubsSnapshot.docs) {
            const searchSubs = userDoc
                .data()
                .subscriptions.filter((subscription) => {
                    if (typeof subscription === "string") {
                        return false;
                    }
                    if (!subscription.search || subscription.sourceRef) {
                        return false;
                    }

                    const subSearchTerms = subscription.search.split(",");

                    return keywords.some((keyword) =>
                        subSearchTerms.includes(keyword)
                    );
                });
            if (searchSubs.length < 1) {
                continue;
            }
            writeSearchSubNotifications(
                userDoc,
                searchSubs,
                sourceRef,
                subpageIds
            );
        }
    } catch (error) {
        console.error(error);
    }
}

function writeCrawlDataToFirebase(sourcesWithSubpages) {
    for (const sourceData of sourcesWithSubpages) {
        writeSourceAndSubpages(sourceData);
    }
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
