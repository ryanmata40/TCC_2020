const app = require('express')(); //import express and call function
const consign = require('consign');

const connection = require('./src/database/connection');
	
app.connection = connection;

consign()
	.include('./src/config/passport.js')
	.then('./src/config/middlewares.js')
	.then('./src/Controllers')
	.then('./src/routes.js')
    .into(app) //Isso diz que sempre que ele vai carregar um modulo ele vai passar app como parâmetro.


app.listen(3333, () => {
    console.log("Backend executando...")
});
//start back-end: npm start 