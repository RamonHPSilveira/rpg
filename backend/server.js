const app = require('express')();
const bodyParser = require('body-parser');
const config = require('config');
const server = require('http').Server(app);
const fs = require('fs');

app.use(bodyParser.urlencoded({
    limit: '5mb',
    extended: true
}));
app.use(bodyParser.json({
    strict: false,
    limit: '5mb'
}));

fs.readdirSync('./backend/controllers')
    .forEach( (file) => {
        if(file.substr(-3) == '.js') {
            route = require('./controllers/'+file);
            route.controller(app);
        }
});

function start() {
    let port = config.get('server.port');
    server.listen(port);
    console.log('RPG API server listening on port %d in %s mode',port, app.settings.env);
}


exports.start = start;
exports.app = server;
