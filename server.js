'use strict';
/*
* All the required node packages
*/
require('dotenv').config({silent: true});
const 	express 	= require('express'),
		app 		= express(),
		path 		= require('path'),
		bodyParser 	= require('body-parser'),
		routes 		= require(path.resolve('./config/routes')),
		mongoose 	= require('mongoose'),
		config      = require(path.resolve(`./config/env/${process.env.NODE_ENV}`));
		
//app.set('view engine', 'ejs');
mongoose.connect(config.db.URL);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.resolve('./public')));
app.use(express.static(path.resolve('./admin')));

//app.set('views', path.join(__dirname, '/public'));

app.use('/api', routes.router);
//app.use('/admin', routes.admin);

app.get(/^((?!\/(api|admin)).)*$/, function (req, res) {
	res.sendFile(path.resolve('public/index.html'));
});

// if( process.env.NODE_ENV === 'production' ){
app.listen(config.server.PORT,function(){
    console.log('Listening on server port:'+config.server.PORT);
});
