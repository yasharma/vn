var mongoose      = require('mongoose'),
  Schema          = mongoose.Schema,
  ObjectId        = Schema.ObjectId,
  path 			      = require('path'),
  uniqueValidator = require('mongoose-unique-validator'),
  config 			    = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
  crypto 			    = require('crypto');

var HotelSchema  = new Schema({
  
  image:{
      type: String,
  },
  user_id: {
    type: ObjectId,
  },
  hotelname: {
    type: String,
    trim: true,
    required: 'Hotel name is required.'
  },
  currency: {
    type: String,
    trim: true,
    required: 'Please select currency.'
  },
  ownername: {
    type: String,
    trim: true,
    required: 'Owner Entity is required.',
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: 'Email address is required.',
    validate: {
      validator: function(email) {
        return /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);
      },
      message: '{VALUE} is not a valid email address'
    }
  },
  phone: {
    type: Number,
    required: 'Contact Number is required.',
  },
  address: {
    type: String,
    trim: true,
    required: 'Address is required.',
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


HotelSchema.pre('save', function(next) {
    let hotel = this;
    if (this.isModified('user_id')  || this.isNew) {
        hotel.user_id   = mongoose.Types.ObjectId(hotel.user_id);
        next();
    }else{
      return next();
    }
});

HotelSchema.set('autoIndex', config.db.autoIndex);
HotelSchema.plugin(uniqueValidator, {
    type: 'mongoose-unique-validator'
});

var hotelCollection = mongoose.model('hotel', HotelSchema);
module.exports      = hotelCollection;