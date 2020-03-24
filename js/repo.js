var articleLines = [
    { id: 1, order: 1 },
    { id: 2, order: 2 }
];

var countries = [
    { id: 1, name: "Elveția" },
    { id: 2, name: "România" }
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
        banner: "img/elvetia/banner.jpg",
        title: "Elveția: simplitate și tehnologie",
        date: "Februarie 2019",
        countryId: 1,
        articleLineId: 2,
        category: "Europa",
        page: "~/elvetia.html",
        description: "Opt zile, sute de mii de pași, trenuri, ciocolată, din inima orașelor tehnologizate în colțuri natură parcă uitate. Stereotipuri, clișee, bani și brânză. Harta traseului parcurs în încercarea de a nu lăsa nimic nedescoperit."
    },
    {
        id: 3,
        banner: "img/elvetia/banner.jpg",
        title: "Elveția: simplitate și tehnologie",
        date: "Februarie 2019",
        countryId: 1,
        articleLineId: 2,
        category: "Europa",
        page: "~/elvetia.html",
        description: "Opt zile, sute de mii de pași, trenuri, ciocolată, din inima orașelor tehnologizate în colțuri natură parcă uitate. Stereotipuri, clișee, bani și brânză. Harta traseului parcurs în încercarea de a nu lăsa nimic nedescoperit."
    }
];

function GetArticles() {
    var fullArt = [];
    articles.forEach(function (item) {
        item.country = countries.filter(obj => {
            return obj.id === item.countryId
        })[0].name;
        fullArt.push(item);
    });

    articleLines.forEach(function (articleLine) {
        articleLine.child = articles.filter(obj => {
            return obj.articleLineId === articleLine.id
        });
    });

    return articleLines.sort((a, b) => (a.order > b.order) ? 1 : -1);
}