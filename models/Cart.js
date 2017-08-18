var mongoose      = require('mongoose'),
  Schema          = mongoose.Schema,
  path            = require('path'),
  config          = require(path.resolve(`./config/env/${process.env.NODE_ENV}`));

var CartSchema  = new Schema({
  
  hotel_id: {
    type: String,
    default: false
  },
  items: {
    type: Object,
    default: []
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
    default: false
  },
},{
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    }
});

CartSchema.set('autoIndex', config.db.autoIndex);
module.exports = mongoose.model('Cart', CartSchema);
