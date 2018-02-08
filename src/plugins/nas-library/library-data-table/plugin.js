
class Plugin {
    constructor() {
    }

    build(server) {
        server.serverinfo().registerPluginInfo({
            id:            'library-data-table',
            name:          'Library Data Table',
            group:         'library',
            description:   'Library Data Table, version 0.0.1',
            dependencies:  [],
            links:         []
        })

        server.webpack().addAlias('library-data-table', __dirname + '/export.js')
    }
}

module.exports = Plugin;
