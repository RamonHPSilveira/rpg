var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,  { useNewUrlParser: true }, function(err, db) {
	if (err) throw err;
	var dbo = db.db("monstersdb");
	var myobj = [

	{breed:'Goblin', terreno:'Any', tipoTerreno:'regular', CharName:'', level:'', caracteristicas:'', classe:'', pv:'5', forca:'9',destreza:'10',constituicao:'8', sabedoria:'5',inteligencia:'8', carisma:'9',  bba:'0',talentos: ("teste1"), perícias: (''), boss: '0'},
	{breed:'Orc', terreno:'Any', tipoTerreno:'regular', CharName:'', level:'', caracteristicas:'', classe:'', pv:'12', forca:'16',destreza:'12',constituicao:'15', sabedoria:'9',inteligencia:'8', carisma:'9',  bba:'2',talentos: ("teste1", "teste2"),perícias: (''), boss: '0'},
	{breed:'Kobolt', terreno:'Any', tipoTerreno:'regular', CharName:'', level:'', caracteristicas:'', classe:'', pv:'3', forca:'7',destreza:'10',constituicao:'7', sabedoria:'6',inteligencia:'8', carisma:'9',  bba:'-1',talentos: ("teste1"), perícias: (''), bosskey: "value",boss:  '0' }

	];
	dbo.collection("monstersdb").insertMany(myobj, function(err, res) {
		if (err) throw err;
		console.log("Number of documents inserted: " + res.insertedCount);
		db.close();
	});

}); 