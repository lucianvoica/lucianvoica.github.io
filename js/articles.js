(function(){
    var articles = null;

    var Connect = new XMLHttpRequest();
    Connect.open("GET", "articles.xml", false);
    Connect.setRequestHeader("Content-Type", "text/xml");
    Connect.send(null);
    var TheDocument = Connect.responseXML;
    var articles = TheDocument.childNodes[0];

    console.log(articles);
})();