// ==UserScript==
// @name              500chipxin
// @namespace	        http://chandankumar.com
// @description	        example script to alert "post 500 px to chimein!"
// @include		http://500px.com/photo/*
// ==/UserScript==
// a function that loads jQuery and calls a callback function when jQuery has finished loading
function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

// the guts of this userscript
function main() {
  var btn = $("<button class ='button blue small'>Chime this</button>")
    .click(function(){
      window.chimein=window.chimein||{};
      var imgurl = $("#mainphoto").attr('src');
      D=document;
      window.chimein.chimeInPopup = window.open('http://chime.in/chimebutton/compose/?utm_source=500chipxin&utm_medium=compose&utm_campaign=chime&chime[body]='+ location.href + '&chime[url]=' + imgurl + '&chime[title]='  + encodeURIComponent(D.title.substr(0,65)), 'chimeInBookmarklet', 'status=0,toolbar=0, location=1, menubar=0, directories=0, resizable=0, scrollbars=0, height=430, width=600')
    return false;
    });
  $('#subheader > h2').append(btn);
}

// load jQuery and execute the main function
addJQuery(main);
//
