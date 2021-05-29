const express =  require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Homepage');
});

app.get('/about', (req, res) => {
  res.send('About US');
});

app.get('/pages', (req, res) => {
  console.log(req);
  res.send('pages');
});

app.listen(port, () => {
  console.log("localhost is working now...");
});