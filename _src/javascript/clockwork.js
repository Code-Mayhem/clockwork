(function ($, window, undefined) {

  "use strict";
  window.code = window.code || {};
  var clockwork = window.code.clockwork = function (options) {

    var url = 'https://damp-mesa-4509.herokuapp.com/';

    function init () {
      httpGet();
    }

    function httpGet()
    {
        var req = new XMLHttpRequest();
        req.open( "GET", url, false ); // false for synchronous request
        req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
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