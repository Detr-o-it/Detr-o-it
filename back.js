var a=function xys() {
  // var obj = document.getElementById("1").value;
  // console.log(obj);
  // var links;
  // var myHeaders = new Headers();
  // myHeaders.append(
  //   "X-RapidAPI-Key",
  //   "32037bb75emsh76ad9e7a3d267bdp1b6efbjsnf7b695777f04"
  // );
  // myHeaders.append("X-RapidAPI-Host", "google-search74.p.rapidapi.com");

  // var requestOptions = {
  //   method: "GET",
  //   headers: myHeaders,
  //   redirect: "follow",
  // };

  // fetch(
  //   "https://google-search74.p.rapidapi.com/search?query=" +
  //     obj +
  //     "&gl=us&lr=en&num=5&start=0&sort=relevance",
  //   requestOptions
  // )
  //   .then((response) => response.json())
  //   .then((success) => (links = success))
  //   .catch((error) => console.log("error", error));
  // console.log(links["status"]);

  var links = {
    
      "status": "success",
      "estimatedResultCount": 12010000000,
      "items": [
          {
              "title": "India - Wikipedia",
              "htmlTitle": "<b>India</b> - Wikipedia",
              "link": "https://en.wikipedia.org/wiki/India",
              "displayLink": "en.wikipedia.org",
              "snippet": "India, officially the Republic of India (Hindi: Bhārat Gaṇarājya), is a country in South Asia. It is the seventh-largest country by area, the second-most ...",
              "htmlSnippet": "<b>India</b>, officially the Republic of <b>India</b> (Hindi: Bhārat Gaṇarājya), is a country in South Asia. It is the seventh-largest country by area, the second-most&nbsp;..."
          },
          {
              "title": "National Portal of India",
              "htmlTitle": "National Portal of <b>India</b>",
              "link": "https://www.india.gov.in/",
              "displayLink": "www.india.gov.in",
              "snippet": "National Portal of India provides a single-window access to information and services that are electronically delivered from all Government Departments, ...",
              "htmlSnippet": "National Portal of <b>India</b> provides a single-window access to information and services that are electronically delivered from all Government Departments,&nbsp;..."
          },
          {
              "title": "Air India",
              "htmlTitle": "Air <b>India</b>",
              "link": "https://www.airindia.in/",
              "displayLink": "www.airindia.in",
              "snippet": "Air India, the National Carrier of India, offers connections to over 70 international and 100 domestic destinations for your travel plan.",
              "htmlSnippet": "Air <b>India</b>, the National Carrier of <b>India</b>, offers connections to over 70 international and 100 domestic destinations for your travel plan."
          },
          {
              "title": "Government of India, Department of Post",
              "htmlTitle": "Government of <b>India</b>, Department of Post",
              "link": "https://www.indiapost.gov.in/",
              "displayLink": "www.indiapost.gov.in",
              "snippet": "India Post, Ministry of Communication & Technology.",
              "htmlSnippet": "<b>India</b> Post, Ministry of Communication &amp; Technology."
          },
          {
              "title": "Incredible India: Official Website for Ministry of Tourism India",
              "htmlTitle": "Incredible <b>India</b>: Official Website for Ministry of Tourism <b>India</b>",
              "link": "https://www.incredibleindia.org/",
              "displayLink": "www.incredibleindia.org",
              "snippet": "It covers an area of 32, 87,263 sq. km, extending from the snow-covered Himalayan heights to the tropical rain forests of the south. As the 7th largest country ...",
              "htmlSnippet": "It covers an area of 32, 87,263 sq. km, extending from the snow-covered Himalayan heights to the tropical rain forests of the south. As the 7th largest country&nbsp;..."
          }
      ]
  };
  var returnObj = [
    links["items"][0]["link"],
    links["items"][1]["link"],
    links["items"][2]["link"],
    links["items"][3]["link"],
    links["items"][4]["link"],
  ];
  console.log(returnObj);
  return returnObj;
};
var ab = a();


var menu = document.getElementById("menu");
var lis = menu.getElementsByTagName("li");

for (var i = 0; i < 5; i++) {
  var li = lis[i];
  console.log("hihi");
  var aTag = document.createElement("a");
  aTag.setAttribute("href", ab[i]);
  aTag.innerText = ab[i];
  li.appendChild(aTag);
  aTag.target = "xyz";
}
