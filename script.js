

var apiKey = "B6GBq28PvQWCueJq2LIzArIQ4AYRWz3F";
var startYear = $("#start-year").val().trim();
var endYear = $("#end-year").val().trim();
var startDate = startYear + "0101";
var endDate = endYear + "1231";
var keyWord = $("#search-item").val().trim();
var apiURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=" + startDate +"&end_date=" + endDate + "&api-key=" + apiKey; "&q=" + keyWord;


console.log(apiURL);
