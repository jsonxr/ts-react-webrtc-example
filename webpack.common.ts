import * as path from 'path';
import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';


const config: webpack.Configuration = {
    entry: {
        app: [
            './client/App.tsx'
        ],
        react: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist/client'),
        filename: 'js/[name].bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'client', 'index.html') })
    ]
};

export default config;
