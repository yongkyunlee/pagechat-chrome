const { CheckerPlugin } = require('awesome-typescript-loader');
const { join } = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        contentPage: join(__dirname, 'src/contentPage.js'),
        backgroundPage: join(__dirname, 'src/backgroundPage.js')
    },
    output: {
        path: join(__dirname, '../dist/pagechat-chrome'),
        filename: '[name].js'
    },
    module: {
        rules: [
        {
            exclude: /node_modules/,
            test: /\.ts?$/,
            use: 'awesome-typescript-loader?{configFileName: "chrome/tsconfig.json"}'
        }
        ]
    },
    plugins: [new CheckerPlugin()],
    resolve: {
        extensions: ['.ts', '.js']
    }
};