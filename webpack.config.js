module.exports = {
    context: __dirname + "/public",
    entry: "./app.js",
    output: {
        path: __dirname + "/dist",
        filename: "app.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    }
};