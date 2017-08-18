'use strict';

const 
    mongoose        = require('mongoose'),
    path            = require('path'),
    _ 				= require('lodash'),
    uniqueValidator = require('mongoose-unique-validator'),
    config          = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
    Schema          = mongoose.Schema;

var LostFoundSchema 	= new Schema({
	
    description: {
	    type: String,
	    trim: true,
	},
	image:{
	    type: Array,
	    default: [] 
  	},
	lost_place: {
	    type: String,
	    trim: true,
	},
	hotel_id: {
	    type: String,
	    trim: true,
	    default: false
	},
	lost_date: {
	    type: Number,
	},
	no_of_items: {
		type: Number,
		default: false
	},
	category: {
		type: String,
		default: null
	},
	status: {
		type: String,
		default: null
	},
	contact: {
		type: String,
		default: null
	},
	search_tag:{
		type: String,
		default: null
	}
},{
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    },
});

LostFoundSchema.set('autoIndex', config.db.autoIndex);
LostFoundSchema.plugin(uniqueValidator, { type: 'mongoose-unique-validator'});

module.exports = mongoose.model('LostFound', LostFoundSchema);
