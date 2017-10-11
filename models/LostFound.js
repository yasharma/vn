'use strict';

const 
    mongoose        = require('mongoose'),
    path            = require('path'),
    _ 				= require('lodash'),
    uniqueValidator = require('mongoose-unique-validator'),
    config          = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
    Schema          = mongoose.Schema,
    ObjectId    	= Schema.ObjectId;

var LostFoundSchema 	= new Schema({
	
    
	title: {
	    type: String,
	    trim: true,
	    required:"Title should not be blank."
	},
	description: {
	    type: String,
	    trim: true,
	    required:"Description  should not be blank."
	},
	image:{
	    type: Array,
	    default: [] 
  	},
	place: {
	    type: String,
	    trim: true,
	},
	hotel_id: {
	    type: ObjectId,
	  },
	date: {
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
		default: null,
		required:"Contact number shoud not be blank."
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

LostFoundSchema.pre('save', function(next) {
    let lostfound = this;
    if (this.isModified('hotel_id')  || this.isNew) {
        lostfound.hotel_id   = mongoose.Types.ObjectId(lostfound.hotel_id);
        next();
    }else{
      return next();
    }
});

LostFoundSchema.set('autoIndex', config.db.autoIndex);
LostFoundSchema.plugin(uniqueValidator, { type: 'mongoose-unique-validator'});

module.exports = mongoose.model('LostFound', LostFoundSchema);
