var mongoose      = require('mongoose'),
  Schema          = mongoose.Schema,
  path 			      = require('path'),
  uniqueValidator = require('mongoose-unique-validator'),
  config 			    = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
  crypto 			    = require('crypto');

var HotelSchema  = new Schema({
  
  image:{
      type: String,
      default: 'no-hotel.jpg'
  },
  user_id: {
    type: String,
    default: false
  },
  hotelname: {
    type: String,
    trim: true,
    required: 'Hotel name can not be empty.'
  },
  currency: {
    type: String,
    trim: true,
    required: 'Please select currency.'
  },
  ownername: {
    type: String,
    trim: true,
    required: 'Owner Entity can not be empty.',
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: 'Email address can not be empty.',
    validate: {
      validator: function(email) {
        return /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);
      },
      message: '{VALUE} is not a valid email address'
    }
  },
  phone: {
    type: Number,
    default: false
  },
  address: {
    type: String,
    trim: true,
    required: 'Address can not be empty.',
  },
  city: {
    type: String,
    default: false
  },

  state: {
    type: String,
    default: false
  },
  country: {
    type: String,
    default: false
  },
  zipcode: {
    type: Number,
    default: false
  },

  jot_types: {
    type: Array,
    default: []
  },
  
  step:{
    type: String,
    default: 1
  },
  status: {
    type: String,
    enum: ['complete','inactive','incomplete'],
    default: 'incomplete'
  },
},{
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    }
});


HotelSchema.set('autoIndex', config.db.autoIndex);
HotelSchema.plugin(uniqueValidator, {
    type: 'mongoose-unique-validator'
});

var hotelCollection = mongoose.model('hotel', HotelSchema);
module.exports      = hotelCollection;