
class Plugin {
    constructor() {
    }

    build(server) {
        server.serverinfo().registerPluginInfo({
            id:            'pear-annotation-server-ui',
            name:          'Annotation Server',
            group:         'application',
            description:   '',
            dependencies:  [],
            links:         []
        })

        server.webpack().addAlias('backend-page-container',              __dirname + '/container')
        server.webpack().addAlias('backend-app-services',                __dirname + '/services')

        // Dashboard
        server.webpack().addBundle('backend-dashboard-home',             __dirname + '/cms/dashboard/bundles/home.js')
        server.express().get('/backend',                                 server.helper().serveBundlePage('backend-dashboard-home'))

        // Job
        server.webpack().addBundle('backend-job-list',                   __dirname + '/cms/job/bundles/list.js')
        server.webpack().addBundle('backend-job-create',                 __dirname + '/cms/job/bundles/create.js')
        server.webpack().addBundle('backend-job-update',                 __dirname + '/cms/job/bundles/update.js')
        server.express().get('/backend/job',                             server.helper().serveBundlePage('backend-job-list'))
        server.express().get('/backend/job/create',                      server.helper().serveBundlePage('backend-job-create'))
        server.express().get('/backend/job/update',                      server.helper().serveBundlePage('backend-job-update'))

        // Admin
        server.webpack().addBundle('backend-admin',                      __dirname + '/cms/admin/bundles/login.js')
        server.webpack().addBundle('backend-admin-list',                 __dirname + '/cms/admin/bundles/list.js')
        server.webpack().addBundle('backend-admin-create',               __dirname + '/cms/admin/bundles/create.js')
        server.webpack().addBundle('backend-admin-update',               __dirname + '/cms/admin/bundles/update.js')
        server.express().get('/backend/login',                           server.helper().serveBundlePage('backend-admin'))
        server.express().get('/backend/admin',                           server.helper().serveBundlePage('backend-admin-list'))
        server.express().get('/backend/admin/create',                    server.helper().serveBundlePage('backend-admin-create'))
        server.express().get('/backend/admin/update',                    server.helper().serveBundlePage('backend-admin-update'))

        // Setting
        server.webpack().addBundle('backend-setting-update',             __dirname + '/cms/setting/bundles/update.js')
        server.express().get('/backend/setting',                         server.helper().serveBundlePage('backend-setting-update'))
    }
}

module.exports = Plugin;
