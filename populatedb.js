#! /usr/bin/env node
console.log('Adicionando monstros');
// Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

var async = require('async')
var Monster = require('./models/monster')

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var monsters = []


function monsterCreate(breed, terreno, tipoTerreno, CharName,level,caracteristicas,classe,pv,forca,destreza,constituicao,sabedoria,inteligencia,carisma,bba,talentos,pericias,boss, cb) {
  monsterdetail = { 
    breed: breed,
    terreno: terreno,
    tipoTerreno: tipoTerreno,
    CharName: CharName,
    level: level,
    caracteristicas: caracteristicas,
    classe: classe,
    pv: pv,
    forca: forca,
    destreza: destreza,
    constituicao: constituicao,
    sabedoria: sabedoria,
    inteligencia: inteligencia,
    carisma: carisma,
    bba: bba,
    talentos: talentos,
    pericias: pericias,
    boss: boss
  }
    
  var monster = new Monster(monsterdetail);    
  monster.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Monster: ' + monster);
    monsters.push(monster)
    if (typeof cb === 'function')
    cb(null, monster)
  }  );
}
  


function createMonsters(cb) {
    async.parallel([
        function(callback) {
          monsterCreate(/*breed:*/'Goblin', /*terreno:*/'Any', /*tipoTerreno:*/'regular', /*CharName:*/'', /*level:*/'', /*caracteristicas:*/'', /*classe:*/'', /*pv:*/'5',/* forca:*/'9',/*destreza:*/'10',/*constituicao:*/'8', /*sabedoria:*/'5',/*inteligencia:*/'8',/* carisma:*/'9',  /*bba:*/'0',/*talentos:*/ ("teste1"), /*perícias*/ (''), /*boss*/ '0',callback);
          monsterCreate(/*breed:*/'Orc', /*terreno:*/'Any', /*tipoTerreno:*/'regular', /*CharName:*/'', /*level:*/'', /*caracteristicas:*/'', /*classe:*/'', /*pv:*/'12',/* forca:*/'16',/*destreza:*/'12',/*constituicao:*/'15', /*sabedoria:*/'9',/*inteligencia:*/'8',/* carisma:*/'9',  /*bba:*/'2',/*talentos:*/ ("teste1", "teste2"),/*perícias*/ (''), /*boss*/ '0',callback);
          monsterCreate(/*breed:*/'Kobolt', /*terreno:*/'Any', /*tipoTerreno:*/'regular', /*CharName:*/'', /*level:*/'', /*caracteristicas:*/'', /*classe:*/'', /*pv:*/'3',/* forca:*/'7',/*destreza:*/'10',/*constituicao:*/'7', /*sabedoria:*/'6',/*inteligencia:*/'8',/* carisma:*/'9',  /*bba:*/'-1',/*talentos:*/ ("teste1"), /*perícias*/ (''), /*boss*/ '0',callback);
        },
        ],
        // optional callback
        cb);
}



async.series([
    createMonsters,

],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('MonsterInstances: ');
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});
