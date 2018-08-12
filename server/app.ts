import * as path from 'path';
import * as express from 'express';
import * as webpack from 'webpack';
import webpackConfig from '../webpack.config';


const app = express();
const client_root = path.resolve(path.resolve(__dirname, '..', 'client'));

console.log('client_root: ' + client_root);

// Make our webpack work only in dev mode
if (! process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  console.log('Using Webpack...');
  let compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')( compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true }
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}


app.get('/', (req, res) => {
  res.sendFile(path.resolve(client_root, 'index.html'))
});

app.use(express.static(client_root));

export default app;
