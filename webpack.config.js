/*const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // ... Configuración de empaquetado
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions:['.js','.jsx']
    },
    module: {
        // ... Lista de reglas respecto a los loaders	
        rules : [
            // Reglas para babel
            {
                test: /\.(js | jsx)$/,
                use: { loader: 'babel-loader'},
                exclude: /node_modules/
            },
            // Reglas para HTML loader
            {
		test: /\.html$/,
		use: [{ loader: 'html-loader'}]
           },

           {
            test: /\.s[ac]ss$/i,
            // test: /\.(css|scss)$/,
            use: [
              "style-loader",
              "css-loader",
              "sass-loader"
           ]
       }

        ]

    },
    plugins: [
	    //... Configuración de plugins
        new HtmlWebpackPlugin({ 
      		template: './public/index.html', 
    		filename: './index.html'   
        }),

        new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
	],

    devServer: {
        static: path.join(__dirname, 'dist'), // contentBase corresponde a webpack 4
            // ahora en Webpack 5 se usa allowedHosts
            // créditos al compañero Fabian Rivera Restrepo
        port: 3005,
        compress: true,
    }

};*/

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		// filename: 'bundle.js',
		publicPath: '/'
	},
	mode: 'development',
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			// '@componentsmembers': path.resolve(__dirname, 'src/componentsmembers'),
			'@components': path.resolve(__dirname, 'src/components/'),
			'@containers': path.resolve(__dirname, 'src/containers/'),
			'@pages': path.resolve(__dirname, 'src/pages/'),
			// '@routes': path.resolve(__dirname, 'src/routes/'),
			'@routes': path.resolve(__dirname, 'src/routes/'),
			'@context': path.resolve(__dirname, 'src/context/'),
			'@styles': path.resolve(__dirname, 'src/styles/'),
			// '@styles': path.resolve(__dirname, 'src/styles/'),
			'@icons': path.resolve(__dirname, 'src/assets/icons/'),
			'@logos': path.resolve(__dirname, 'src/assets/logos/'),
			'@covers': path.resolve(__dirname, 'src/assets/covers/'),
			'@BTS_members': path.resolve(__dirname, 'src/assets/BTS_members/'),
			'@slider': path.resolve(__dirname, 'src/components/Slider/'),
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.(scss|css)$/,
				// test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			},
			{
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset'
            }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
	],
// 	devServer: {
//         static: path.join(__dirname, 'dist'), // contentBase corresponde a webpack 4
// // ahora en Webpack 5 se usa allowedHosts
// // créditos al compañero Fabian Rivera Restrepo
//         port: 3005,
//         compress: true,
//     }
devServer:{
	static: path.join(__dirname, 'dist'),
	compress: true,
	historyApiFallback: true,
	port: 3000,
}

}