var mongoose      = require('mongoose'),
  Schema          = mongoose.Schema,
  path            = require('path'),
  config          = require(path.resolve(`./config/env/${process.env.NODE_ENV}`));

var CategorySchema  = new Schema({
  hotel_id: {
    type: String,
    default: false
  },
  inventory_category_name: {
    type: String,
    default: false,
    required: 'Category name can not be empty.',
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

CategorySchema.set('autoIndex', config.db.autoIndex);
module.exports = mongoose.model('Category', CategorySchema);
