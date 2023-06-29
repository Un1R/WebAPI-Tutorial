const Express = require('express');
const fs = require('fs');
var app = Express();
var Port = 80;

app.use(Express.static('./Client'));

app.get('/testjson', (req, res) => {
    console.log('REQUEST RECIEVED');
    res.json({ 
        message: "hello world",
        type: "success"
     })
});

app.listen(Port, () => {
    console.log('Server started on Port:', Port);
    console.log('URL: ', 'http://127.0.0.1:'+Port);
});
