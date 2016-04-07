"use strict"
var webPage = require ('webpage');
var flash = require ('./flash.js');
var page = webPage.create ();
var system = require ('system');
var url = system.args [1];
var id = system.args [2];

page.onInitialized = function () {
    // fake flash
    flash (page);
}

page.open (url, function (status) {
    var title = page.evaluate (function (_id) {
        var t = document.getElementById (_id);
        if (t && t.children && t.children [0]) {
            t = t.children [0].src;
        }
        else {
            var t = document.getElementsByClassName (_id);
            if (t [0] && t [0].children [0]) {
                 t = t [0].children [0].src;
            }
            else {
              return;
            }
        }
        return t;
    }, id);

    console.log (title);
    phantom.exit ();
});
