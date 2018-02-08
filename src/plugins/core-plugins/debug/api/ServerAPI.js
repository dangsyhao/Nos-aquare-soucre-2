
module.exports.getServerInfo = function(server) {
    return function(req, res) {
        var fs = require('fs');

        var serverinfo = {
            build:  fs.readFileSync('/opt/www/.build', 'utf-8')
        }

        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(serverinfo));
    }
}
