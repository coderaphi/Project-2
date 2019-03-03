const fetch = require('node-fetch');

module.exports = function() {

    return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&channelId=UCZzFRKsgVMhGTxffpzgTJlQ&q=training&type=video&key=AIzaSyCRKBaWuXHkfpm1NX2uT2AhcUievnGtH6A`)
        .then(function(res) {
            return res.json();
        });

}