var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MonsterSchema = new Schema(
  {
    breed: {type: String, required: true},
    terreno: {type: String, required: false},
    tipoTerreno: {type: String, required: false},
    CharName: {type: String, required: false},
    level: {type: String, required: false},
    caracteristicas: {type: String, required: false},
    classe: {type: String, required: false},
    pv: {type: String, required: false},
    forca: {type: String, required: false},
    destreza: {type: String, required: false},
    constituicao: {type: String, required: false},
    sabedoria: {type: String, required: false},
    inteligencia: {type: String, required: false},
    carisma: {type: String, required: false},
    bba: {type: String, required: false},
    talentos: [String],
    pericias: [String],
    boss: {type: String, required: false}

  }
);
var caracteristicaSchema = new Schema(
  {
    caracteristicas: {type: String, required: true}
    
  }
);

// Virtual for author's URL
MonsterSchema
.virtual('url')
.get(function () {
  return '/catalog/monster/' + this._id;
});

//Export model
module.exports = mongoose.model('Monster', MonsterSchema);