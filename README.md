# Getting Started With WebPack and Babel

### Dependencies Put Project under NPM with npm init -y

#### npm install --save

#### react react-dom react-router-dom

#### npm install --save-dev development Dependencies

#### webpack webpack-dev-server webpack-cli

#### add a src folder with an index.html file

#### add an assets, components, containers folder to the src folder

#### add index.js, index.css in the source folder

#### add App.js for root component

#### create a webpack config 'webpack.config.js' file in the root of the file

#### install babel to use jsx with webpack npm install --save-dev

#### @babel/core @babel/preset-env @babel/preset-react @babel/preset-stage-2 babel-loader @babel/plugin-proposal-class-properties

#### babel transpiles next-gen JS to current-gen JS with all the presets

#### add babel to the webpack config

#### add a .babelrc file so webpack knows how babel is configured

#### run npm install --save-dev style-loader css-loader postcss-loader add it to webpack config

#### post-css plugins with npm install --save-dev autoprefixer add it to webpack config and tweak package json browsersList

#### npm install --save-dev url-loader to help load assets as urls add it to webpack config it depends on file-loader

#### npm install --save-dev html-webpack-plugin to inject our code to the html file

#### add webpack.config.prod.js and build script in package json

#### for polyfills add npm install --save core-js regenerator-runtime and add it to .babelrc

#### add scss with sass-loader node-sass

#### Cache Busting, Everytime Files Change Dont Use The Cache with contentHash HtmlWebPackPlugin

#### add clean-webpack-plugin to the webpack prod config
