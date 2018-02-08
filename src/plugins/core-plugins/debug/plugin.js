const ServerAPI = require('./api/ServerAPI')

class Plugin {
    constructor() {
        this.INDEX_BUNDLE_ID = 'core-plugins-debug-index';
    }

    build(server) {
        server.serverinfo().registerPluginInfo({
            id:            'core-plugins-debug',
            name:          'Debug',
            group:         'core-plugins',
            description:   'Debug tool',
            dependencies:  [],
            links:         [
                {
                    url:     '/_debug',
                    title:   'Debug'
                }
            ]
        })

        server.webpack().addBundle(this.INDEX_BUNDLE_ID, __dirname + '/bundles/index.js')

        server.express().get('/_debug', server.helper().serveBundlePage(this.INDEX_BUNDLE_ID))
        server.express().get('/_debug/api/server', ServerAPI.getServerInfo(server))
    }
}

module.exports = Plugin;
