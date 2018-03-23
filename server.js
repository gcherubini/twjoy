var app = require('./app');
var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
    console.log('Express server listening on port ' + port)
})

const helloEndpoint = "/hello"

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

