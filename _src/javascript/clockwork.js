(function ($, window, undefined) {

  "use strict";
  window.code = window.code || {};
  var clockwork = window.code.clockwork = function (options) {

    var url = 'https://damp-mesa-4509.herokuapp.com/receive-sms?to=84433&from=441234567890&content=Hello+World&keyword=hello&msg_id=AB_12345';

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