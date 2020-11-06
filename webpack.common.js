module.exports = {
    entry: {
        'index': ["@babel/polyfill", "./dist/src/js/index"],
        'background': ["@babel/polyfill", "./dist/src/js/background"],
        'options': ["@babel/polyfill", "./dist/src/js/options"],
        'popup': ["@babel/polyfill", "./dist/src/js/popup"],
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
