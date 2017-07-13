const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/postdata', (req, res) => {
  const data = req.body.data;
  res.send(data);
});

app.listen(9121, () => {

});
