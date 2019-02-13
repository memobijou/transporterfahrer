var path = require("path");
var webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const config = {
	// Common Configuration
	module: {
	    rules: [
	        {
		        test:/\.css$/,
	            use:
	            	[
	            		'style-loader',
          				MiniCssExtractPlugin.loader, // evtl sinnlos ? funktioniert auch ohne
  		                'css-loader'
	            	]
	        },
	        {
	        	test: /\.(jpg|png|gif)$/,
	        	use: [
	        		{
	        			loader: "file-loader",
	        			options: {
	        				name: '[name].[ext]',
	        				outputPath: 'img/',
	        				publicPath: 'img/'
	        			}
	        		}
	        	]
	        },
	        {
	        	test: /\.html$/,
	        	use: ["html-loader"]
	        },
  	        {
	          test: /\.(woff(2)?|ttf|eot|svg)$/,
	          use: [
	            {
	              loader: 'file-loader',
                  options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                  },
	            },
	          ]
	        },
	        {
	        	test: /\.js$/,
			    exclude: /(node_modules|bower_components)/,
	        	use: [
	        		{
	        			loader: "babel-loader",
	        			options: {
	        				presets: ["@babel/preset-env"]
	        			}
	        		}
	        	]
	        },
			{
				test: /modernizr/,
				loader: 'imports-loader?this=>window!exports-loader?window.Modernizr'
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
		}),
	    new MiniCssExtractPlugin({  // Evtl sinnlos ? funktioniert auch ohne
	      filename: "[name].css",
    	  chunkFilename: "[id].css"
    	})
		//, new CleanWebpackPlugin(["dist"])
	],
	resolve: {
		extensions: [".js"],
		alias: {
			"~": path.resolve(__dirname, "./src")
		}
	},

};

const baseConfig = Object.assign({}, config, {
	entry: {
		"bundle": "./src/base/js/app.js"
	},
	output: {
		path: path.resolve(__dirname, "../static/dist/base/"),
		filename: "[name].js",
		publicPath: "/build/base/"
	},
    devServer: {
		headers: {
			"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
			"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
			"Access-Control-Allow-Origin": "*"
		}
  	}
})


module.exports = [
	baseConfig,
]