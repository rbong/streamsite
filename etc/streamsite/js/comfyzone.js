var webPage = require ('webpage');
var page = webPage.create ();

page.open ('http://comfy.zone', function (status) {

  var title = page.evaluate (function () {
    return document.getElementById ('stream').children [0].src;
  });

  console.log (title);
  phantom.exit ();

});
