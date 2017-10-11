var mongoose      = require('mongoose'),
  Schema          = mongoose.Schema,
  ObjectId        = Schema.ObjectId
  path            = require('path'),
  config          = require(path.resolve(`./config/env/${process.env.NODE_ENV}`));

var VendingSchema  = new Schema({
  
  hotel_id: {
    type: ObjectId,
  },
  image: {
    type: String,
  },
  item_name: {
    type: String,
    trim: true,
    required: 'Item name is required.' 
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
  },
   quantity: {
    type: Number,
  },
  sku_code: {
    type: String,
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

VendingSchema.pre('save', function(next) {
    let vending = this;
    if (this.isModified('hotel_id')  || this.isNew) {
        vending.hotel_id   = mongoose.Types.ObjectId(vending.hotel_id);
        next();
    }else{
      return next();
    }
});

VendingSchema.set('autoIndex', config.db.autoIndex);
module.exports = mongoose.model('Vending', VendingSchema);
