const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
// Note: Request and response are usually written as req and res respectively

app.post('/quotes', (req, res) => {
  console.log("So this worked hahaha!")
})

app.listen(3000, function(){
  console.log('listening on 3000')
})
