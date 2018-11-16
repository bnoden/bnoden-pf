const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3002;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.post('/api/form', (req, res) => {
  nodemailer.createTest;
});

app,
  get('/', (req, res) => {
    res.send({ express: 'App is running from server.js' });
  });

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
