$(document).ready ( function () {

    $("#action-button").click (function () {
        var searchString = $("#movietitle").val();
        var theURL = "http://www.omdbapi.com/?t=" + searchString + "&y=&plot=short&r=json";
        $('<a target="_blank" href="' + theURL + '">' + theURL + '</a>').appendTo("body");
        $.getJSON( theURL, function( data ) {
          var items = [];
          $.each( data, function( key, val ) {
              items.push( "<li id='" + key + "'>" + key + ":" + val + "</li>" );
          });
         
          $( "<ul/>", {
            "class": "my-new-list",
            html: items.join( "" )
          }).appendTo( "body" );
        });
    });    
});