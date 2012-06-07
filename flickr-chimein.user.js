// ==UserScript==
// @name					flichime
// @namespace			http://chandankumar.com
// @description		example script that lets you post images to chime in easily
// @include				http://www.flickr.com/photos/*
// @version			 	0.1
// ==/UserScript==

var primary_col = document.getElementById("primary-column");
console.log("Fired");
if(primary_col){
	var ankor = document.createElement("a");
	var photo = document.getElementById("liquid-photo-buffer");
	var imgurl = photo.src;
	D=document;
	ankor.innerHTML = "Chime This";
	ankor.href = "#";
	ankor.className = "Butt comment-button-post ywa-track";
	ankor.onclick = function(){
		window.open('http://chime.in/chimebutton/compose/?utm_source=flichime&utm_medium=compose&utm_campaign=chime&chime[body]='+ location.href + '&chime[url]=' + imgurl + '&chime[title]='  + encodeURIComponent(D.title.substr(0,65)), 'chimeInBookmarklet', 'status=0,toolbar=0, location=1, menubar=0, directories=0, resizable=0, scrollbars=0, height=430, width=600');
		return false;
	};
	primary_col.insertBefore(ankor, primary_col.childNodes[0]);
}
