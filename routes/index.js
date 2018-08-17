var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



/*router.post('/monsters', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      CharName:req.body.CharName,
      numberEnimies:req.body.numberEnimies,
      level:req.body.level,
      caracteristicas:req.body.caracteristicas,
      classe:req.body.classe,
      terreno:req.body.terrain,
      tipoTerreno:req.body.tipoTerreno
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
*/

module.exports = router;
