var repo = angular.module("repositoryModule", []);
repo.factory('RepoFactory', function() {
    var articleLines = [
        { id: 1, order: 1 },
        { id: 2, order: 2 },
    ];

    var countries = [
        { id: 1, name: "Elveția" },
        { id: 2, name: "România" },
        { id: 3, name: "Italia" }
    ];

    var photos = [
        { id: 1, path: "img/galery/italia1.jpg", legend: "Domul din Milano" },
        { id: 2, path: "img/galery/italia2.jpg", legend: "Galeriile Vittorio Emanuele II" },
        { id: 3, path: "img/galery/thumbnailMilano.jpg", legend: "Milano" },
        { id: 4, path: "img/galery/italia4.jpg", legend: "Harta circuit" }
    ];

    var cityArticles = [{
        id: 1,
        cityId: 1,
        title: "Două zile în Milano",
        thumbnail: 3,
        page: 'city.html?doua-zile-in-milano'
    }];

    var paragraphTypes = [
        { id: 1, name: "text" },
        { id: 2, name: "text-photo" },
        { id: 3, name: "photo-text" },
        { id: 4, name: "text-map" },
        { id: 5, name: "photo" },
        { id: 6, name: "link" }
    ];

    var cities = [
        { id: 1, name: "Milano", country: GetCountryById(2) }
    ];

    var articles = [{
            id: 1,
            banner: "img/elvetia/banner.jpg",
            thumbnail: "img/elvetia/thumbnail.png",
            isPopular: true,
            title: "Elveția: simplitate și tehnologie",
            date: "Februarie 2019",
            country: GetCountryById(1).name,
            articleLineId: 1,
            category: "Europa",
            link: "circuit.html?elvetia-simplitate-si-tehnologie",
            description: "Opt zile, sute de mii de pași, trenuri, ciocolată, din inima orașelor tehnologizate în colțuri natură parcă uitate. Stereotipuri, clișee, bani și brânză. Harta traseului parcurs în încercarea de a nu lăsa nimic nedescoperit."
        },
        {
            id: 2,
            banner: "img/italia/banner.jpg",
            thumbnail: "img/italia/thumbnail.png",
            isPopular: true,
            title: "Italia: Milano și lacul Como",
            date: "Mai 2019",
            country: GetCountryById(3).name,
            articleLineId: 2,
            category: "Europa",
            link: "circuit.html?italia-milano-si-lacul-como",
            description: "City break de 4 zile, suficient pentru a vedea 5 localități magnifice."
        },
        {
            id: 3,
            banner: "img/romania/banner.jpg",
            title: "România: circuit în Bucovina",
            date: "august 2019",
            country: GetCountryById(2).name,
            articleLineId: 2,
            category: "Europa",
            link: "/romania.html",
            description: "Itinerariu de 5 zile în Bucovina, Iași și Piatra Neamț."
        }
    ];

    var paragraphs = [{
            id: 1,
            articleId: 2,
            type: 4,
            text: "<p>Italia, ce țară minunată. Pizza, paste și iubire - primele 3 cuvinte-clișeu la care mă gândesc atunci când vine vorba de Italia.</p>",
            galery: [4]
        },
        {
            id: 2,
            articleId: 2,
            type: 1,
            text: "<p>Itinerariul a început cu atracția principală a city break-ului, Milano.</p>" +
                "<p>Zborul a fost dis de dimineață, în jurul orei 8, direct București-Bergamo (Wizz air, low cost), zborul este unul scurt, am ajuns devreme în Bergamo (Italia fiind cu o oră în un urma României). De acolo am luat un autobuz până la gara din Milano (aproximativ încă o oră de mers), lângă care am avut și cazarea.</p>"
        },
        {
            id: 3,
            articleId: 2,
            type: 2,
            text: "<p>Am lăsat bagajele la cazare și am început plimbarea.</p>" +
                "<p>Fiind prima dată când ajung acolo, clar că primele obiective pe care am vrut să le văd au fost cele care au facut Milano celebru oriunde în lume. So, direcția centru: piața domului și galeriile Vittorio Emanuele II.</p>",
            galery: [1, 2]
        },
        {
            id: 4,
            articleId: 2,
            type: 6,
            text: "<p>După care am început călătoria la pas prin oraș și am vizitat foarte multe lucruri.</p>",
            cityArticle: 1
        }
    ];

    //#region Getters
    function GetById(list, id) {
        return list.filter(obj => {
            return obj.id === id
        })[0];
    }

    function GetCountryById(id) {
        return GetById(countries, id);
    }

    //#endregion

    var factory = {};
    factory.GetPopularArticles = function() {
        return articles.filter(obj => {
            return obj.isPopular === true;
        });
    }

    factory.GetArticleLines = function() {
        articleLines.forEach(function(articleLine) {
            articleLine.child = articles.filter(obj => {
                return obj.articleLineId === articleLine.id
            });
        });
        return articleLines.sort((a, b) => (a.order > b.order) ? 1 : -1);
    }

    factory.GetCircuitByLink = function(link) {
        var article = articles.filter(obj => {
            return obj.link === link;
        })[0];

        article.paragraphs = paragraphs.filter(obj => {
            return obj.articleId === article.id;
        });
        return article;
    }

    factory.GetPhotoById = function(id) {
        return GetById(photos, id);
    }

    factory.GetCityArticleById = function(id) {
        return GetById(cityArticles, id);
    }

    return factory;
});