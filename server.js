const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient

const dbName = "twjoy"
const helloEndpoint = "/hello"
const dbHost = "mongodb://localhost:27017/" + dbName

app.listen(3000, function() {
    console.log('listening on 3000')
})

MongoClient.connect(dbHost, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});

app.get(helloEndpoint, (req, res) => {
    res.send('Hello Bob')
})

app.get('/emprego', (req, res) => {
    res.sendFile(__dirname + '/emprego.html')
    // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
    // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})

app.get('/tempo', (req, res) => {
    res.sendFile(__dirname + '/tempo.html')
    // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
    // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})

