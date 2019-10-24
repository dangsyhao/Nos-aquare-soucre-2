const express = require('express');
const request =         require('request')

class ServerHelper {
    constructor(server) {
        this.server = server
    }

    serveBundlePage(bundleId) {
        var _this = this;
        return function(req, res) {
            var params = {};
            params = {
                query:      req.query,
                config:     _this.server.config().all()
            }
            params.config['mode'] = 'edit'
            var applicationTitle = _this.server.config().get('appTitle', '')

            res.send(`
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <title>` + applicationTitle + `</title>
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta content="width=device-width, initial-scale=1" name="viewport" />
                        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet"/>
                        <script type="text/javascript">
                            var __params = ` + JSON.stringify(params) + `;
                        </script>
                    </head>
                    <body class="page-profile">
                        <div id="root">
                        </div>
                        <script type="text/javascript" src="/public/build/` + bundleId + `-bundle.js" charset="utf-8"></script>
                    </body>
                </html>
            `)
        }
    }

    serveStatic(url, staticDir) {
        this.server.express().use(url, express.static(staticDir));
    }

}

module.exports = ServerHelper
