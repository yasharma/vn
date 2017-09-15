'use strict';
const 
    mongoose        = require('mongoose'),
    path            = require('path'),
    config          = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
    Schema          = mongoose.Schema,
    ObjectId 		= Schema.ObjectId;


var PhoneDirectorySchema 	= new Schema({
  
	hotel_id: {
	    type: ObjectId
	},
	first_name: {
        type: String,
        trim: true,
        required:"First name should not be blank."
    },
    last_name: {
        type: String,
        trim: true,
        required:"Last name should not be blank."
    },
    contact: {
        type: Number,
        trim: true,
        required:"Contact Number should not be blank."
    },
    favorite: {
	    type: String,
        enum: ['yes','no'],
        default: 'no'
	},
	email: {
        type: String,
        lowercase: true,
        trim: true,
        validate: {
          validator: function(email) {
            return /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);
          },
          message: '{VALUE} is not a valid email address'
        }
    },
    tags: {
	    type: Array,
	}
},{
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    },
});

PhoneDirectorySchema.pre('save', function(next) {
    let phonedirectory = this;
    if (this.isModified('hotel_id')  || this.isNew) {
        phonedirectory.hotel_id 	= mongoose.Types.ObjectId(phonedirectory.hotel_id);
        next();
    }else{
      return next();
    }
});

PhoneDirectorySchema.set('autoIndex', config.db.autoIndex);
module.exports = mongoose.model('PhoneDirectory', PhoneDirectorySchema);
