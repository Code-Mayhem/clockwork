module.exports = function() {

    "use strict";

    var clockwork = require('clockwork')({key:'1c9f1d2c68926ecd328074b16e60762765c5e290'});

    function init() {
		console.log('clockwork');

		//clockworkMessages();
    }

    function clockworkMessages() {
    	clockwork.sendSms({ To: '447715398374', Content: 'Test!'}, 
		  function(error, resp) {
		    if (error) {
		        console.log('Something went wrong', error);
		    } else {
		        console.log('Message sent',resp.responses[0].id);
		    }
		});
    }

    init();
};















