const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: require.resolve('react'),
            use: [{
                loader: 'expose-loader',
                options: 'react'
            }, {
                loader: 'expose-loader',
                options: 'React'
            }]
        },{
            test: require.resolve('react-dom'),
            use: [{
                loader: 'expose-loader',
                options: 'ReactDOM'
            } ]
        }, {
            test: require.resolve('prop-types'),
            use: [{
                loader: 'expose-loader',
                options: 'PropTypes'
            }]
        }, {
            test: require.resolve('joi-browser'),
            use: [{
                loader: 'expose-loader',
                options: 'Joi'
            }]
        }, {
            test: require.resolve('mobx-react'),
            use: [{
                loader: 'expose-loader',
                options: 'mobxReact'
            }]
        }, {
            test: require.resolve('mobx'),
            use: [{
                loader: 'expose-loader',
                options: 'mobx'
            }]
        }, {
            test: /\.js?$/,
            use: ['babel-loader'],
            exclude: /node_modules/,
        }, {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
                limit: 10000,
                name: 'static/media/[name].[hash:8].[ext]',
            },
        }, {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
        }, {
            test: /\.css$/,
            use: [
                require.resolve('style-loader'),
                {
                    loader: require.resolve('css-loader'),
                    options: {
                        importLoaders: 1,
                    },
                },
                {
                    loader: require.resolve('postcss-loader'),
                    options: {
                        // Necessary for external CSS imports to work
                        // https://github.com/facebookincubator/create-react-app/issues/2677
                        ident: 'postcss',
                        plugins: () => [
                            require('postcss-flexbugs-fixes'),
                            autoprefixer({
                                browsers: [
                                    '>1%',
                                    'last 4 versions',
                                    'Firefox ESR',
                                    'not ie < 9', // React doesn't support IE8 anyway
                                ],
                                flexbox: 'no-2009',
                            }),
                        ],
                    },
                },
            ],
        }],
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        open: false,
        port: 3000,
        historyApiFallback: true,
        disableHostCheck: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
        }) 
        // fails with: TypeError: Cannot read property 'minify' of null
        // new ButternutWebpackPlugin(),
    ],
};