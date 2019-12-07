
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
        server.webpack().addBundle('frontend-pages-home',                                  __dirname + '/pages/bundles/home.js')
        server.webpack().addBundle('frontend-pages-technology-web-technologies',           __dirname + '/pages/bundles/technology_web_technologies.js')
        server.webpack().addBundle('frontend-pages-technology-cloud-platform',             __dirname + '/pages/bundles/technology_cloud_platform.js')
        server.webpack().addBundle('frontend-pages-technology-machine-learning',           __dirname + '/pages/bundles/technology_machine_learning.js')
        server.webpack().addBundle('frontend-pages-about-us-portfolio',                    __dirname + '/pages/bundles/about_us_portfolio.js')
        server.express().get('/',                                      server.helper().serveBundlePage('frontend-pages-home'))
        server.express().get('/technology/web-technologies',           server.helper().serveBundlePage('frontend-pages-technology-web-technologies'))
        server.express().get('/technology/cloud-platform',             server.helper().serveBundlePage('frontend-pages-technology-cloud-platform'))
        server.express().get('/technology/machine-learning',           server.helper().serveBundlePage('frontend-pages-technology-machine-learning'))
        server.express().get('/about-us/portfolio',                    server.helper().serveBundlePage('frontend-pages-about-us-portfolio'))
    }
}

module.exports = Plugin;
