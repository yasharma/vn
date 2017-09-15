var mongoose      = require('mongoose'),
  path            = require('path'),
  config          = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
  Schema          = mongoose.Schema,
  ObjectId        = Schema.ObjectId;


var DepartmentSchema  = new Schema({
  
  hotel_id: {
        type: ObjectId,
    },
  department_name: {
    type: String,
    trim: true,
    required: 'Department name can not be empty.',
  },
  abbreviation: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ['active','deactive'],
    default: 'deactive'
  },
  bgcolor: {
    type: String,
    default: "#fff"
  },
},{
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    }
});

DepartmentSchema.pre('save', function(next) {
    let department = this;
    if (this.isModified('hotel_id')  || this.isNew) {
        department.hotel_id   = mongoose.Types.ObjectId(department.hotel_id);
        next();
    }else{
      return next();
    }
});

DepartmentSchema.set('autoIndex', config.db.autoIndex);
var departmentCollection  = mongoose.model('department', DepartmentSchema);
module.exports            = departmentCollection;