var express = require('express');
var router = express.Router();


var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var PV;

var Monster = require('../models/monster');

const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');



router.post('/', urlencodedParser, function (req, res, next) {
// Prepare output in JSON format
 // Validate fields.
 body('CharName').isLength({ min: 1 }).trim().withMessage('Nome precisa ser especificado.')
 .isAlphanumeric().withMessage('Nome possui números.'),

// Sanitize fields.
sanitizeBody('CharName').trim().escape();

   // Extract the validation errors from a request.

   req = {
      CharName:req.body.CharName,
      numberEnimies:req.body.numberEnimies,
      level:req.body.level,
      caracteristicas:req.body.caracteristicas,
      classe:req.body.classe,
      terreno:req.body.terrain,      
      tipoTerreno:req.body.tipoTerreno      
   };   

   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/errors messages.
    res.render('index', { title: 'index', monster: req.body, errors: errors.array() });
    return;
 } else {
// exports.monster_detail = function(req, res, next) {

//     async.parallel({
//         monster: function(callback) {

//             monster.findById(req.params.id)
//               .exec(callback);
//         }

//     }, function(err, results) {
//         if (err) { return next(err); }
//         if (results.monster==null) { // No results.
//             var err = new Error('monster not found');
//             err.status = 404;
//             return next(err);
//         }
//         // Successful, so render.
//         res.render('monster_detail', { title: 'monster Detail', monster: results.monster} );
//     });

// };

var teste = Monster.find();

console.log(teste);
console.log(req);
res.render('monsters',{
   breed: "breed",
   PV: getChar(req.level, req.classe),
   caracteristica: getCaracteristica(req.caracteristicas),
   CharName: req.CharName,
   level: req.level,
   classe: req.classe,
   numberEnimies: req.numberEnimies

});
}
});

function getCaracteristica(caracteristica){

}

function getChar(level, classe){

  function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
 }
 var balanceClassHP;
 var balanceStr;
 var balanceDex;
 var balanceConst;
 var balanceInt;
 var balanceCar;
 var balanceWis;
 switch(classe) {
   case "warrior":
   balanceClassHP = 2;
   balanceStr = 1;
   break;
   case "druid":
   balanceClassHP = 2;
   break;
   case "ranger":
   balanceClassHP = 2;
   break;
   case "bard":
   balanceClassHP = 2;
   break;
   case "mage":
   balanceClassHP = 2;
   break;
   case "thief":
   balanceClassHP = 2;
   break;
   case "sorcerer":
   balanceClassHP = 2;
   break
   balanceClassHP = 1;
   break;
   case "barbarian":
   balanceClassHP = 3;
   break;
   default:
   balanceClassHP = 1;
}

switch (level) {
   case "1":
   PV = getRndInteger(1,10) * balanceClassHP;
   break;
   case "2":
   PV = getRndInteger(5,20)* balanceClassHP;
   console.log(PV);
   console.log(balanceClassHP);
   console.log("testelevel");
   break;
   case "3":
   PV = getRndInteger(10,25)* balanceClassHP;
   break;
   case "4":
   PV = getRndInteger(15,30)* balanceClassHP;
   break;
   case "5":
   PV = getRndInteger(20,35)* balanceClassHP;
   break;
   case "6":
   PV = getRndInteger(30,50)* balanceClassHP;
   break;
   case "7":
   PV = getRndInteger(40,60)* balanceClassHP;
   break;
   case "8":
   PV = getRndInteger(45,65)* balanceClassHP;
   break;
   case "9":
   PV = getRndInteger(50,70)* balanceClassHP;
   break;
   case "10":
   PV = getRndInteger(60,80)* balanceClassHP;
   break;
   case "10":
   PV = getRndInteger(80,100)* balanceClassHP;
   break;
   case "11":
   PV = getRndInteger(90,110)* balanceClassHP;
   break;
   case "12":
   PV = getRndInteger(100,120)* balanceClassHP;
   break;
   case "13":
   PV = getRndInteger(130,140)* balanceClassHP;
   break;
   case "14":
   PV = getRndInteger(150,160)* balanceClassHP;
   break;
   case "15":
   PV = getRndInteger(170,180)* balanceClassHP;
   break;
   case "16":
   PV = getRndInteger(1800,190)* balanceClassHP;
   break;
   case "17":
   PV = getRndInteger(200,210)* balanceClassHP;
   break;
   case "18":
   PV = getRndInteger(220,230)* balanceClassHP;
   break;
   case "19":
   PV = getRndInteger(240,250)* balanceClassHP;
   break;
   case "20":
   PV = getRndInteger(400,500)* balanceClassHP;
   break;
   default:
   console.log("teste2");

}
return PV;
}


module.exports = router;