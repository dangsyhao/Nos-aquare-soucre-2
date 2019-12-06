
class Plugin {
    constructor() {
    }

    build(server) {
        server.serverinfo().registerPluginInfo({
            id:            'notasquare-cms-ui',
            name:          'Not A Square CMS',
            group:         'application',
            description:   '',
            dependencies:  [],
            links:         []
        })

        server.webpack().addAlias('frontend-components',               __dirname + '/components')

        // Pages
        server.webpack().addBundle('frontend-pages-home',              __dirname + '/pages/bundles/home.js')
        server.express().get('/',                                      server.helper().serveBundlePage('frontend-pages-home'))
    }
}

module.exports = Plugin;
