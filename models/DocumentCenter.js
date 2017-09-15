'use strict';
const 
    mongoose        = require('mongoose'),
    path            = require('path'),
    config          = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
    Schema          = mongoose.Schema,
    ObjectId        = Schema.ObjectId;


var DocumentCenterSchema    = new Schema({
  
    hotel_id: {
        type: ObjectId
    },
    
    document_name: {
        type: String,
        trim: true,
        required:"Document name can not be empty."
    },

    document_description: {
        type: String,
    },

    department: {
        type: String,
    },
    ismoved: {
        type: String,
        enum:['created','moved'],
        default:'created'
    },
    moved_data: {
        type: Array,
        default: []
    },
    upload_date:{
        type: Number
    },
    files:{
        type: Array
    },
    tags: {
        type: Array,
    }
},{
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    },
});

DocumentCenterSchema.pre('save', function(next) {
    let documentcenter = this;
    if (this.isModified('hotel_id')  || this.isNew) {
        documentcenter.hotel_id     = mongoose.Types.ObjectId(documentcenter.hotel_id);
        next();
    }else{
      return next();
    }
});

DocumentCenterSchema.set('autoIndex', config.db.autoIndex);
module.exports = mongoose.model('DocumentCenter', DocumentCenterSchema);
