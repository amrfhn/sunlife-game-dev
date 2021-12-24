const path =                        require("path")
const common =                      require("./webpack.common")
const merge =                       require("webpack-merge")
const MiniCssExtractPlugin =        require("mini-css-extract-plugin")
const CssUrlRelativePlugin =        require("css-url-relative-plugin")

module.exports = merge(common, {
    mode: "development",
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'js/[name].[hash].js'
    },
    module: {
        rules: [
            // {
            //     // handle the HTML files
            //     test: /.html$/,
            //     use: ["html-loader"]
            // },
            {
                test: /\.twig$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: [':src']
                        }
                    },
                    'twig-html-loader'
                ]
            },
            {
                test: /\.(mp4)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "assets/videos"
                    }
                }
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/,
                exclude: /fonts/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "assets/img"
                    }
                }
            },
            {
                test: /\.(svg|eot|otf|ttf|woff|woff2)$/,
                exclude: [/img/, /img\/icons/],
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "assets/fonts"
                    }
                }
            },
            {
                test: [/.js$/],
                exclude: /node_modules\/(?!(swiper|dom7)\/).*/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /.(sa|sc|c)ss$/,
                exclude: [/node_modules\/overlayscrollbars/],
                use: [
                    // Transform css and extract into separate single bundle
                    // Required to generate the file
                    { loader: MiniCssExtractPlugin.loader },

                    // Handles url() and @imports
                    { 
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },

                    // apply postcss transforms like autoprefixer and minify
                    { loader: "postcss-loader", options: { sourceMap: true } },

                    { loader: "resolve-url-loader", options: { sourceMap: true } },
                    
                    // transform SASS to CSS
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    devtool: "source-map",
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/bundle.[hash].css"
        }),
        new CssUrlRelativePlugin()
    ]
})