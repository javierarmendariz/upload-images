const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack.server.development.config.js');

const compiler = webpack(webpackConfig);

const multer = require('multer');

const app = express();
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  stats: {
    colors: true,
  },
}));
app.use(webpackHotMiddleware(compiler));

const storage = multer.diskStorage({
  destination: './public/users',
  filename(req, file, cb) {
    switch (file.mimetype) {
      case 'image/jpeg':
        ext = '.jpeg';
        break;
      case 'image/png':
        ext = '.png';
        break;
    }
    cb(null, file.originalname + ext);
  },
});

const upload = multer({ storage });

app.post('/uploadUserImage', upload.array('images'), (req, res) => {
  res.send('ok');
});

app.get('/', (req, res) => {
  const html = `
  <html>
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/css/foundation.css">
    </head>
    <body>
      <div id="root"></div>
        <script src="http://localhost:3000/app.client.bundle.js"></script>
    </body>
  </html>

  `;
  res.send(html);
});

app.listen(3000, () => {
  console.log('Server running at port 3000');
});
