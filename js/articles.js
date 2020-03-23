var articles = [
    {
	    banner:"img/elvetia/banner.jpg",
        title: "Elveția: simplitate și tehnologie",
        date: "Februarie 2019",
        category: "Europa",
        page: "~/elvetia.html",
        description: "Opt zile, sute de mii de pași, trenuri, ciocolată, din inima orașelor tehnologizate în colțuri natură parcă uitate. Stereotipuri, clișee, bani și brânză. Harta traseului parcurs în încercarea de a nu lăsa nimic nedescoperit."
    },
    [
        {
	        banner:"img/elvetia/banner.jpg",
            title: "Elveția: simplitate și tehnologie",
            date: "Februarie 2019",
            category: "Europa",
            page: "~/elvetia.html",
            description: "Opt zile, sute de mii de pași, trenuri, ciocolată, din inima orașelor tehnologizate în colțuri natură parcă uitate. Stereotipuri, clișee, bani și brânză. Harta traseului parcurs în încercarea de a nu lăsa nimic nedescoperit."
        },
        {
	        banner:"img/elvetia/banner.jpg",
            title: "Elveția: simplitate și tehnologie",
            date: "Februarie 2019",
            category: "Europa",
            page: "~/elvetia.html",
            description: "Opt zile, sute de mii de pași, trenuri, ciocolată, din inima orașelor tehnologizate în colțuri natură parcă uitate. Stereotipuri, clișee, bani și brânză. Harta traseului parcurs în încercarea de a nu lăsa nimic nedescoperit."
        }
    ]
];
function GetArticleTemplate() {
    return '<article class="blog_style1"> \
                <div class="blog_img"> \
                    <img class="img-fluid" src="{banner}" alt="{title}">\
                </div>\
                <div class="blog_text">\
					<div class="blog_text_inner">\
						<div class="cat">\
							<a class="cat_btn" href="#">Citește</a>\
							<a href="#"><i class="fa fa-calendar" aria-hidden="true"></i> {date}</a>\
							<a href="#"><i class="fa fa-map-pin" aria-hidden="true"></i> {category}</a>\
						</div>\
						<a href="#"><h4>{title}</h4></a>\
                        <p>{description}</p>\
						<a class="blog_btn" href="{page}">Mai mult...</a>\
					</div>\
				</div>\
            </article>';
}
function GetSmallArticleTemplate() {
    return '<div class="col-md-6">\
                <article class="blog_style1 small"> \
                    <div class="blog_img"> \
                        <img class="img-fluid" src="{banner}" alt="{title}">\
                    </div>\
                    <div class="blog_text">\
					    <div class="blog_text_inner">\
						    <div class="cat">\
							    <a class="cat_btn" href="#">Citește</a>\
							    <a href="#"><i class="fa fa-calendar" aria-hidden="true"></i> {date}</a>\
							    <a href="#"><i class="fa fa-map-pin" aria-hidden="true"></i> {category}</a>\
						    </div>\
						    <a href="#"><h4>{title}</h4></a>\
                            <p>{description}</p>\
						    <a class="blog_btn" href="{page}">Mai mult...</a>\
					    </div>\
				    </div>\
                </article>\
            </div>';
}

(function(){
    var eElement = document.getElementById("articles-div");
    articles.forEach(function(item) { 
        if(!Array.isArray(item)) {
            var article = GenerateArticle(item);
            
            eElement.insertBefore(htmlToElement(article), eElement.firstChild);
        } else {
        var element
            var element = '<div class="row">';
            item.forEach(function(smallArticle) {
                var smallArticle = GenerateArticle(smallArticle, true);
                element += smallArticle;
            });
            element += '</div>';
            eElement.insertBefore(htmlToElement(element), eElement.firstChild);
		}
        
    });
})();

function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}

function GenerateArticle(item, small = false) {
        var article = "";
        if(small) { 
            article = GetSmallArticleTemplate();
        } else {
            article = GetArticleTemplate();
		}
        var variables = getWordsBetweenCurlies(article);
        variables.forEach(function(variable) {
            article = article.replace("{"+variable+"}", item[variable]);
        });
        return article;
}

function getWordsBetweenCurlies(str) {
  var results = [], re = /{([^}]+)}/g, text;

  while(text = re.exec(str)) {
    results.push(text[1]);
  }
  return results;
}

