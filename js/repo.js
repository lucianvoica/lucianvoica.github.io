var articleLines = [
    { id: 1, order: 1 },
    { id: 2, order: 2 }
];

var countries = [
    { id: 1, name: "Elveția" },
    { id: 2, name: "România" },
    { id: 3, name: "Italia" }
];

var articles = [
    {
        id: 1,
        banner: "img/elvetia/banner.jpg",
        title: "Elveția: simplitate și tehnologie",
        date: "Februarie 2019",
        countryId: 1,
        articleLineId: 1,
        category: "Europa",
        page: "~/elvetia.html",
        description: "Opt zile, sute de mii de pași, trenuri, ciocolată, din inima orașelor tehnologizate în colțuri natură parcă uitate. Stereotipuri, clișee, bani și brânză. Harta traseului parcurs în încercarea de a nu lăsa nimic nedescoperit."
    },
    {
        id: 2,
        banner: "img/italia/banner.jpg",
        title: "Italia: Milano și Como",
        date: "Mai 2019",
        countryId: 3,
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
        countryId: 2,
        articleLineId: 2,
        category: "Europa",
        page: "~/romania.html",
        description: "Itinerariu de 5 zile în Bucovina, Iași și Piatra Neamț."
    }
];

function GetArticles(pageIndex, itemPerPage) {
    var articleLinesAux = articleLines;
    var neededArticleLines = articleLinesAux.slice((pageIndex - 1) * itemPerPage, pageIndex * itemPerPage);

    var neededArticles = [];

    neededArticleLines.forEach(function (item) {
        neededArticles.push(articles.filter(obj => {
            return obj.articleLineId === item.id
        }));
    });
    neededArticles = [].concat.apply([], neededArticles);

    var fullArt = [];
    neededArticles.forEach(function (item) {
        item.country = countries.filter(obj => {
            return obj.id === item.countryId
        })[0].name;
        fullArt.push(item);
    });

    neededArticleLines.forEach(function (articleLine) {
        articleLine.child = neededArticles.filter(obj => {
            return obj.articleLineId === articleLine.id
        });
    });

    return neededArticleLines.sort((a, b) => (a.order > b.order) ? 1 : -1);
}

function GetArticleLinesCount() {
    return articleLines.length;
}