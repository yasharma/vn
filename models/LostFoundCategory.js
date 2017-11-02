var mongoose      = require('mongoose'),
  Schema          = mongoose.Schema,
  ObjectId        = Schema.ObjectId,
  path            = require('path'),
  config          = require(path.resolve(`./config/env/${process.env.NODE_ENV}`));

var CategorySchema  = new Schema({
  hotel_id: {
    type: ObjectId,
  },
  category_name: {
    type: String,
    default: false,
    required: 'Category name can not be empty.',
  }
},{
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    }
});

CategorySchema.pre('save', function(next) {
    let category = this;
    if (this.isModified('hotel_id')  || this.isNew) {
        category.hotel_id   = mongoose.Types.ObjectId(category.hotel_id);
        next();
    }else{
      return next();
    }
});

CategorySchema.set('autoIndex', config.db.autoIndex);
module.exports = mongoose.model('lostfoundCategory', CategorySchema);
