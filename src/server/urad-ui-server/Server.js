const express = require('express');

const ServerConfig = require('./ServerConfig')
const ServerInfo = require('./ServerInfo')
const ServerWebpackInfo = require('./ServerWebpackInfo')
const ServerHelper = require('./ServerHelper')
const ServerPlugin = require('./ServerPlugin')

class Server {
    constructor() {
        // Data structure
        this._plugin = null;
        this._config = null;
        this._serverinfo = null;
        this._webpack = null;
        this._helper = null;
        this._express = null;
    }

    // Core data structure
    config() {
        if (this._config == null) {
            this._config = new ServerConfig(this)
        }
        return this._config
    }
    serverinfo() {
        if (this._serverinfo == null) {
            this._serverinfo = new ServerInfo()
        }
        return this._serverinfo
    }
    webpack() {
        if (this._webpack == null) {
            this._webpack = new ServerWebpackInfo(this)
        }
        return this._webpack
    }
    helper() {
        if (this._helper == null) {
            this._helper = new ServerHelper(this)
        }
        return this._helper
    }
    express() {
        if (this._express == null) {
            this._express = express()
        }
        return this._express
    }
    plugin() {
        if (this._plugin == null) {
            this._plugin = new ServerPlugin(this)
        }
        return this._plugin
    }

    // Server core configuration
    setConfig(config) {
        for (var id in config) {
            this.config().set(id, config[id])
        }
    }
    setWebpackBuildDir(buildDir) {
        this.config().set('webpack.build_dir', buildDir)
    }
    setWebpackLocalesDir(localeDir) {
        this.config().set('webpack.locales_dir', localeDir)
    }
    setExpressPort(port) {
        this.config().set('express.port', port)
    }

    // Core procedures
    build() {
        this.express().use('/public/build', express.static(this.config().get('webpack.build_dir')))
        this.express().use('/locales/', express.static(this.config().get('webpack.locales_dir')))

        var plugins = this.plugin().getPlugins()
        for (var i = 0; i < plugins.length; i++) {
            plugins[i].build(this)
        }
    }
    run() {
        this.express().listen(this.config().get('express.port', 3000))
    }
    getWebpackConfig() {
        return this.webpack().getConfig()
    }
}

module.exports = Server;
