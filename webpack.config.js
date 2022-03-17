const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devPort = parseIntO(process.env.port, 10) || 8065;

module.exports = (env) => {
    const publicPath = '';
    const buildPath = './build';

    const config = {
        mode: env.prod ? 'production' : 'development',
        entry: {
            app: path.join(__dirname, './src/index.jsx'),
        },
        devServer: {
            //当这个配置为true并且使用HTML5 HistoryApi的时候，index.html 会被当做所有的404页面的兜底页面。
            historyApiFallback: true,

            contentBase:path.join(__dirname,'./src/index.jsx'),

            port:devPort,
            hot:true,
            disableHostCheck:true,
        },
        output:{
            path:path.join(__dirname,buildPath),
            pathinfo:true,
            filename:(en.prod || env.test)?'[name].[hash].js':'[name].js',
            publicPath:`${publicPath}/`,

        },
        module:{
            rules:[{
                test:/(\.js|\.jsx)$/,
                exclude:/(node_modules)/,
                use:[{
                    loader:'bable-loader',
                }],
            },{
                test:/\.css$/,
                exclude:/node_modules/,
                use:[{
                    loader:'style-loader',
                },{
                    loader:'css-loader',
                    options:{
                        importLoaders:1,
                    }
                },{
                    loader:'postcss-loader'
                }],
            },
                {
                    test:/\.(ttf|eot|woff|woff2|svg)$/,
                    loader:'file-loader',
                    options:{
                        name:'fonts/[name].[ext]',
                    }
                }
            ],
        },
        plugins:[
            new webpack.DefinePlugin({
                'process.env.ENV':env.dev,
            }),
            new webpack.LoaderOptionsPlugin({options:{}}),
            new HtmlWebpackPlugin({
                title:'React & Movies',
                template:path.join(__dirname,'./src/view/index.html'),
                filename:'index.html',
                publicPath:'',
            })
        ],
        devtool:'source-map',
        watch:true,
    }
    return config;
}