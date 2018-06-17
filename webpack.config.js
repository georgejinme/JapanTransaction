const publicJs = './public/javascripts/';
const config = {
    entry: [
        publicJs + 'index.js'
    ],
    output: {
        path: __dirname,
        filename: publicJs + 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            { test: /\.js|jsx$/, loader: 'babel-loader' },
            { test: /\.less$/, loader: "less-loader" }
        ]
    },
    mode: "development"
};

module.exports = config;