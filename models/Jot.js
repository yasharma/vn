var mongoose      = require('mongoose'),
  path            = require('path'),
  config          = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
  Schema          = mongoose.Schema,
  ObjectId    = Schema.ObjectId;

var JotSchema  = new Schema({
  image:{
    type: Array
  },
  jot_title: {
    type: String,
    trim: true,
    required: 'Jot title can not be empty.',
  },

  jot_description: {
    type: String,
    trim: true,
  },

  due_date: {
    type: Number, 
  },
  start_date: {
    type: Number, 

  },
  end_date: {
    type: Number, 
  },
  priority: {
    type: String,
  },
  jot_type: {
    type: String,
  },
  assigned_members: {
    type: Array,
  },
  jot_members: {
    type: String,
  },
  department: {
    type: String,
  },

  assigned_departments: {
    type: Array,
  },
  hotel_room: {
    type: String,
  },
  attachment: {
    type: String,
    default: false
  },
  checklist: {
    type: Array,
    default: []
  },
  hotel_id: {
    type: ObjectId,
  },
  user_id: {
    type: ObjectId,
  },
  move_dc: {
    type: String,
    default: false
  },
  task_type: {
    type:  Object,
    default: false
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

JotSchema.pre('save', function(next) {
    let jot = this;
    if (this.isModified('hotel_id')  || this.isNew) {
        jot.hotel_id   = mongoose.Types.ObjectId(jot.hotel_id);
        next();
    }else{
      return next();
    }
});

JotSchema.set('autoIndex', config.db.autoIndex);
var jotCollection   = mongoose.model('jot', JotSchema);
module.exports      = jotCollection;