
class Plugin {
    constructor() {
    }

    build(server) {
        server.serverinfo().registerPluginInfo({
            id:            'claya-cms-front-ui',
            name:          'CMS Front',
            group:         'application',
            description:   '',
            dependencies:  [],
            links:         []
        })

        server.webpack().addAlias('frontend-cms-container',            __dirname + '/cms/container')
        server.webpack().addAlias('frontend-cms-components',           __dirname + '/cms/page/components')
        server.webpack().addAlias('frontend-components',               __dirname + '/components')

        server.webpack().addAlias('frontend-form', __dirname + '/components/fields/export.js')

        // CMS
        server.webpack().addBundle('frontend-pages-home',                                __dirname + '/pages/bundles/home.js')
        server.webpack().addBundle('frontend-pages-technology-web-technologies',         __dirname + '/pages/bundles/technology_web_technologies.js')
        server.express().get('/',                                                        server.helper().serveBundlePage('frontend-pages-home'))
        server.express().get('/technology/web-technologies',                             server.helper().serveBundlePage('frontend-pages-technology-web-technologies'))
    }
}

module.exports = Plugin;
