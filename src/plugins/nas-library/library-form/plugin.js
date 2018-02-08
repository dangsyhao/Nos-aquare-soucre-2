
class Plugin {
    constructor() {
    }

    build(server) {
        server.serverinfo().registerPluginInfo({
            id:            'library-form',
            name:          'Library Form',
            group:         'library',
            description:   'Library Form, version 0.0.1',
            dependencies:  [],
            links:         []
        })

        server.webpack().addAlias('library-form', __dirname + '/export.js')
    }
}

module.exports = Plugin;
