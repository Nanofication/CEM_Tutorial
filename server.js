const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World')
})
// Note: Request and response are usually written as req and res respectively

app.listen(3000, function(){
  console.log('listening on 3000')
})
