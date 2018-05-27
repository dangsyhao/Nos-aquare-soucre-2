const webpack = require('webpack');
const path = require('path');


class ServerWebpackInfo {
    constructor(server) {
        this.alias = {}
        this.bundles = {}
        this.server = server;
    }

    addAlias(id, alias) {
        this.alias[id] = alias;
    }
    addBundle(id, bundle) {
        this.bundles[id] = bundle;
    }

    getAlias() {
        return this.alias;
    }
    getBundles() {
        return this.bundles;
    }

    getConfig() {
        return {
            entry:   this.getBundles(),
            output: {
                path: this.server.config().get('webpack.build_dir', '/tmp'),
                filename: '[name]-bundle.js'
            },
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader'
                    },
                    {
                        test: /\.css$/,
                        loader: "style-loader!css-loader"
                    },
                    {test: /\.(svg|png|jpe?g|gif)(\?\S*)?$/, loader: 'url?limit=100000&name=img/[name].[ext]'},
                    {test: /\.(eot|woff|woff2|ttf)(\?\S*)?$/, loader: 'url?limit=100000&name=fonts/[name].[ext]'}
                ]
            },

            resolve: {
                alias: this.getAlias(),
                extensions: ['.js', '.json']
            },

            plugins: [

            ]
        }
    }

}

module.exports = ServerWebpackInfo
