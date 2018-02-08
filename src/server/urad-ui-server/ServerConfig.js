
class ServerConfig {
    constructor(server) {
        this.server = server;
        this.config = {}
    }

    all() {
        return this.config;
    }

    get(id, def='') {
        if (this.config[id] != undefined) {
            return this.config[id];
        }
        return def;
    }
    set(id, value) {
        this.config[id] = value;
    }
}

module.exports = ServerConfig
