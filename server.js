'use strict';
/*
* All the required node packages
*/
require('dotenv').config({silent: true});
const 	express 	= require('express'),
		app 		= express(),
		path 		= require('path'),
		server 		= require('http').createServer(app),	   
		bodyParser 	= require('body-parser'),
		routes 		= require(path.resolve('./config/routes')),
		mongoose 	= require('mongoose'),
		compression = require('compression'),
		config      = require(path.resolve(`./config/env/${process.env.NODE_ENV}`));
		
//app.set('view engine', 'ejs');
mongoose.connect(config.db.URL);

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(bodyParser.json());

app.use(compression());

app.use(express.static(path.resolve('./public')));
app.use(express.static(path.resolve('./admin')));

//app.set('views', path.join(__dirname, '/public'));

app.use('/api', routes.router);
//app.use('/admin', routes.admin);


app.get(/^((?!\/(api|admin)).)*$/, function (req, res) {
	res.sendFile(path.resolve('public/index.html'));
});

/*Listen on Server Port*/
server.listen(config.server.PORT || 3000, function(){
	console.log('listening on', server.address().port);
});