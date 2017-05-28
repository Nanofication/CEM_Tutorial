const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();

var db

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  //res.sendFile(__dirname + '/index.html')
  db.collection('quotes').find().toArray(function(err, results){
    console.log(results)
  })
})
// Note: Request and response are usually written as req and res respectively

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if(err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})



MongoClient.connect('mongodb://root:rootpassword@ds155651.mlab.com:55651/express-mongo-tutorial', (err, database) => {
  // .. Start the server here
  if(err){
    return console.log(err)
  }
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})
// I'm going to hook this to MLab
