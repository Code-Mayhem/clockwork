(function ($, window, undefined) {

  "use strict";
  window.code = window.code || {};
  var clockwork = window.code.clockwork = function (options) {

    var url = ' https://damp-mesa-4509.herokuapp.com/ HTTP/1.1';

    function init () {
      httpGet();
    }

    function httpGet()
    {
        var req = new XMLHttpRequest();
        req.open( "POST", url, false ); // false for synchronous request
        req.setRequestHeader('Content-Type', ' application/x-www-form-urlencoded');
        req.send( null );

        console.log(req.responseText);

        return req.responseText;
    }

    init();
  };

} (jQuery, window));

$(function () {
  var clockwork = new code.clockwork();
});