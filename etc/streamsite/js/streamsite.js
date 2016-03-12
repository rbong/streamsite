var webPage = require ('webpage');
var page = webPage.create ();
var system = require ('system');
var url = system.args [1];
var id = system.args [2];

page.open (url, function (status) {
    var title = page.evaluate (function (_id) {
        return document.getElementById (_id).children [0].src;
    }, id);

    console.log (title);
    phantom.exit ();
});
