var mongoose      = require('mongoose'),
  path            = require('path'),
  uniqueValidator = require('mongoose-unique-validator'),
  config          = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
  crypto          = require('crypto'),
  Schema          = mongoose.Schema,
  ObjectId        = Schema.ObjectId;


var EmployeeSchema  = new Schema({
  
  profile_image:{
    type: String,
  },
  first_name: {
        type: String,
        validate: {
          isAsync: true,
          validator: function(v, cb) {
            setTimeout(function() {
              var phoneRegex = /^[a-zA-Z]*$/;
              var msg = v + ' is not a valid first name.';
              cb(phoneRegex.test(v), msg);
            }, 5);
          },
          message: 'Error in first name.'
        },
        required: [true, 'First name is required']
      },
  last_name: {
        type: String,
        validate: {
          isAsync: true,
          validator: function(v, cb) {
            setTimeout(function() {
              var phoneRegex = /^[a-zA-Z]*$/;
              var msg = v + ' is not a valid last name.';
              cb(phoneRegex.test(v), msg);
            }, 5);
          },
          message: 'Error in last name.'
        },
        required: [true, 'Last name is required']
      },
  contact_number: {
        type: String,
        validate: {
          isAsync: true,
          validator: function(v, cb) {
            setTimeout(function() {
              var phoneRegex = /^\d+$/;
              var msg = v + ' is not a valid contact number.';
              cb(phoneRegex.test(v), msg);
            }, 5);
          },
          message: 'Error in contact number.'
        },
        required: [true, 'Contact number is required']
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
  hotel_id: {
      type: ObjectId,
  },
  user_name: {
      type: String,
  },
  signupVerificationKey: {
    type: String
  },
  departments:{
    type: Array
  },
  position: {
      type: Array,
  },
  invitationstatus: {
    type: String,
    enum: ['verified','unverified'],
    default: 'unverified'
  },
  status: {
    type: String,
    enum: ['active','inactive','deleted'],
    default: 'active'
  }
},{
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    }
});

/* Mongoose beforeSave Hook : To hash a password */
EmployeeSchema.pre('save', function(next) {
    let employee = this;
        if(this.isNew){
        employee.signupVerificationKey    = crypto.createHash('md5').update((employee.first_name + Math.floor((Math.random() * 1000) + 1))).digest("hex");
        employee.hotel_id                 = mongoose.Types.ObjectId(employee.hotel_id);
        return next();
    } else {
        return next();
    }
});



EmployeeSchema.set('autoIndex', config.db.autoIndex);
EmployeeSchema.plugin(uniqueValidator, {
    type: 'mongoose-unique-validator'
});

var userCollection = mongoose.model('Employee', EmployeeSchema);
module.exports = userCollection;