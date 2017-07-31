'use strict';
const path    = require('path'),
    config  = require(path.resolve(`./config/env/${process.env.NODE_ENV}`));
function maintenance(req, res, next) {
	if( config.MAINTENANCE_MODE === true ){
		if( config.ALLOWED_IPS.indexOf(req.ip) === -1 ){
			res.status(503).json({message: 'Service Unavailable',ip: req.ip, succcess: false});
		} else {
			next();
		}
	} else {
		next();
	}
}
module.exports = {
	maintenance: maintenance
};