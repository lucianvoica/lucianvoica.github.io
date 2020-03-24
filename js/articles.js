var itemsPerPage = 5;
(function () {
    var pageIndex = parseInt(document.getElementById("pageNumber").innerText);
    InitPage(pageIndex)

    InitStaticElements();
})();

function InitStaticElements() {
    InitPopularPosts();
}

function InitPopularPosts() {
    var container = document.getElementById("popular-posts-div");
    var articles = GetPopularArticles();
    articles.forEach(function (item) {
        container.innerHTML += GeneratePopularArticle(item);
    });
}

function InitPage(pageIndex) {
    var eElement = document.getElementById("articles-div");
    eElement.innerHTML = "";
    var art = GetArticles(pageIndex, itemsPerPage);
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
    var numberOfArticleLines = GetArticleLinesCount();
    if (numberOfArticleLines >= itemsPerPage) {
        document.getElementById("articles-pagination").innerHTML = GetPaginationTemplate(pageIndex, numberOfArticleLines);
    }
}

function ChangePage(index) {
    document.getElementById("pageNumber").innerText = index;
    InitPage(index);
}

function GetPaginationTemplate(pageIndex, nbLines) {
    var nav = '<nav class="blog-pagination justify-content-center d-flex">\
        <ul class="pagination" >';
    if (pageIndex > 1) {
        nav += '<li class="page-item" onclick="ChangePage(' + (pageIndex - 1) + ')">\
                    <a href="#" class="page-link" aria-label="Previous">\
                        <span aria-hidden="true">\
                            <span class="lnr lnr-chevron-left"></span>\
                        </span>\
                    </a>\
                </li>';
    }
    for (var i = 1; i <= (nbLines / itemsPerPage); i++) {
        nav += '<li class="page-item ' + (i == pageIndex? 'active':'') + '" onclick="ChangePage('+i+')"><a href="#" class="page-link">'+ i +'</a></li>';
    }
    if (pageIndex < nbLines / itemsPerPage) {
        nav += '<li class="page-item" onclick="ChangePage(' + (pageIndex + 1) +')">\
                    <a href = "#" class="page-link" aria-label="Next" >\
                        <span aria-hidden="true">\
                            <span class="lnr lnr-chevron-right"></span>\
                        </span>\
                            </a>\
                        </li>';
    }

    nav += '</ul>\
    </nav>';
    return nav;
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

function GeneratePopularArticle(item) {
    var article = GetPopularBlocTemplate();
    var variables = getWordsBetweenCurlies(article);
    variables.forEach(function (variable) {
        article = article.replace("{" + variable + "}", item[variable]);
    });
    return article;
}
function GetPopularBlocTemplate() {
    return '<div class="media post_item">\
                <img src = "{thumbnail}" alt="post">\
                <div class="media-body">\
                    <a href="{page}"><h3>{title}</h3></a>\
                    <p>{date}</p>\
                </div>\
            </div>';
}
