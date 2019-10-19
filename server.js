const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const serverStatic = require('serve-static');
const path = require('path');

const port = process.env.PORT || 80;
const app = express();
app.use(serverStatic(path.join(__dirname, 'dist')));
app.listen(port);
