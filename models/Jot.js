var mongoose      = require('mongoose'),
  Schema          = mongoose.Schema,
  path 			      = require('path'),
  uniqueValidator = require('mongoose-unique-validator'),
  config 			    = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
  crypto 			    = require('crypto');

var JotSchema  = new Schema({
  
  jot_title: {
    type: String,
    trim: true,
    required: 'Not a valid Jot Title',
  },
  due_date: {
    type: Date, 
    default: Date.now 
  },
  start_date: {
    type: Date, 
    default: Date.now 
  },
  end_date: {
    type: Date, 
    default: Date.now 
  },
  priority: {
    type: String,
    default: false
  },
  jot_type: {
    type: String,
    default: false
  },
  assigned_to: {
    type: String,
    default: false
  },
  department: {
    type: String,
    default: '#common'
  },
  attachment: {
    type: String,
    default: false
  },
  checklist: {
    type: String,
    default: false
  },
  recr_pattern: {
    type: String,
    default: false
  },
  hotel_id: {
    type: Number,
    default: false
  },
  recurring: {
    type: Boolean,
    default: false
  },
  status: {
    type: Boolean,
    default: false
  }
});

JotSchema.set('autoIndex', config.db.autoIndex);
JotSchema.plugin(uniqueValidator, {
    type: 'mongoose-unique-validator'
});

var jotCollection   = mongoose.model('jot', JotSchema);
module.exports      = jotCollection;