var mongoose      = require('mongoose'),
  Schema          = mongoose.Schema,
  path 			      = require('path'),
  uniqueValidator = require('mongoose-unique-validator'),
  config 			    = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
  crypto 			    = require('crypto');

var HotelSchema  = new Schema({
  
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
    required: 'Please select currency'
  },

  ownername: {
    type: String,
    trim: true,
    required: 'Owner name can not be empty.',
  },

  address: {
    type: String,
    trim: true,
    default: false
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

  email: {
    type: String,
    lowercase: true,
    trim: true,
    unique: 'The Email address you have entered already exists.',
    uniqueCaseInsensitive:true,
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

  no_of_guestrooms: {
    type: Number,
    default: false
  },

  room_no: {
    type: Number,
    default: false
  },

  no_of_meetingrooms: {
    type: Number,
    default: false
  },

  no_of_floors: {
    type: Number,
    default: false
  },

  no_of_employee: {
    type: Number,
    default: false
  },

  vending_area: {
    type: Boolean,
    default: false
  },

  arrangement_type: {
    type: Boolean,
    default: false
  },

  status: {
    type: String,
    default: false
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