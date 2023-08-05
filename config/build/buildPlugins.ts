import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildPaths } from "../types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({
	html,
}: BuildPaths): webpack.WebpackPluginInstance[] {
	return [
		new webpack.ProvidePlugin({
			React: "react",
		}),
		new HtmlWebpackPlugin({
			template: html,
			title: "Development",
		}),
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:8].css",
			chunkFilename: "css/[name].[contenthash:8].css",
		}),
	];
}
