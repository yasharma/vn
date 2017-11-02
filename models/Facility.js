var mongoose      = require('mongoose'),
  Schema          = mongoose.Schema,
  ObjectId        = Schema.ObjectId
  path            = require('path'),
  config          = require(path.resolve(`./config/env/${process.env.NODE_ENV}`));

var FacilitySchema  = new Schema({
  
  hotel_id: {
    type: ObjectId,
  },
  image: {
    type: String,
    required: 'Image is required.'
  },
  name: {
    type: String,
    trim: true,
    required: 'Item name is required.' 
  },  
},{
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    }
});

FacilitySchema.pre('save', function(next) {
    let Facility = this;
    if (this.isModified('hotel_id')  || this.isNew) {
        Facility.hotel_id   = mongoose.Types.ObjectId(Facility.hotel_id);
        next();
    }else{
      return next();
    }
});

FacilitySchema.set('autoIndex', config.db.autoIndex);
module.exports = mongoose.model('Facility', FacilitySchema);
