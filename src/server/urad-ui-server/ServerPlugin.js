
const glob = require('glob');

class ServerPlugin {
    constructor() {
        this.plugins = [];
    }
    addPlugin(plugin) {
        this.plugins.push(plugin)
    }
    searchPlugins(directory) {
        var _this = this;
        var files = glob.sync(directory + "/**/plugin.js")
        for (var i = 0; i < files.length; i++) {
            var module_path = files[i].substring(0, files[i].length-3);
            var klass = require(module_path);
            this.addPlugin(new klass())
        }
    }
    getPlugins() {
        return this.plugins;
    }
}

module.exports = ServerPlugin
