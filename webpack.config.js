const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
module.exports = {
    resolve: {
        fallback: {
            process: false,
            "url": false,
            "stream": false,
            "path": false
        }
    },
    fallback: {
        process: false,
        "url": false,
        "stream": false,
        "path": false
    },
    plugins: [
        new NodePolyfillPlugin()
    ]
}