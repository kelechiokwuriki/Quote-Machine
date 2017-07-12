$(document).ready(function() {
    var url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en";

    document.getElementById('newQuote').addEventListener('click', function() {

      fetch(url)
         .then(function(response) {
            return response.json();
         }).then(function(quoteData) {
            document.getElementById('quote').innerHTML = quoteData.quoteText;
            document.getElementById('quoteSource').innerHTML = quoteData.quoteAuthor;

            var tweet = 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + quoteData.quoteText + '-by ' + quoteData.quoteAuthor;
            document.getElementById('tweet').setAttribute("href", tweet);
         });
   });
   //  $('#newQuote').on("click", function(){
   //    $.when($.ajax(url)).then(function(data){
   //         $('#quote').html(data.quoteText);
   //         $('#quoteSource').html(data.quoteAuthor);
   //         var tweet = 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + data.quoteText + '-by ' + data.quoteAuthor;
   //         $('#tweet').attr("href", tweet);
   //    });
   //  });
});
