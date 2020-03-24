(function(){
    var eElement = document.getElementById("articles-div");

    var art = GetArticles();
    art.forEach(function (item) {
        if (item.child.length == 1) {
            var article = GenerateArticle(item.child[0]);
            eElement.innerHTML += article;
        } else {
        var element
            var element = '<div class="row">';
            item.child.forEach(function (smallArticle) {
                var smallArticle = GenerateArticle(smallArticle, true);
                element += smallArticle;
            });
            element += '</div>';
            eElement.innerHTML += element;
		}
    });
})();

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
							<a href="#"><i class="fa fa-map-pin" aria-hidden="true"></i> {country} - {category}</a>\
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
							    <a href="#"><i class="fa fa-map-pin" aria-hidden="true"></i> {country}</a>\
						    </div>\
						    <a href="#"><h4>{title}</h4></a>\
                            <p>{description}</p>\
						    <a class="blog_btn" href="{page}">Mai mult...</a>\
					    </div>\
				    </div>\
                </article>\
            </div>';
}
function getWordsBetweenCurlies(str) {
  var results = [], re = /{([^}]+)}/g, text;

  while(text = re.exec(str)) {
    results.push(text[1]);
  }
  return results;
}

