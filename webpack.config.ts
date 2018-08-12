import * as webpack from 'webpack';
import common from './webpack.common';


const config: any = common;

config.mode = 'development';
// Add in the hot reload functionality
config.entry.app.push('webpack-hot-middleware/client');
config.plugins.push(new webpack.HotModuleReplacementPlugin());

console.log('config: ', config);

export default config;
