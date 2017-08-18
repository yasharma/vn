var mongoose      = require('mongoose'),
  Schema          = mongoose.Schema,
  path            = require('path'),
  config          = require(path.resolve(`./config/env/${process.env.NODE_ENV}`));

var VendingSchema  = new Schema({
  
  hotel_id: {
    type: String,
    default: false
  },
  image: {
    type: String,
    trim: true,
  },
  item_name: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
  price: {
    type: String,
    trim: true,
  },
   quantity: {
    type: Number,
    trim: true,
  },
  sku_code: {
    type: String,
    trim: true,
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

VendingSchema.set('autoIndex', config.db.autoIndex);
module.exports = mongoose.model('Vending', VendingSchema);
