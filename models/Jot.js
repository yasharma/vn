var mongoose      = require('mongoose'),
  Schema          = mongoose.Schema,
  path 			      = require('path'),
  config 			    = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
  crypto 			    = require('crypto');

var JotSchema  = new Schema({
  image:{
    name: {
      type: String,
      default: 'no-image.jpg'
    },
    path: {
      type: String,
      default: 'images/'
    },
    original_name:  {
      type: String,
      default: 'no-image.jpg'
    }
  },
  jot_title: {
    type: String,
    trim: true,
    required: 'Jot Title can not be empty.',
  },
  due_date: {
    type: Number, 
    default: false 
  },
  start_date: {
    type: Number, 
    default: false 
  },
  end_date: {
    type: Number, 
    default: false 
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
    type: String,
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
},{
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    }
});

JotSchema.set('autoIndex', config.db.autoIndex);


var jotCollection   = mongoose.model('jot', JotSchema);
module.exports      = jotCollection;