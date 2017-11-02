const express = require('express');

const app = express();
const { bag1, bag2, bag3, bag4 } = require('./groups');

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:9000');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCrossDomain);

app.get('/bombos/:id', (req, res) => {
  const bombo = req.params.id;

  switch (bombo) {
    case '1':
      res.send(bag1);
      break;
    case '2':
      res.send(bag2);
      break;
    case '3':
      res.send(bag3);
      break;
    case '4':
      res.send(bag4);
      break;
  }
});

app.listen(2018, () => console.log('Servidor listo en el puerto 2018'));
