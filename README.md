# Care Compass

## 1. Project Description

Care Compass is a mobile-first web application that compiles healthcare information from government agencies and websites. Users can create accounts that allow them to receive curated healthcare news relevant to where they live in Canada. Our core functionality centres around a curated news feed, information grouped by topics, a keyword search system to allow users to quickly find specific information, and a notifications system where users can subscribe to pages, topics and searches to be notified when the information is updated or new information is released. Results can be previewed on Care Compass, or users can visit the page on the government healthcare website from which the article is based.

## 2. Names of Contributors

-   My name is Patrick Kennedy. I'm a recent highschool graduate and I'm excited to finish the CST course.
-   Hi, my name is Kai. I'm excited to get in and work on a real world problem.
-   Hi, my name is Victor! I'm a CST Student at BCIT's Downtown Campus.

## 3. Technologies and Resources Used

List technologies (with version numbers), API's, icons, fonts, images, media or data sources, and other resources that were used.

-   HTML, CSS, JavaScript
-   Bootstrap 5.0 (Frontend library)
-   Firebase 8.0 (BAAS - Backend as a Service)
-   jQuery 3.5 (JavaScript library)
-   Material Icons (Icon Set from Google)
-   Geocoder.ca (API for getting location data from postal code)
-   Data from Canadian government healthcare websites - sources shown in app

## 4. Complete setup/installion/usage

State what a user needs to do when they come to your project. How do others start using your code or application?
Here are the steps ...

-   ...
-   ...
-   ...

## 5. Known Bugs and Limitations

Here are some known bugs:

-   ...
-   ...
-   ...

## 6. Features for Future

What we'd like to build in the future:

-   ...
-   ...
-   ...

## 7. Contents of Folder

Content of the project folder:

```
 Top level of project folder:
├── .gitignore               # Git ignore file
├── index.html               # landing HTML file, this is what signed out users see when you come to url
├── news.html                # news feed HTML file, this is what users see when they sign in
├── login.html               # Sign in page
├── notifications.html       # Page displaying the user's notifications
├── topics.html              # Page for browsing by healthcare topics
├── results.html             # Page where results are displayed for a topic or search
├── settings.html            # Page where the user can change their settings
├── 404.html                 # Default 404 page created by Firebase
├── .firebaserc              # Firebase hosting configuration file
├── .firebase.json           # Firebase hosting configuration file
├── .firebase.indexes.json   # Firestore configuration file
├── .firestore.rules         # Firestore configuration file
└── README.md

It has the following subfolders and files:
├── .git                      # Folder for git repo
├── images                    # Folder for images
    /compass.svg              # Care Compass logo SVG
├── scripts                   # Folder for scripts
    /authentication.js        # Firebase authentication JS
    /crawler.js               # Web crawler JS
    /news.js                  # Get and print news articles JS
    /notifications.js         # Load and display notifications JS
    /postalcode.js            # Get and update user's postal code from the News page JS
    /results.js               # Populate the Results page JS
    /script.js                # Logout and get user's location functions JS
    /settings.js              # Get and update user's postal code from the Settings page, delete account data JS
    /skeleton.js              # Skeleton for header and footer JS
    /topics.js                # Populate the Topics page with keywords JS
    /writeUserSettings.js     # Get the user's email for subscriptions JS
├── styles                    # Folder for styles
    /news_styles.css          # News page styling CSS
    /notifications_styles.css # Notifications styling CSS
    /results_styles.css       # Results styling CSS
    /style.css                # Global, header, and footer styling CSS
    /topics_styles.css        # Topics styling CSS
├── text                      # Folder for texts
    /footer.html              # Footer module HTML
    /header_after_login.html  # Header module after the user is logged in HTML
    /header_before_login.html # Header module before the user is logged in HTML


```
