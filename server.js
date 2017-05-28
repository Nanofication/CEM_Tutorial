const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
// Note: Request and response are usually written as req and res respectively

app.post('/quotes', (req, res) => {
  console.log(req.body)
})

app.listen(3000, function(){
  console.log('listening on 3000')
})
