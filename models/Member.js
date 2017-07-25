var mongoose      = require('mongoose'),
  Schema          = mongoose.Schema,
  path 			      = require('path'),
  uniqueValidator = require('mongoose-unique-validator'),
  config 			    = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
  crypto 			    = require('crypto');

var MemberSchema  = new Schema({
  
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
  first_name: {
    type: String,
    trim: true,
    required: 'First name can not be empty.',
  },
  last_name: {
    type: String,
    trim: true,
    required: 'Last name can not be empty.',
  },
  user_name: {
    type: String,
    trim: true,
    required: 'User name can not be empty.',
    unique: 'The User Name you have entered already exists.',
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
      message: '{VALUE} is not a valid email address.'
    }
  },
  phone: {
    type: Number,
    default: false
  },
  department: {
    type: String,
    trim: true,
    default: false
  },
  designation: {
    type: String,
    trim: true,
    default: false
  },
  role: {
    type: String,
    trim: true,
    default: false
  },
  status: {
    type: Boolean,
    default: false
  },
},{
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    }
});


MemberSchema.set('autoIndex', config.db.autoIndex);
MemberSchema.plugin(uniqueValidator, {
    type: 'mongoose-unique-validator'
});

var memberCollection = mongoose.model('member', MemberSchema);
module.exports       = memberCollection;