
class ServerInfo {
    constructor() {
        this.pluginsInfo = [];
    }

    registerPluginInfo(pluginInfo) {
        this.pluginsInfo.push(pluginInfo)
    }

    getPluginsInfo() {
        return this.pluginsInfo;
    }
}

module.exports = ServerInfo
