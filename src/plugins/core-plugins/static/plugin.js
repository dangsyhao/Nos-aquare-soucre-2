
class Plugin {
    build(server) {
        server.serverinfo().registerPluginInfo({
            id:            'core-plugins-static',
            name:          'Static Link',
            group:         'core-plugins',
            description:   'Link config.staticDir to config.staticURL (defined in config.js)',
            dependencies:  [],
            links:         []
        })

        var staticUrl = server.config().get('static.url')
        var staticDir = server.config().get('static.dir')
        server.helper().serveStatic(staticUrl, staticDir)
    }
}

module.exports = Plugin;
