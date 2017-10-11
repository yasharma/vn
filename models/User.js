var mongoose      = require('mongoose'),
  path            = require('path'),
  uniqueValidator = require('mongoose-unique-validator'),
  config          = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
  crypto          = require('crypto'),
  Schema          = mongoose.Schema,
  ObjectId        = Schema.ObjectId;


var UserSchema  = new Schema({
 
  profile_image:{
    type: String
  },
  first_name: {
        type: String,
        /*validate: {
          isAsync: true,
          validator: function(v, cb) {
            setTimeout(function() {
              var phoneRegex = /^[a-zA-Z]*$/;
              var msg = v + ' is not a valid first name.';
              cb(phoneRegex.test(v), msg);
            }, 5);
          },
          message: 'Error in first name.'
        },*/
        required: [true, 'First name is required']
      },
  last_name: {
        type: String,
        /*validate: {
          isAsync: true,
          validator: function(v, cb) {
            setTimeout(function() {
              var phoneRegex = /^[a-zA-Z]*$/;
              var msg = v + ' is not a valid last name.';
              cb(phoneRegex.test(v), msg);
            }, 5);
          },
          message: 'Error in last name.'
        },*/
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
    },
    required: [function (email) {
        if(this.role == 'hotelowner' ){
            return true;
        } else {
            return false;
        }
      }, 'Email address is required.']
  },
  user_name: {
    type: String,
  },
  role: {
    type: String,
    enum: ['staff','admin','hotelowner'],
    default: 'staff'
  },
  passwordReset: {
    type: Object
  },
  password: {
    type: String,
    required: 'Password is required.',
    minlength: [6, 'Password must be atleast 6 characters long.']
  },
  status: {
    type: String,
    enum: ['active','inactive','deleted'],
    default: 'inactive'
  },
  email_verify: {
        type: String,
        enum: ['verified','unverified'],
        default: 'unverified'
  },
  emailVerificationKey: {
        type: String
  },
  department: {
    type: Array,
  },
  position: {
    type: String,
    trim: true,
    default: false
  },
  hotel_id: {
      type: Array,
  },
  address: {
    type: String,
  },
  salt: { 
    type: String 
  }
},{
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    }
});

/* Mongoose beforeSave Hook : To hash a password */
UserSchema.pre('save', function(next) {
    let user = this;
    if (this.isModified('password') || this.isNew) {

        if(this.isNew){
            //user.emailVerificationKey   = crypto.createHash('md5').update((user.first_name + Math.floor((Math.random() * 1000) + 1))).digest("hex");
        }
        
        user.salt         = crypto.randomBytes(16).toString('hex');
        user.password     = this.hashPassword(config.salt, user.password);
        user.status       = 'active';
        user.email_verify = 'verified';
        
        return next();
    } else {
        return next();
    }
});

/**
 * Create instance method for hashing a password
 */
 
UserSchema.methods.hashPassword = function(salt, password) {
    if (salt && password) {
        return crypto.createHmac('sha512', salt).update(password).digest('base64');
    } else {
        return password;
    }
};


/* To check a password */
UserSchema.methods.comparePassword = function(salt, password) {
    return this.password === this.hashPassword(salt, password);
};

UserSchema.set('autoIndex', config.db.autoIndex);
UserSchema.plugin(uniqueValidator, {
    type: 'mongoose-unique-validator'
});

var userCollection = mongoose.model('user', UserSchema);
module.exports = userCollection;