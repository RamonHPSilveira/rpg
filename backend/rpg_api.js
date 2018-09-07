//start api
const config    = require('config');
const mongoose  = require('mongoose');
const server    = require('./server');

const db = mongoose.connection;

db.on('error', console.error);
db.once('open', () => {
    console.log('Connected to Mongodb');
});
db.safe = {w:1};

console.log("CONFIG",config);
mongoose.connect(config.get('db.mongodb'));

server.start();
