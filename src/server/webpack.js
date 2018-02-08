require('babel-register')

const Server = require('./urad-ui-server/Server')

var server = new Server()
server.plugin().searchPlugins(__dirname + '/../plugins')
server.plugin().searchPlugins(__dirname + '/../library')
server.plugin().searchPlugins(__dirname + '/../app')
server.setWebpackBuildDir('/tmp/build')
server.setWebpackLocalesDir(__dirname + '/../locales')
server.setExpressPort(3000)
server.setConfig(require('./config'))
server.build()

module.exports = server.getWebpackConfig()
