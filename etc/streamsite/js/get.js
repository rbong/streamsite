var webPage = require ('webpage');
var page = webPage.create ();

page.open ('http://suptv.org', function (status) {

  var title = page.evaluate (function () {
    return document.getElementById ('refs').src;
  });

  console.log (title);
  phantom.exit ();

});
