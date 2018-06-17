const publicJs = './public/javascripts/';
const config = {
    entry: [
        publicJs + 'index.jsx'
    ],
    output: {
        path: __dirname,
        filename: publicJs + 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
                test: /\.js|jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react'],
                    cacheDirectory: true
                },
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                loader: "less-loader"
            }
        ]
    },
    mode: "development"
};

module.exports = config;