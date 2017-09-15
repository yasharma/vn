var mongoose      = require('mongoose'),
  path            = require('path'),
  config          = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
  Schema          = mongoose.Schema,
  ObjectId        = Schema.ObjectId;

var JotActivity  = new Schema({
  
  hotel_id: {
    type: ObjectId,
  },
  user_id: {
    type: ObjectId,
  },
  jot_id: {
    type: ObjectId,
  },
  message: {
    type: String,
    required: 'Activity message is required.',
  },
  attachment: {
    type: Array,
  },
  post_date:{
    type: Number
  },
  status: {
    type: String,
    default: false
  }
},{
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    }
});

JotActivity.pre('save', function(next) {

    let jot_activity = this;

    if (this.isModified('hotel_id')  || this.isNew) {
        
        jot_activity.hotel_id    = mongoose.Types.ObjectId(jot_activity.hotel_id);
        jot_activity.user_id     = mongoose.Types.ObjectId(jot_activity.user_id);
        jot_activity.jot_id      = mongoose.Types.ObjectId(jot_activity.jot_id);

        next();
    }else{
      return next();
    }
});

JotActivity.set('autoIndex', config.db.autoIndex);
var jotCollection   = mongoose.model('JotActivity', JotActivity);
module.exports      = jotCollection;