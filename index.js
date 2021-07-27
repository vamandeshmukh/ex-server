import express from 'express';
import fun from './js-fun.js';
const app = express();
const port = 9999;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  console.log('Welcome!');
  res.send('Welcome to the app!');
});

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.get('/fun', (req, res) => {
  res.send(fun());
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
