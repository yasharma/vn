var mongoose      = require('mongoose'),
  path            = require('path'),
  config          = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
  Schema          = mongoose.Schema,
  ObjectId        = Schema.ObjectId;


var DepartmentPositionSchema  = new Schema({
  
  hotel_id: {
        type: ObjectId,
    },
  department_id: {
        type: ObjectId,
    },
  position: {
    type: String,
    trim: true,
    required: 'Position name is required.',
  },
  status: {
    type: String,
    enum: ['active','deactive'],
    default: 'active'
  }
},{
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    }
});

DepartmentPositionSchema.pre('save', function(next) {
    let position = this;
    if (this.isNew) {
        position.hotel_id         = mongoose.Types.ObjectId(position.hotel_id);
        position.department_id    = mongoose.Types.ObjectId(position.department_id);
        next();
    }else{
      return next();
    }
});

DepartmentPositionSchema.set('autoIndex', config.db.autoIndex);
var departmentCollection  = mongoose.model('DepartmentPosition', DepartmentPositionSchema);
module.exports            = departmentCollection;