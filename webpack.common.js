module.exports = {
    entry: {
        'index': ["@babel/polyfill", "./src/js/index"],
        'background': ["@babel/polyfill", "./src/js/background"],
        'options': ["@babel/polyfill", "./src/js/options"],
        'popup': ["@babel/polyfill", "./src/js/popup"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
            },
            { enforce: "pre", test: /\.js$/, loader: "babel-loader" }
        ],
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
};
