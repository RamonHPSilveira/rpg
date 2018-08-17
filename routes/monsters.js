var express = require('express');
var router = express.Router();


var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');



router.post('/', urlencodedParser, function (req, res) {
// Prepare output in JSON format
 // Validate fields.
 body('CharName').isLength({ min: 1 }).trim().withMessage('Nome precisa ser especificado.')
 .isAlphanumeric().withMessage('Nome possui números.'),

// Sanitize fields.
sanitizeBody('CharName').trim().escape();

// Process request after validation and sanitization.
//(req, res, next) => {

   // Extract the validation errors from a request.
   
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/errors messages.
    //  req.render('index', { title: 'Express' });
      res.render('index', { title: 'index', author: req.body, errors: errors.array() });
      return;
   }  else { 
      req = {
         CharName:req.body.CharName,
         numberEnimies:req.body.numberEnimies,
         level:req.body.level,
         caracteristicas:req.body.caracteristicas,
         classe:req.body.classe,
         terreno:req.body.terrain,
         tipoTerreno:req.body.tipoTerreno
      };
      console.log(req);
      res.end(JSON.stringify(req));
   }
//}
});



module.exports = router;