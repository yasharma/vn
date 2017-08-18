var mongoose      = require('mongoose'),
  Schema          = mongoose.Schema,
  path            = require('path'),
  config          = require(path.resolve(`./config/env/${process.env.NODE_ENV}`));
     
var DepartmentSchema  = new Schema({
  
  hotel_id: {
    type: String,
    default: false
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
    default: false
  },
},{
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    }
});
DepartmentSchema.set('autoIndex', config.db.autoIndex);
var departmentCollection  = mongoose.model('department', DepartmentSchema);
module.exports            = departmentCollection;