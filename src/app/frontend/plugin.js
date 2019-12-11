
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
        server.webpack().addBundle('frontend-pages-home',                                     __dirname + '/pages/bundles/home.js')
        server.webpack().addBundle('frontend-pages-technology-web-technologies',              __dirname + '/pages/bundles/technology_web_technologies.js')
        server.webpack().addBundle('frontend-pages-technology-cloud-platform',                __dirname + '/pages/bundles/technology_cloud_platform.js')
        server.webpack().addBundle('frontend-pages-technology-machine-learning',              __dirname + '/pages/bundles/technology_machine_learning.js')
        server.webpack().addBundle('frontend-pages-about-us-portfolio',                       __dirname + '/pages/bundles/about_us_portfolio.js')
        server.webpack().addBundle('frontend-pages-about-us-the-team',                        __dirname + '/pages/bundles/about_us_the_team.js')
        server.webpack().addBundle('frontend-pages-about-us-the-investor',                    __dirname + '/pages/bundles/about_us_the_investor.js')
        server.webpack().addBundle('frontend-pages-services-business-process-optimization',   __dirname + '/pages/bundles/services_business_process_optimization.js')
        server.webpack().addBundle('frontend-pages-services-web-application-development',     __dirname + '/pages/bundles/services_web_application_development.js')
        server.webpack().addBundle('frontend-pages-product-quodbit-core',                     __dirname + '/pages/bundles/product_quodbit_core.js')
        server.webpack().addBundle('frontend-pages-product-quodbit-hiring',                   __dirname + '/pages/bundles/product_quodbit_hiring.js')
        server.webpack().addBundle('frontend-pages-product-quodbit-onboarding',               __dirname + '/pages/bundles/product_quodbit_onboarding.js')
        server.webpack().addBundle('frontend-pages-product-quodbit-tagging',                  __dirname + '/pages/bundles/product_quodbit_tagging.js')
        server.webpack().addBundle('frontend-pages-product-quodbit-assist',                   __dirname + '/pages/bundles/product_quodbit_assist.js')
        server.webpack().addBundle('frontend-pages-blog',                                     __dirname + '/pages/bundles/blog.js')
        server.express().get('/',                                                  server.helper().serveBundlePage('frontend-pages-home'))
        server.express().get('/technology/web-technologies',                       server.helper().serveBundlePage('frontend-pages-technology-web-technologies'))
        server.express().get('/technology/cloud-platform',                         server.helper().serveBundlePage('frontend-pages-technology-cloud-platform'))
        server.express().get('/technology/machine-learning',                       server.helper().serveBundlePage('frontend-pages-technology-machine-learning'))
        server.express().get('/about-us/portfolio',                                server.helper().serveBundlePage('frontend-pages-about-us-portfolio'))
        server.express().get('/about-us/the-team',                                 server.helper().serveBundlePage('frontend-pages-about-us-the-team'))
        server.express().get('/about-us/the-investor',                             server.helper().serveBundlePage('frontend-pages-about-us-the-investor'))
        server.express().get('/services/business-process-optimization',            server.helper().serveBundlePage('frontend-pages-services-business-process-optimization'))
        server.express().get('/services/web-application-development',              server.helper().serveBundlePage('frontend-pages-services-web-application-development'))
        server.express().get('/product/quodbit-core',                              server.helper().serveBundlePage('frontend-pages-product-quodbit-core'))
        server.express().get('/product/quodbit-hiring',                            server.helper().serveBundlePage('frontend-pages-product-quodbit-hiring'))
        server.express().get('/product/quodbit-onboarding',                        server.helper().serveBundlePage('frontend-pages-product-quodbit-onboarding'))
        server.express().get('/product/quodbit-tagging',                           server.helper().serveBundlePage('frontend-pages-product-quodbit-tagging'))
        server.express().get('/product/quodbit-assist',                            server.helper().serveBundlePage('frontend-pages-product-quodbit-assist'))
        server.express().get('/blog',                                              server.helper().serveBundlePage('frontend-pages-blog'))
    }
}

module.exports = Plugin;
