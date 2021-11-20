# [amba-web-analysisfrontend](https://trends.ambalytics.com/)
--------

The Frontend is implemented in JavaScript based on Vue3 and the *PrimeVue*[^1] *UI component library*. The Frontend is a single page application, i.e., everything is contained and hosted with one HTML file, which can be statically hosted. Additionally, a *progressive web app (PWA)* is provided using the “vue-pwa” feature, allowing for a cached application and app-like behavior on supported systems.

The Frontend is optimized to work with different devices and screens, reordering the layout in responsive ways. It allows its usage on phones, tablets, and screens of different resolutions and sizes. Other meta tags generate a pretty preview card with an image on sharing the URL on Twitter. The individual pages are loaded in junks to improve the initial loading speed of the site. The JS framework heavily influences the speed with its big initial load and runtime at the start, further slowed down by all the charts. However, once the JS is loaded or cached in the case of PWA, the website works very fast, and even in regular browsers, the service worker running the PWA will be caching the site limiting speed by the API.


On top of the page, the user can choose for which duration the data should be displayed. The duration is added as a query to the URL to keep it persistent even when sharing the URL. Although not all data is used for querying data, most data depends on and will change. The Web Page is using special meta data tags to be used by Twitter to allow a better presentation if the URL is shared. This can be seen in Figure 1.

<img src="https://user-images.githubusercontent.com/84507772/142741244-0523db73-7da0-4021-97b3-9d375f7c9405.png" width=40% height=40%>

### Pages

**“Home” Page**
The homepage shows a quick overview of the top trending publications, authors, and fields of study on the left. The newest processed tweet is in the middle, displaying extracted data and adding the metadata for the publication referenced. This can be seen in Figure 2. On the right, the total stats for the currently selected duration is shown. The next row shows the world cloud and world map using data from all processed tweets. The following two charts display the Twitter activity and the trending changes over the selected time. At the bottom of the Page, top types, languages, hashtags, and entities are displayed.

![page_home](https://user-images.githubusercontent.com/84507772/142741255-029a6001-4c9a-4f95-bbe6-1bcf75a2c064.png)

**“COVID-19” Page**
The COVID-19 page shows only trending publications about COVID-19. A chart displays the changes in trending data, updating automatically. A Table showing further information is located beneath. This looks similar to the Publications page that can be seen in Figure 3. Changes in the table will trigger changes in the chart, thus ensuring the publications in the chart and table are the same. The search can be used to filter publications based on their title.

**“Publications” Page**
Trending publications show all trending publications together with a chart showing the publication’s trend values over the duration. The Table and chart work like on the COVID-19 page. A Screenshot can be seen in Figure 3.

![page_publications](https://user-images.githubusercontent.com/84507772/142741261-164bc6c6-4f0f-4dc4-8fcc-4a72da19b51d.png)

**“Publication” Page**
The publication site is accessed by its DOI in the URL. If available and a public license is recognized, the abstract is shown. Otherwise, only metadata is displayed. Additionally, the sources are shown and linked. Only sources used to retrieve the publication metadata are displayed. Authors and fields of study are also displayed. A border is used around the box to highlight the publication information. An external link icon in the top right of the box allows a user fast access to the publication source. A screenshot can be seen in Figure 4. A profile chart shows how the publication ranks in different categories against other publications. A stats container displays actual numbers collected in the system. World map and Wordcloud are shown filtered based on the publication. Tweet and Twitter activity are displayed before tweet type, language, hashtags and top entity charts.

![page_publication](https://user-images.githubusercontent.com/84507772/142741271-f978ddd3-4ba2-457a-9f46-d23529164fdf.png)

**“Fields of Study” Page**
The Fields of Study Page shows a table with currently trending fields of study and their respective trend data. This can be seen in Figure 5.

![page_fields_of_study](https://user-images.githubusercontent.com/84507772/142741300-102dfb66-937d-454b-a2c8-183741f3f48e.png)

**“Field of Study” Page**

The Field of Study Page shows an overview of a field of study. On top, a table with trending publications in this field of study is shown. This can be seen in Figure 6. Beneath the publications, trend history is displayed next to a profile chart and a stat container. World map and Wordcloud follow before the newest Tweet and Twitter activity is shown.

![page_fos](https://user-images.githubusercontent.com/84507772/142741322-d57ac574-a4e2-4f0f-94d7-7fbbf2278470.png)

**“Authors” Page**
The Authors Page displays a table with currently trending authors and their respective trend data. This is similar to the Fields of Study Page shown in Figure 6.

**“Author” Page**
The Author Page shows an overview of a specific author, similiar to the Field of Study Page shown in Figure 6.

**“About” Page**
The About Page shows an explanation of how the system works, links to Publication Sources, Source Code, Ambalytics and an Imprint. This can be seen in Figure 7.

![page_about](https://user-images.githubusercontent.com/84507772/142741336-7ab90562-a6fd-4088-8bf4-c26bb5ff973e.png)


### Visual Components

**Word Cloud**
The word cloud component displays the top words used in all tweets collected. The size of the word corresponds to its count. An Example from the Homepage can be seen in Figure 8. The bigger the word, the bigger the count. The Font Size mapper scales the words to maximize a difference in sizes while still being readable linearly. With a click on a word, a corresponding Twitter page is opened. This may be the search or the profile page of a Twitter user. This data for this component is only saved as total data accumulated and will not change with the duration selection. The map is available for all publications, single publications, authors, or fields of study.

<img src="https://user-images.githubusercontent.com/84507772/142741344-bdbe85e0-a83b-4580-b325-0f89e60f4ec1.png" width=40% height=40%>


**Map**
The Map Component displays the number of Tweet Authors displayed on a world map. A logarithmic color scale is used to visualize differences. An Example from the Homepage can be seen in Figure 9.

<img src="https://user-images.githubusercontent.com/84507772/142741353-9bdf1696-d290-47c6-be2d-0aec1ec84dbc.png" width=40% height=40%>

The scale allows apparent differences compared to a linear color scale. This data for this component is only saved as total data accumulated and will not change with the duration selection. The map is available for all publications, single publications, authors, or fields of study.

**Line Charts**
There are two kinds of line charts displayed. One shows the event data over some time, while the other shows calculated trend data.. An Example from the Homepage can be seen in Figure 10 The top trending publications will be shown on the home page, while on the COVID-19 Page, Field of Study pages, and Author pages, filtered publications are shown. By default, the score is selected, but the user can choose between all stored metrics to view and compare the publications over the selected duration. By clicking on a Publication in the legend, it will be highlighted, and a Link with the title is shown, which can be used to open the corresponding publication page.

![trending](https://user-images.githubusercontent.com/84507772/142741368-1debec0f-be47-48c6-8ca8-2a7ac24f810d.png)

**Donut Charts**
Twitter-specific data shows the top values of Languages, Hashtags, Tweet Types, and Twitter Entities as Donut charts. An example can be seen in Figure 11.

![component_donut](https://user-images.githubusercontent.com/84507772/142741369-f2e835a8-85e7-436c-84f1-4c8900d288ee.png)

**Stats**
The stats component shows some interesting numbers for the current page. It contains numbers only calculated for the current duration like tweet count, publication count, total followers reached, average score per tweet, average sentiment, or average abstract similarity.

**Ambalytics Tweet**
The Tweet component shows the newest tweet next to the linked publication details and some processed data. It will ask before loading external twitter content. Additionally, it can be set to update the tweet automatically. Shown are the score, the Bot Rating, Sentiment, Abstract Similarity, Followers, Language, Author Location, Source, Type, Entities, and time of processing.

**Profile Chart**
The Profile component displays a series of stats and compares it on a scale from 0-100 to the average trending publication in the selected duration. The component shows the mean score, Mean Bot Rating, Sum Follower, Mean Sentiment, Mean Abstract Difference, Mean Questions, Mean Exclamations, and Mean Length.

[^1]: <https://www.primefaces.org/primevue/>; accessed 10-November-2021
