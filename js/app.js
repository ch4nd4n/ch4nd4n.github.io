if (!ck) var ck = {};
ck = function(){
	var albUrl = 'http://api.flickr.com/services/feeds/photoset.gne?set=72157628304411349&nsid=60474555@N00&lang=en-us&jsoncallback=?';
	var imgs = [];
	var init = function(){
		$.getJSON(albUrl,{
			format: "json"
		}, function(d){
			var str = '';
			$.each(d.items, function(i,item){
				var oUrl = item.media.m.replace("_m.jpg", "_b.jpg");
				str +="<div class='photo'><a href='#!" + oUrl +"'><img class ='img' src='"+ item.media.m +"'/></a></div>";
				if(i==0){$("#photoHolder").attr("src", oUrl);}
			});
			$("#album").append(str);
			$("#album > .photo > a").click(function(){
				var img_url = $(this).find("img").attr("src").replace("_m.jpg", "_b.jpg");
				$("#photoHolder").attr("src", img_url);
			});
		});
	}
	init();
}
new ck();
