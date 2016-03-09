var webPage = require ('webpage');
var page = webPage.create ();

page.open ('http://suptv.org', function (status) {

  var title = page.evaluate (function () {
    return document.getElementById ('player').children [0].src;
  });

  console.log (title);
  phantom.exit ();

});
