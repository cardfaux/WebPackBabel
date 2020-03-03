const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { MiniCssExtractPlugin } = require('mini-css-extract-plugin');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.[contentHash].js',
		publicPath: ''
	},
	devtool: 'none',
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: {
								localIdentName: '[name]__[local]__[hash:base64:5]'
							}
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: () => [autoprefixer]
						}
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: MiniCssExtractPlugin }, // Extract css into files
					//{ loader: 'style-loader' }, // Inject styles into DOM
					{ loader: 'css-loader' }, // Turns css into commonjs
					{ loader: 'sass-loader' } // Turns sass into css
				]
			},
			// {
			// 	test: /\.html$/,
			// 	use: [
			// 		{loader: 'html-loader'}
			// 	]
			// },
			{
				test: /\.(svg|png|jpe?g|gif)$/,
				loader: 'url-loader?limit=8000&name=images/[name].[hash].[ext]'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/src/index.html',
			filename: 'index.html',
			inject: 'body'
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].[contentHash].css'
		})
	]
};
