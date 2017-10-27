var mongoose      = require('mongoose'),
  Schema          = mongoose.Schema,
  ObjectId        = Schema.ObjectId,
  path            = require('path'),
  config          = require(path.resolve(`./config/env/${process.env.NODE_ENV}`));

var CartSchema  = new Schema({
  
  hotel_id: {
    type: ObjectId,
  },
  user_id: {
    type: ObjectId,
  },
  items: {
    type: Object,
  },
  user_info: {
    type: Object,
    default: false
  },
  date:{
    type: Number,
    default: false
  },
  payment:{
    type: Object,
    default: false
  },
  status: {
    type: String,
    enum: ['cancelled','delivered','modified'],
    default: 'delivered'
  },
},{
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    }
});

CartSchema.pre('save', function(next) {
    let cart = this;
    if (this.isModified('hotel_id')  || this.isModified('user_id') || this.isNew) {
        cart.hotel_id   = mongoose.Types.ObjectId(cart.hotel_id);
        cart.user_id    = mongoose.Types.ObjectId(cart.user_id);
        next();
    }else{
      return next();
    }
});

CartSchema.set('autoIndex', config.db.autoIndex);
module.exports = mongoose.model('Cart', CartSchema);
