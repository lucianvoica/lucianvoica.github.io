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
        { id: 4, path: "img/galery/italia4.jpg", legend: "Hartă circuit" },
        { id: 5, path: "img/galery/como1.jpg", legend: "Lacul Como, Varenna" },
        { id: 6, path: "img/galery/como2.jpeg", legend: "Faleza Varenna" },
        { id: 7, path: "img/galery/como3.jpg", legend: "Vila Monastero , Varenna" },
        { id: 8, path: "img/galery/como4.jpg", legend: "Bellagio" },
        { id: 9, path: "img/galery/como5.jpg", legend: "Vaporaș pe lacul Como" },
        { id: 10, path: "img/galery/como6.jpg", legend: "Bellagio" },
        { id: 11, path: "img/galery/como7.jpg", legend: "Portul Como" }
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
            banner: "img/banners/elvetia.jpg",
            thumbnail: "img/galery/thumbnailElvetia.png",
            isPopular: true,
            title: "Elveția: simplitate și tehnologie",
            date: "Februarie 2019",
            country: GetCountryById(1).name,
            articleLineId: 1,
            category: "Europa",
            link: "circuite.html?elvetia-simplitate-si-tehnologie",
            description: "Opt zile, sute de mii de pași, trenuri, ciocolată, din inima orașelor tehnologizate în colțuri natură parcă uitate. Stereotipuri, clișee, bani și brânză. Harta traseului parcurs în încercarea de a nu lăsa nimic nedescoperit."
        },
        {
            id: 2,
            banner: "img/banners/como.jpg",
            thumbnail: "img/galery/thumbnailMilano1.png",
            isPopular: true,
            title: "Italia: Milano și lacul Como",
            date: "Mai 2019",
            country: GetCountryById(3).name,
            articleLineId: 2,
            category: "Europa",
            link: "circuite.html?italia-milano-si-lacul-como",
            description: "City break de 4 zile, suficient pentru a vedea 5 localități magnifice."
        },
        {
            id: 3,
            banner: "img/banners/voronet.jpg",
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
            text: `<div>
                        <div class="location-pin">Milano</div>
                        <div class="location-pin">Varenna</div>  
                        <div class="location-pin">Bellagio</div>
                        <div class="location-pin">Como</div> 
                        <div class="location-pin">Bergamo</div>           
                    </div>
                ` + "<p>Italia, ce țară minunată. Pizza, paste și iubire - primele 3 cuvinte-clișeu la care mă gândesc atunci când vine vorba de Italia.</p>",
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
            text: `<p>Am lăsat bagajele la cazare și am început plimbarea.</p>
                   <p>Fiind prima dată când ajung acolo, clar că primele obiective pe care am vrut să le văd au fost cele care au facut Milano celebru oriunde în lume. So, direcția centru: piața domului și galeriile Vittorio Emanuele II.</p>`,
            galery: [1, 2]
        },
        // {
        //     id: 4,
        //     articleId: 2,
        //     type: 6,
        //     text: "<p>După care am început călătoria la pas prin oraș și am vizitat foarte multe lucruri.</p>",
        //     cityArticle: 1
        // }
        {
            id: 5,
            articleId: 2,
            type: 1,
            text: `<p>Chiar dacă Milano reprezinta un muzeu în aer liber, in ziua 3 am luat trenul dis de dimineață și am pornit într-un day-trip în zona lacului Como.</p>`,
            galery: [1, 2]
        },
        {
            id: 6,
            articleId: 2,
            type: 3,
            text: `<p>Prima oprire: Varenna. Primul contact cu lacul Como: magnific. In jurul orei 9 se mai putea zări puțină ceață în depărtare. Pe faleza lacului am ajuns la Vila Monastero, am mâncat o pizza și am plecat cu un vaporaș spre Bellagio.</p>
                   <p>Bellagio este o localitate puțin mai aglomerată, înconjurată de apă, străduțe înguste și același aer cochet italian. </p>`,
            galery: [5, 6, 7, 9, 11]
        },
        {
            id: 7,
            articleId: 2,
            type: 2,
            text: `<p> Am strabatut străzile preț de câteva ore, apoi am urcat iar în vaporaș pentru a ajunge în orașul Como. Daca din Varenna in Bellagio vaporașul a facut 15-20 de minute, din Bellagio până în Como am facut aproximativ 2 ore. De o parte și de alta a lacului se vedeau localități boeme, cu proprietăți ce păreau scumpe.</p>
            <p>În Como am servit cina în centrul orașului după care ne-am îndreptat spre gară pentru a lua trenul înapoi spre Milano. </p`,
            galery: [8, 10]
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