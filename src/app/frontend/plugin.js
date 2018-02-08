
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
        server.webpack().addBundle('frontend-cms-page-view',            __dirname + '/cms/page/bundles/view.js')
        server.express().get('/',                                       server.helper().serveBundlePage('frontend-cms-page-view'))
        server.express().get('/why-genes-matter',                       server.helper().serveBundlePage('frontend-cms-page-view'))
        server.express().get('/faq',                                    server.helper().serveBundlePage('frontend-cms-page-view'))
        server.express().get('/about-us',                               server.helper().serveBundlePage('frontend-cms-page-view'))
        server.express().get('/get-supplements',                        server.helper().serveBundlePage('frontend-cms-page-view'))
        server.express().get('/press',                                  server.helper().serveBundlePage('frontend-cms-page-view'))
        server.express().get('/blog',                                   server.helper().serveBundlePage('frontend-cms-page-view'))
        server.express().get('/contact',                                server.helper().serveBundlePage('frontend-cms-page-view'))
        server.express().get('/overview',                               server.helper().serveBundlePage('frontend-cms-page-view'))

        // 404
        server.express().get('*',                                       server.helper().serveBundlePage('frontend-cms-page-view'))
    }
}

module.exports = Plugin;
