// entry point -> output (the bundle.js file)

const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = (env) => {

    const isProduction = env === 'production';
    const CSSextract = new ExtractTextPlugin('styles.css')
    return {
        entry: './public/src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node.modules/
            }, {
                use: CSSextract.extract({
                    use: [{
                        loader:'css-loader',
                        options :{
                            sourceMap:true
                        }
                    },
                {
                    loader:'sass-loader',
                    options:{
                        sourceMap:true
                    }
                }]
                }
                ),
                test: /\.s?css$/,
            }]
        },
        plugins:[CSSextract],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }
};


