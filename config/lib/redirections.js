'use strict';
const path    	= require('path'),
	_ 			= require('lodash'),
    config  	= require(path.resolve(`./config/env/${process.env.NODE_ENV}`));
// 302 redirection
let redirectionArrayList = [
	{ from: '/signup.html', to: '/signup'},
	{ from: '/blog', to: '/blogs'},
	{ from: '/free-massage-exchange.html', to: '/free-massage-exchange'},
	{ from: '/paid-professional-massage.html', to: '/professional-massage-therapists'},
	{ from: '/professional-massage-therapists.html', to: '/professional-massage-therapists'},
	{ from: '/therapeutic-massage.html', to: '/therapeutic-massage'},
	{ from: '/gay-massage.html', to: '/gay-massage'},
	{ from: '/sensual-massage.html', to: '/sensual-massage'},
	{ from: '/about-us.html', to: '/about-us'},
	{ from: '/contactus.html', to: '/contactus'},
	{ from: '/blog.html', to: '/blog'},
	{ from: '/admin', to: '/admin.html'}
];
function parmanentRedirection(req, res, next) {
	let index = _.findIndex(redirectionArrayList, ['from', req.url]);
	if( index > -1 ){
		res.redirect(301, redirectionArrayList[index].to);
	} else {
		next();
	}
}
module.exports = {
	to: parmanentRedirection
};