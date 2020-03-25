app.factory('RepoFactory', function () {
    var articleLines = [
        { id: 1, order: 1 },
        { id: 2, order: 2 },
    ];

    var countries = [
        { id: 1, name: "Elveția" },
        { id: 2, name: "România" },
        { id: 3, name: "Italia" }
    ];

    function GetCountryById(id) {
        return countries.filter(obj => {
            return obj.id === id
        });
    }

    var articles = [
        {
            id: 1,
            banner: "img/elvetia/banner.jpg",
            thumbnail: "img/elvetia/thumbnail.png",
            isPopular: true,
            title: "Elveția: simplitate și tehnologie",
            date: "Februarie 2019",
            country: GetCountryById(1).name,
            articleLineId: 1,
            category: "Europa",
            page: "~/elvetia.html",
            description: "Opt zile, sute de mii de pași, trenuri, ciocolată, din inima orașelor tehnologizate în colțuri natură parcă uitate. Stereotipuri, clișee, bani și brânză. Harta traseului parcurs în încercarea de a nu lăsa nimic nedescoperit."
        },
        {
            id: 2,
            banner: "img/italia/banner.jpg",
            thumbnail: "img/italia/thumbnail.png",
            isPopular: true,
            title: "Italia: Milano și Como",
            date: "Mai 2019",
            country: GetCountryById(3).name,
            articleLineId: 2,
            category: "Europa",
            page: "~/italia.html",
            description: "City break de 4 zile, suficient pentru a vedea 4 localități magnifice."
        },
        {
            id: 3,
            banner: "img/romania/banner.jpg",
            title: "România: circuit în Bucovina",
            date: "august 2019",
            country: GetCountryById(2).name,
            articleLineId: 2,
            category: "Europa",
            page: "~/romania.html",
            description: "Itinerariu de 5 zile în Bucovina, Iași și Piatra Neamț."
        }
    ];

    var factory = {};
    factory.luc = 10;
    factory.GetPopularArticles = function() {
        return articles.filter(obj => {
            return obj.isPopular === true;
        })
    }
    
    factory.GetArticleLines = function() {
        articleLines.forEach(function (articleLine) {
            articleLine.child = articles.filter(obj => {
                return obj.articleLineId === articleLine.id
            });
        });
        return articleLines.sort((a, b) => (a.order > b.order) ? 1 : -1);
    }
    return factory;
});