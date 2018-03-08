const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();
const port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/pf_test');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.get('/api', (req, res) => {
  res.send({ express: 'App is running from server.js' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
